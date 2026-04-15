import { 
  ArrowRight, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  Headphones 
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#F1F0FF]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#EEEDFE] to-[#E6F1FB] py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-[#26215C] tracking-tight">
              Discover <span className="text-[#534AB7]">Amazing</span> Products<br />
              at Unbeatable Prices
            </h1>
            <p className="mt-6 text-lg text-[#3C3489] max-w-md">
              Shop thousands of curated products with fast delivery, easy returns, and secure payments.
            </p>

            <div className="mt-10 flex gap-4">
              <Link 
                to="/shop" 
                className="bg-[#534AB7] hover:bg-[#4338A0] text-white px-8 py-3.5 rounded-2xl font-medium flex items-center gap-2 transition-all"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-[#534AB7] text-[#534AB7] hover:bg-[#EEEDFE] px-8 py-3.5 rounded-2xl font-medium transition-all">
                View Deals
              </button>
            </div>

            {/* Trust Stats */}
            <div className="mt-16 flex gap-12">
              <div>
                <div className="text-3xl font-semibold text-[#26215C]">50K+</div>
                <div className="text-sm text-[#3C3489]">Products</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#26215C]">200K+</div>
                <div className="text-sm text-[#3C3489]">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#26215C]">4.9★</div>
                <div className="text-sm text-[#3C3489]">Avg Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="h-40 bg-[#EEEDFE] rounded-2xl flex items-center justify-center text-6xl">👟</div>
              <div className="mt-4 text-center">
                <div className="text-sm text-[#3C3489]">Air Runners</div>
                <div className="font-semibold text-[#534AB7]">$89.99</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="h-40 bg-[#E6F1FB] rounded-2xl flex items-center justify-center text-6xl">⌚</div>
                <div className="mt-4 text-center">
                  <div className="text-sm text-[#3C3489]">Smart Watch</div>
                  <div className="font-semibold text-[#534AB7]">$249</div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="h-40 bg-[#FAEEDA] rounded-2xl flex items-center justify-center text-6xl">🎧</div>
                <div className="mt-4 text-center">
                  <div className="text-sm text-[#3C3489]">Pro Headset</div>
                  <div className="font-semibold text-[#534AB7]">$159</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Banner Strip */}
      <div className="bg-[#534AB7] py-4 text-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center md:justify-between gap-8 text-sm">
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5" />
            <span>Free shipping on orders over $49</span>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="w-5 h-5" />
            <span>30-day easy returns</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5" />
            <span>Secure payments</span>
          </div>
          <div className="flex items-center gap-3">
            <Headphones className="w-5 h-5" />
            <span>24/7 customer support</span>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-semibold text-[#26215C]">Shop by Category</h2>
            <Link to="/categories" className="text-[#534AB7] text-sm flex items-center gap-1 hover:underline">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: "Electronics", icon: "📱" },
              { name: "Fashion", icon: "👗" },
              { name: "Home & Living", icon: "🏠" },
              { name: "Beauty", icon: "💄" },
              { name: "Sports", icon: "🏋️" },
              { name: "Books", icon: "📚" },
            ].map((cat, i) => (
              <div key={i} className="group bg-[#F8F7FF] border border-gray-100 hover:border-[#534AB7] rounded-3xl p-8 text-center transition-all cursor-pointer">
                <div className="text-5xl mb-6 transition-transform group-hover:scale-110">{cat.icon}</div>
                <div className="font-medium text-[#26215C]">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-20 px-8 bg-[#F1F0FF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-semibold text-[#26215C]">Featured Products</h2>
            <div className="flex gap-3">
              <button className="bg-[#534AB7] text-white px-6 py-2 rounded-2xl text-sm font-medium">All</button>
              <button className="bg-white border border-gray-200 px-6 py-2 rounded-2xl text-sm font-medium text-[#3C3489] hover:border-[#534AB7]">New Arrivals</button>
              <button className="bg-white border border-gray-200 px-6 py-2 rounded-2xl text-sm font-medium text-[#3C3489] hover:border-[#534AB7]">Trending</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Card */}
            {[1,2,3,4].map((_, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#AFA9EC] transition-all group">
                <div className="h-64 bg-[#EEEDFE] flex items-center justify-center text-8xl relative">
                  {i === 0 && <div className="absolute top-4 left-4 bg-[#534AB7] text-white text-xs px-3 py-1 rounded-lg">−20%</div>}
                  🎧
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all">
                    ♡
                  </button>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-gray-500">Electronics</div>
                  <h3 className="font-semibold mt-2 line-clamp-2">Sony WH-1000XM5 Wireless Noise Cancelling</h3>
                  <div className="flex items-center gap-1 mt-3 text-amber-400">★★★★★</div>
                  <div className="mt-4 flex justify-between itms-end">
                    <div>
                      <span className="text-2xl font-semibold text-[#534AB7]">$319</span>
                      {i === 0 && <span className="line-through text-gray-400 ml-2">$399</span>}
                    </div>
                    <button className="bg-[#534AB7] text-white px-6 py-2 rounded-2xl text-sm font-medium hover:bg-[#4338A0]">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending This Week */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-semibold text-[#26215C]">Trending This Week</h2>
            <Link to="/shop" className="text-[#534AB7] flex items-center gap-1 text-sm hover:underline">
              See all trends <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Trending Card */}
            <div className="md:col-span-2 bg-[#EEEDFE] rounded-3xl p-12 relative overflow-hidden min-h-[340px] flex flex-col justify-end">
              <div className="absolute top-8 right-8 text-9xl opacity-20">💻</div>
              <div className="inline-block bg-[#534AB7] text-white text-xs px-4 py-1 rounded-lg mb-6"> #1 Trending </div>
              <h3 className="text-4xl font-semibold text-[#26215C]">MacBook Pro M3</h3>
              <p className="mt-4 text-[#3C3489] max-w-md">The most powerful laptop for professionals. Now with M3 chip for blazing-fast performance.</p>
              <div className="mt-8 flex items-center justify-between">
                <div className="text-3xl font-semibold text-[#534AB7]">$1,999</div>
                <button className="bg-[#534AB7] text-white px-8 py-3 rounded-2xl font-medium">Shop Now</button>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-8">
              {[ 
                { name: "PS5 Console", price: "$499", emoji: "🎮" },
                { name: "Canon EOS R50", price: "$699", emoji: "📷" }
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F7FF] border border-gray-100 rounded-3xl p-8 flex gap-6 hover:border-[#534AB7] transition-all cursor-pointer">
                  <div className="text-6xl">{item.emoji}</div>
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">Gaming</p>
                    <div className="text-xl font-semibold text-[#534AB7] mt-4">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;