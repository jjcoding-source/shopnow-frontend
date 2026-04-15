import { Grid3X3, List, X } from "lucide-react";
import { useState } from "react";
import ProductCard from "../components/product/ProductCard";
import type { Product } from "../types";

const products: Product[] = [
  {
    id: 1,
    name: "WH-1000XM5 Noise Cancelling",
    brand: "Sony",
    category: "Electronics",
    price: 319,
    oldPrice: 399,
    rating: 4.9,
    image: "\uD83C\uDFA7",
    inStock: true,
    discount: 20,
  },
  {
    id: 2,
    name: "QuietComfort 45 Headphones",
    brand: "Bose",
    category: "Electronics",
    price: 329,
    rating: 4.8,
    image: "\uD83C\uDFB5",
    inStock: true,
  },
  {
    id: 3,
    name: "MDR-7506 Professional Studio",
    brand: "Sony",
    category: "Electronics",
    price: 99,
    oldPrice: 119,
    rating: 4.6,
    image: "\uD83C\uDFA7",
    inStock: true,
  },
  {
    id: 4,
    name: "SoundLink Around-Ear II",
    brand: "Bose",
    category: "Electronics",
    price: 179,
    rating: 4.5,
    image: "\uD83D\uDD0A",
    inStock: true,
  },
  {
    id: 5,
    name: "WH-XB910N Extra Bass ANC",
    brand: "Sony",
    category: "Electronics",
    price: 169,
    oldPrice: 199,
    rating: 4.4,
    image: "\uD83C\uDFB6",
    inStock: true,
    discount: 15,
  },
  {
    id: 6,
    name: "NC 700 Noise Cancelling",
    brand: "Bose",
    category: "Electronics",
    price: 379,
    rating: 4.7,
    image: "\uD83C\uDFA4",
    inStock: true,
  },
];

const Shop = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "Sony",
    "Bose",
    "In Stock",
    "$0-$500",
  ]);

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const clearAllFilters = () => setActiveFilters([]);

  return (
    <div className="bg-[#F1F0FF] min-h-screen">
      <div className="bg-white border-b border-gray-200 py-4 px-8 text-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[#888780]">
          Home / <span className="text-[#534AB7] font-medium">Electronics</span> /
          <span className="text-[#26215C]"> Headphones</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 flex gap-8">
        <div className="w-64 flex-shrink-0 bg-white border border-gray-200 rounded-3xl p-6 h-fit sticky top-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-semibold text-lg text-[#26215C]">Filters</h3>
            <button
              onClick={clearAllFilters}
              className="text-xs text-[#534AB7] hover:underline"
            >
              Clear all
            </button>
          </div>

          <div className="mb-10">
            <div className="font-medium mb-4 text-[#26215C]">Categories</div>
            {["Headphones", "Earbuds", "Speakers", "Microphones", "Accessories"].map(
              (cat, i) => (
                <div key={i} className="flex justify-between items-center py-2.5 text-sm">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div
                      className={`w-4 h-4 border rounded ${
                        i === 0 ? "bg-[#534AB7] border-[#534AB7]" : "border-gray-300"
                      }`}
                    />
                    {cat}
                  </label>
                  <span className="text-xs text-gray-400">234</span>
                </div>
              )
            )}
          </div>

          <div className="mb-10">
            <div className="font-medium mb-4 text-[#26215C]">Price Range</div>
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                placeholder="Min $"
                className="bg-[#F8F7FF] border border-gray-200 rounded-xl px-4 py-2 text-sm w-full"
                defaultValue="0"
              />
              <input
                type="text"
                placeholder="Max $"
                className="bg-[#F8F7FF] border border-gray-200 rounded-xl px-4 py-2 text-sm w-full"
                defaultValue="500"
              />
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              defaultValue="500"
              className="w-full accent-[#534AB7]"
            />
          </div>

          <div className="mb-10">
            <div className="font-medium mb-4 text-[#26215C]">Rating</div>
            {[5, 4, 3].map((stars) => (
              <div key={stars} className="flex items-center gap-3 py-2 text-sm cursor-pointer">
                <span className="text-amber-400">
                  {"\u2605".repeat(stars)}
                  {"\u2606".repeat(5 - stars)}
                </span>
                <span className="text-[#3C3489]">{stars}+ stars (389)</span>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <div className="font-medium mb-4 text-[#26215C]">Brand</div>
            {["Sony", "Bose", "JBL", "Apple", "Sennheiser"].map((brand, i) => (
              <div key={i} className="flex justify-between items-center py-2.5 text-sm">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div
                    className={`w-4 h-4 border rounded ${
                      i < 2 ? "bg-[#534AB7] border-[#534AB7]" : "border-gray-300"
                    }`}
                  />
                  {brand}
                </label>
                <span className="text-xs text-gray-400">45</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-[#534AB7] hover:bg-[#4338A0] text-white py-3 rounded-2xl font-medium mt-6">
            Apply Filters
          </button>
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="text-sm text-[#3C3489]">
              Showing <strong>1-18</strong> of 234 results for <strong>"Headphones"</strong>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="bg-white border border-gray-200 rounded-2xl px-4 py-2 text-sm focus:outline-none focus:border-[#534AB7]">
                  <option>Best Match</option>
                  <option>Price: Low-High</option>
                  <option>Price: High-Low</option>
                  <option>Newest</option>
                  <option>Top Rated</option>
                </select>
              </div>

              <div className="flex border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 ${
                    viewMode === "grid" ? "bg-[#534AB7] text-white" : "text-gray-500"
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 ${
                    viewMode === "list" ? "bg-[#534AB7] text-white" : "text-gray-500"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-sm text-gray-500 self-center">Active:</span>
              {activeFilters.map((filter, i) => (
                <div
                  key={i}
                  className="bg-[#EEEDFE] text-[#534AB7] text-sm px-4 py-1.5 rounded-full flex items-center gap-2"
                >
                  {filter}
                  <button onClick={() => removeFilter(filter)} className="hover:text-red-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div
            className={`grid ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                : "grid-cols-1 gap-6"
            }`}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-16">
            <button className="w-10 h-10 border border-gray-200 rounded-2xl flex items-center justify-center hover:border-[#534AB7]">
              {"\u2039"}
            </button>
            <button className="w-10 h-10 bg-[#534AB7] text-white rounded-2xl flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 border border-gray-200 rounded-2xl flex items-center justify-center hover:border-[#534AB7]">
              2
            </button>
            <button className="w-10 h-10 border border-gray-200 rounded-2xl flex items-center justify-center hover:border-[#534AB7]">
              3
            </button>
            <button className="w-10 h-10 border border-gray-200 rounded-2xl flex items-center justify-center hover:border-[#534AB7]">
              {"\u2026"}
            </button>
            <button className="w-10 h-10 border border-gray-200 rounded-2xl flex items-center justify-center hover:border-[#534AB7]">
              13
            </button>
            <button className="w-10 h-10 border border-gray-200 rounded-2xl flex items-center justify-center hover:border-[#534AB7]">
              {"\u203A"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
