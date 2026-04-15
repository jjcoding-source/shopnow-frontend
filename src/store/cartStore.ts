import { create } from 'zustand';
import type { CartItem } from '../types';

type CartStore = {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addToCart: (product) => {
    set((state) => {
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        return {
          items: state.items.map(item =>
            item.id === product.id 
              ? { ...item, quantity: item.quantity + (product.quantity || 1) } 
              : item
          )
        };
      }
      return { 
        items: [...state.items, { ...product, quantity: product.quantity || 1 }] 
      };
    });
  },

  removeFromCart: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),

  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    )
  })),

  clearCart: () => set({ items: [] }),

  getTotalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
  getSubtotal: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));