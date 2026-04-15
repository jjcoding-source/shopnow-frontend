import { ShoppingCart, Heart, User, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

const Navbar = () => {
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <span className="text-2xl font-semibold text-[#534AB7]">Shop</span>
          <span className="text-2xl font-semibold text-[#26215C]">Now</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-[#F8F7FF] border border-gray-200 rounded-xl px-4 py-2 w-full max-w-md mx-8">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-sm flex-1 placeholder:text-gray-400"
          />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3C3489]">
          <Link to="/" className="hover:text-[#534AB7] transition-colors">
            Home
          </Link>
          <Link to="/shop" className="hover:text-[#534AB7] transition-colors">
            Shop
          </Link>
          <Link
            to="/categories"
            className="hover:text-[#534AB7] transition-colors"
          >
            Categories
          </Link>
          <Link to="/deals" className="hover:text-[#534AB7] transition-colors">
            Deals
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <Link
            to="/wishlist"
            className="relative text-[#3C3489] hover:text-[#534AB7] transition-colors"
          >
            <Heart className="w-5 h-5" />
          </Link>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative text-[#3C3489] hover:text-[#534AB7] transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <div className="absolute -top-1 -right-1 bg-[#534AB7] text-white text-[10px] font-medium w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </div>
            )}
          </Link>

          <Link
            to="/profile"
            className="w-8 h-8 bg-[#EEEDFE] rounded-full flex items-center justify-center text-[#534AB7] font-medium text-sm hover:bg-[#534AB7] hover:text-white transition-all"
          >
            JD
          </Link>

          <button className="md:hidden text-[#3C3489]">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
