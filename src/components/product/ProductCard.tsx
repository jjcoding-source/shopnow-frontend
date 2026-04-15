import { Heart, ShoppingCart } from "lucide-react";
import type { Product } from "../../types";
import { useCartStore } from "../../store/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  showDiscount?: boolean;
}

const ProductCard = ({ product, showDiscount = true }: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      color: "Default",
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-[#AFA9EC] transition-all group">
      <div className="relative h-64 bg-[#EEEDFE] flex items-center justify-center text-8xl">
        {product.image}
        
        {showDiscount && product.discount && (
          <div className="absolute top-4 left-4 bg-[#534AB7] text-white text-xs px-4 py-1 rounded-2xl font-medium">
            -{product.discount}%
          </div>
        )}

        <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-[#EEEDFE]">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6">
        <div className="text-xs uppercase tracking-widest text-gray-500">
          {product.brand} · {product.category}
        </div>
        
        <h3 className="font-semibold mt-2 line-clamp-2 leading-tight min-h-[44px]">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mt-3 text-amber-400">
          {"★".repeat(Math.floor(product.rating))}
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <span className="text-2xl font-semibold text-[#534AB7]">
              ₹{product.price}
            </span>
            {product.oldPrice && (
              <span className="line-through text-gray-400 ml-2 text-sm">
                ₹{product.oldPrice}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-[#534AB7] hover:bg-[#4338A0] text-white px-6 py-2.5 rounded-2xl text-sm font-medium transition-all flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;