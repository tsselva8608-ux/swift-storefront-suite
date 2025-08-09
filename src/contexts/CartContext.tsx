import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number; // cents
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  count: number;
  subtotal: number; // cents
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "swift_cart";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try { setItems(JSON.parse(raw)); } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem: CartContextType["addItem"] = (item, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found) {
        return prev.map((p) => p.id === item.id ? { ...p, quantity: p.quantity + qty } : p);
      }
      return [...prev, { ...item, quantity: qty }];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));
  const clear = () => setItems([]);

  const count = useMemo(() => items.reduce((a, b) => a + b.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((a, b) => a + b.price * b.quantity, 0), [items]);

  const value = { items, count, subtotal, addItem, removeItem, clear };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
