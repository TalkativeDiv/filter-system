import { Product } from "@/db";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
interface CartStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
  clearItems: () => void;
}

export const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      removeItem: (item) =>
        set((state) => {
          const index = state.items.findIndex((i) => i === item);
          if (index !== -1) {
            const newItems = [...state.items];
            newItems.splice(index, 1); // Remove only the first occurrence
            return { items: newItems };
          }
          return state;
        }),
      clearItems: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
