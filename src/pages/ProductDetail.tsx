import { 
  Heart, 
  ShoppingCart, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  Star, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");

  const images = ["🎧", "📦", "🔌", "📐", "🎵"]; // In real app these would be URLs

  const colors = [
    { name: "Midnight Black", hex: "#1a1a1a" },
    { name: "Silver", hex: "#e8e0d0" },
    { name: "Blue", hex: "#2c4a7c" },
  ];

  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="bg-[#F1F0FF] min-h-screen">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4 px-8 text-sm text-[#888780]">
        <div className="max-w-7xl mx-auto">
          Home / Electronics / Headphones / <span className="text-[#534AB7]">Sony WH-1000XM5</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div>
            <div className="flex gap-6">
              {/* Thumbnails */}
              <div className="flex flex-col gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 bg-[#EEEDFE] rounded-2xl flex items-center justify-center text-3xl border-2 transition-all ${
                      selectedImage === index 
                        ? "border-[#534AB7] scale-105" 
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    {img}
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 relative bg-[#EEEDFE] rounded-3xl aspect-square flex items-center justify-center text-[180px] shadow-inner overflow-hidden">
                {images[selectedImage]}
                
                {/* Badges */}
                <div className="absolute top-6 left-6 bg-[#534AB7] text-white text-sm px-5 py-1.5 rounded-2xl font-medium">
                  -20% OFF
                </div>
                <button className="absolute top-6 right-6 bg-white p-4 rounded-full shadow-md hover:bg-[#EEEDFE] transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="text-sm text-gray-500">Sony · Electronics · Headphones</div>
            
            <h1 className="text-4xl font-semibold leading-tight text-[#26215C] mt-3">
              Sony WH-1000XM5 Wireless Industry-Leading Noise Canceling Headphones
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex text-2xl text-amber-400">★★★★★</div>
              <div>
                <span className="font-semibold text-xl">4.9</span>
                <span className="text-[#3C3489] ml-2">(2,148 reviews)</span>
              </div>
              <span className="text-[#534AB7] cursor-pointer hover:underline">View all reviews</span>
            </div>

            {/* Price */}
            <div className="mt-8 flex items-baseline gap-4">
              <span className="text-5xl font-semibold text-[#534AB7]">$319.99</span>
              <span className="text-2xl line-through text-gray-400">$399.99</span>
              <span className="text-green-600 font-medium">Save $80</span>
            </div>
            <div className="text-sm text-green-600 mt-1">Free delivery · In stock · Ships in 1–2 days</div>

            {/* Color Selector */}
            <div className="mt-10">
              <div className="text-sm font-medium text-[#3C3489] mb-3">
                Color: <span className="font-semibold text-[#26215C]">{colors[selectedColor].name}</span>
              </div>
              <div className="flex gap-4">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-10 h-10 rounded-full border-4 transition-all ${
                      selectedColor === index 
                        ? "border-[#534AB7] shadow-md" 
                        : "border-white"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8 flex items-center gap-6">
              <span className="text-sm font-medium text-[#3C3489]">Qty:</span>
              <div className="flex border border-gray-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-3 hover:bg-gray-100 transition-colors"
                >
                  −
                </button>
                <div className="px-8 py-3 border-x border-gray-200 font-medium">{quantity}</div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-3 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
              <span className="text-green-600 text-sm">✓ 42 left in stock</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex gap-4">
              <button className="flex-1 bg-[#534AB7] hover:bg-[#4338A0] text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-3 transition-all">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="flex-1 bg-[#26215C] hover:bg-black text-white py-4 rounded-2xl font-medium transition-all">
                Buy Now
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-12 bg-[#F8F7FF] rounded-3xl p-8 space-y-6 text-sm">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center"><Truck className="w-5 h-5" /></div>
                <div>Free standard delivery (3–5 days)</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">⚡</div>
                <div>Express delivery available — $8.99</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center"><RotateCcw className="w-5 h-5" /></div>
                <div>30-day hassle-free returns</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center"><ShieldCheck className="w-5 h-5" /></div>
                <div>Secure Stripe payment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex border-b">
            {["Description", "Specifications", "Reviews (2,148)"].map((tab, index) => {
              const tabKey = ["description", "specs", "reviews"][index] as "description" | "specs" | "reviews";
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-10 py-6 text-sm font-medium border-b-2 transition-all ${
                    activeTab === tabKey 
                      ? "border-[#534AB7] text-[#534AB7]" 
                      : "border-transparent text-[#3C3489] hover:text-[#534AB7]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {activeTab === "description" && (
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#3C3489] leading-relaxed">
                Experience industry-leading noise cancellation with the Sony WH-1000XM5. Eight microphones and two processors continuously scan and eliminate background noise.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {[
                  "30-hour battery life with quick charge",
                  "Industry-leading noise cancellation",
                  "Crystal clear hands-free calling",
                  "Multipoint connection (2 devices)",
                  "Hi-Res Audio with LDAC support"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#534AB7] font-medium">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-3xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    ["Driver Unit", "30mm"],
                    ["Frequency", "4 Hz – 40,000 Hz"],
                    ["Battery", "30 hours"],
                    ["Connectivity", "Bluetooth 5.2"],
                    ["Weight", "250 g"],
                    ["Microphones", "8 mics, AI processing"]
                  ].map(([key, value], i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="bg-[#F8F7FF] px-8 py-5 text-sm text-[#3C3489] w-1/3">{key}</td>
                      <td className="px-8 py-5 text-sm">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <div className="flex gap-16 mb-12">
              <div className="text-center">
                <div className="text-7xl font-semibold text-[#26215C]">4.9</div>
                <div className="text-4xl text-amber-400 mt-2">★★★★★</div>
                <div className="text-sm text-gray-500 mt-3">2,148 reviews</div>
              </div>

              <div className="flex-1 space-y-5">
                {[5,4,3,2,1].map((star) => (
                  <div key={star} className="flex items-center gap-6">
                    <div className="w-8 text-right text-sm font-medium">{star}★</div>
                    <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-400 rounded-full"
                        style={{ width: star === 5 ? "82%" : star === 4 ? "12%" : "6%" }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 w-10">1,7{star}1</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Reviews */}
            <div className="space-y-8">
              <div className="border border-gray-200 rounded-3xl p-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#EEEDFE] rounded-full flex items-center justify-center font-medium text-[#534AB7]">AK</div>
                  <div>
                    <div className="font-medium">Alex Kim</div>
                    <div className="text-xs text-gray-500">Verified Purchase · 2 days ago</div>
                  </div>
                  <div className="ml-auto text-2xl text-amber-400">★★★★★</div>
                </div>
                <p className="mt-6 text-[#3C3489]">
                  Absolutely incredible noise cancellation — perfect for open office work. The sound quality is warm and detailed.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Related Products */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-semibold text-[#26215C] mb-10">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Bose QC45", price: "$329", img: "🎵" },
              { name: "Apple AirPods Max", price: "$549", img: "🎧" },
              { name: "Sony WH-CH720N", price: "$149", img: "🔊" },
              { name: "Sennheiser HD 660S", price: "$499", img: "🎶" }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-3xl overflow-hidden hover:border-[#534AB7] transition-all cursor-pointer">
                <div className="h-52 bg-[#F8F7FF] flex items-center justify-center text-7xl">
                  {item.img}
                </div>
                <div className="p-6">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-[#534AB7] font-semibold mt-2">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;