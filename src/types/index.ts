export interface Product {
  id: number;
  name: string;
  slug?: string;
  description?: string;
  price: number;
  oldPrice?: number;
  image: string;
  brand: string;
  category: string;
  rating: number;
  reviewCount?: number;
  inStock: boolean;
  discount?: number;
}

export interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  color?: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export type ViewMode = "grid" | "list";