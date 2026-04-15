import { useState } from "react";
import { User, Package, Heart, MapPin, Star, LogOut } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<"info" | "orders" | "wishlist">("info");

  return (
    <div className="bg-[#F1F0FF] min-h-screen">

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-10 text-sm font-medium overflow-x-auto">
            <button
              onClick={() => setActiveTab("info")}
              className={`py-6 border-b-2 transition-all ${activeTab === "info" ? "border-[#534AB7] text-[#534AB7]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
            >
              👤 Personal Info
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`py-6 border-b-2 transition-all ${activeTab === "orders" ? "border-[#534AB7] text-[#534AB7]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
            >
              📦 My Orders
            </button>
            <button
              onClick={() => setActiveTab("wishlist")}
              className={`py-6 border-b-2 transition-all ${activeTab === "wishlist" ? "border-[#534AB7] text-[#534AB7]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
            >
              ❤️ Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {activeTab === "info" && (
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 text-center">
                <div className="w-24 h-24 mx-auto bg-[#534AB7] text-white rounded-full flex items-center justify-center text-4xl font-medium">
                  JD
                </div>
                <h3 className="mt-6 font-semibold text-xl">John Doe</h3>
                <p className="text-sm text-gray-500">john.doe@email.com</p>

                <div className="mt-10 space-y-2">
                  <div className="flex items-center gap-3 p-3 hover:bg-[#F8F7FF] rounded-2xl cursor-pointer text-left">
                    <User className="w-5 h-5" /> Personal Info
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-[#F8F7FF] rounded-2xl cursor-pointer text-left">
                    <Package className="w-5 h-5" /> My Orders
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-[#F8F7FF] rounded-2xl cursor-pointer text-left">
                    <Heart className="w-5 h-5" /> Wishlist
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-[#F8F7FF] rounded-2xl cursor-pointer text-left">
                    <MapPin className="w-5 h-5" /> Addresses
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-[#F8F7FF] rounded-2xl cursor-pointer text-left">
                    <Star className="w-5 h-5" /> My Reviews
                  </div>
                </div>

                <button className="mt-12 w-full py-3 text-red-600 hover:bg-red-50 rounded-2xl flex items-center justify-center gap-2">
                  <LogOut className="w-5 h-5" /> Sign Out
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-10">
              <div className="bg-white rounded-3xl border border-gray-200 p-10">
                <h2 className="text-xl font-semibold mb-8">Personal Information</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-xs text-gray-500 block mb-2">First name</label>
                    <input defaultValue="John" className="w-full border border-gray-200 rounded-2xl px-6 py-4" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 block mb-2">Last name</label>
                    <input defaultValue="Doe" className="w-full border border-gray-200 rounded-2xl px-6 py-4" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs text-gray-500 block mb-2">Email address</label>
                    <input defaultValue="john.doe@email.com" type="email" className="w-full border border-gray-200 rounded-2xl px-6 py-4" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 block mb-2">Phone number</label>
                    <input defaultValue="+91 98765 43210" className="w-full border border-gray-200 rounded-2xl px-6 py-4" />
                  </div>
                </div>

                <button className="mt-10 bg-[#534AB7] text-white px-10 py-3.5 rounded-2xl font-medium">
                  Save Changes
                </button>
              </div>

              {/* Account Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Total Orders", value: "24", color: "#534AB7" },
                  { label: "Wishlist Items", value: "8", color: "#534AB7" },
                  { label: "Reviews Given", value: "12", color: "#534AB7" },
                  { label: "Total Spent", value: "$2.1K", color: "#534AB7" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-3xl p-8 text-center">
                    <div className="text-4xl font-semibold" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-3">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="bg-white rounded-3xl border border-gray-200 p-10">
            <h2 className="text-xl font-semibold mb-8">Order History</h2>
            <div className="space-y-8">
              {[
                { id: "#ORD-8821", date: "Apr 10, 2025", name: "Sony WH-1000XM5", amount: "319.99", status: "Delivered" },
                { id: "#ORD-8819", date: "Apr 7, 2025", name: "Apple Watch Series 9", amount: "399.00", status: "Shipped" },
                { id: "#ORD-8801", date: "Mar 28, 2025", name: "Nike Air Max 270", amount: "298.00", status: "Delivered" },
              ].map((order, i) => (
                <div key={i} className="flex gap-8 items-center border-b pb-8 last:border-0 last:pb-0">
                  <div className="w-16 h-16 bg-[#EEEDFE] rounded-2xl flex items-center justify-center text-4xl">🎧</div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">{order.id} · {order.date}</div>
                    <div className="font-medium mt-1">{order.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">₹{order.amount}</div>
                    <div className="mt-2 inline-block px-5 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      {order.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "wishlist" && (
          <div>
            <h2 className="text-xl font-semibold mb-8">My Wishlist (8 items)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Sony WH-1000XM5", "Apple Watch Ultra 2", "Nike Air Max 270"].map((name, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
                  <div className="h-56 bg-[#EEEDFE] flex items-center justify-center text-8xl">🎧</div>
                  <div className="p-6">
                    <div className="font-medium">{name}</div>
                    <div className="text-[#534AB7] font-semibold mt-2">₹319.99</div>
                    <button className="mt-6 w-full bg-[#534AB7] text-white py-3 rounded-2xl text-sm font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Profile;