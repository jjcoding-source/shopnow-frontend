import { Camera, Globe, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-semibold text-[#534AB7]">Shop</span>
              <span className="text-2xl font-semibold text-[#26215C]">Now</span>
            </div>
            <p className="text-sm text-[#3C3489] max-w-xs">
              Your one-stop destination for quality products at the best prices, delivered fast to your door.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#534AB7]"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[#534AB7]"><Camera className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[#534AB7]"><Send className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h5 className="font-medium text-[#26215C] mb-4">Shop</h5>
            <div className="space-y-2 text-sm text-[#3C3489]">
              <p>New Arrivals</p>
              <p>Best Sellers</p>
              <p>Deals & Offers</p>
            </div>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-medium text-[#26215C] mb-4">Support</h5>
            <div className="space-y-2 text-sm text-[#3C3489]">
              <p>Help Center</p>
              <p>Track Order</p>
              <p>Returns</p>
              <p>Contact Us</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-medium text-[#26215C] mb-4">Newsletter</h5>
            <p className="text-sm text-[#3C3489] mb-3">Get deals and new arrivals in your inbox.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-[#F8F7FF] border border-gray-200 rounded-l-xl px-4 py-2 text-sm flex-1 outline-none"
              />
              <button className="bg-[#534AB7] text-white px-6 rounded-r-xl text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 ShopNow. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>VISA</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>Stripe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
