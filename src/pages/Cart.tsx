import { 
  ArrowLeft, 
  Trash2, 
  Truck, 
  CreditCard 
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Cart = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1); // 1=Cart, 2=Address, 3=Review, 4=Payment, 5=Confirmation
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "WH-1000XM5 Wireless Noise Canceling",
      brand: "Sony",
      price: 319.99,
      oldPrice: 399.99,
      quantity: 1,
      color: "Midnight Black",
      image: "🎧"
    },
    {
      id: 2,
      name: "Apple Watch Series 9 GPS 45mm",
      brand: "Apple",
      price: 399.00,
      quantity: 1,
      color: "Midnight",
      image: "⌚"
    },
    {
      id: 3,
      name: "Air Max 270 React Running Shoes",
      brand: "Nike",
      price: 149.00,
      oldPrice: 180.00,
      quantity: 2,
      color: "Black/White",
      image: "👟"
    }
  ]);

  const updateQuantity = (id: number, newQty: number) => {
    if (newQty < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQty } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 159.99;
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal - discount + shipping + tax;

  return (
    <div className="bg-[#F1F0FF] min-h-screen">

      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center w-full max-w-3xl">
            {[
              { num: 1, label: "Cart" },
              { num: 2, label: "Address" },
              { num: 3, label: "Review" },
              { num: 4, label: "Payment" },
              { num: 5, label: "Confirmation" }
            ].map((s, index) => (
              <div key={index} className="flex items-center flex-1 last:flex-none">
                <div className={`flex flex-col items-center ${step >= s.num ? 'text-[#534AB7]' : 'text-gray-400'}`}>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 font-medium text-sm
                    ${step === s.num ? 'bg-[#534AB7] border-[#534AB7] text-white' : 
                      step > s.num ? 'bg-[#534AB7] border-[#534AB7] text-white' : 'border-gray-300'}`}>
                    {step > s.num ? '✓' : s.num}
                  </div>
                  <div className="text-xs mt-2 font-medium">{s.label}</div>
                </div>
                {index < 4 && (
                  <div className={`flex-1 h-0.5 mx-4 mt-4 ${step > s.num ? 'bg-[#534AB7]' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
                <div className="px-8 py-6 border-b flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Your Cart ({cartItems.length} items)</h2>
                  <Link to="/shop" className="text-[#534AB7] text-sm flex items-center gap-1 hover:underline">
                    Continue shopping <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="p-8 border-b last:border-0 flex gap-8">
                    <div className="w-24 h-24 bg-[#EEEDFE] rounded-2xl flex items-center justify-center text-5xl flex-shrink-0">
                      {item.image}
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-gray-500">{item.brand}</div>
                      <h3 className="font-semibold text-lg leading-tight mt-1">{item.name}</h3>
                      <div className="text-sm text-gray-500 mt-2">Color: {item.color}</div>

                      <div className="mt-6 flex items-center gap-8">
                        <div className="flex border border-gray-200 rounded-2xl overflow-hidden">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-4 py-2 hover:bg-gray-100">-</button>
                          <div className="px-6 py-2 border-x font-medium">{item.quantity}</div>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-4 py-2 hover:bg-gray-100">+</button>
                        </div>

                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 flex items-center gap-2 text-sm"
                        >
                          <Trash2 className="w-4 h-4" /> Remove
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-semibold text-2xl text-[#534AB7]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      {item.oldPrice && (
                        <div className="line-through text-gray-400 text-sm mt-1">
                          ${ (item.oldPrice * item.quantity).toFixed(2) }
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Coupon */}
                <div className="p-8 bg-[#F8F7FF]">
                  <div className="flex gap-4">
                    <input 
                      type="text" 
                      placeholder="Coupon or promo code" 
                      className="flex-1 bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm" 
                    />
                    <button className="bg-[#534AB7] text-white px-10 rounded-2xl font-medium">Apply</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 sticky top-8">
                <h3 className="font-semibold text-xl mb-8">Order Summary</h3>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.reduce((sum, i) => sum + i.quantity, 0)} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount (SAVE20)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t my-8" />

                <div className="flex justify-between text-lg font-semibold mb-8">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-[#534AB7] hover:bg-[#4338A0] text-white py-4 rounded-2xl font-medium text-lg"
                >
                  Proceed to Checkout
                </button>

                <div className="flex justify-center gap-6 mt-8 text-xs text-gray-400">
                  <span>VISA</span><span>MC</span><span>PayPal</span><span>Stripe</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {step > 1 && (
          <div className="text-center py-32">
            <h2 className="text-3xl font-semibold mb-4">Address</h2>
            <p className="text-gray-500">Address / Review / Payment / Confirmation flow </p>
            <button 
              onClick={() => setStep(1)}
              className="mt-8 text-[#534AB7] underline"
            >
              ← Back to Cart
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Cart;