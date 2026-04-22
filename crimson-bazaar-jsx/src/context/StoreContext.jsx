import { createContext, useContext, useEffect, useState } from "react";























const StoreContext = createContext(null);

const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(() => load("cb_cart", []));
  const [wishlist, setWishlist] = useState(() => load("cb_wishlist", []));
  const [user, setUser] = useState(() => load("cb_user", null));

  useEffect(() => {localStorage.setItem("cb_cart", JSON.stringify(cart));}, [cart]);
  useEffect(() => {localStorage.setItem("cb_wishlist", JSON.stringify(wishlist));}, [wishlist]);
  useEffect(() => {localStorage.setItem("cb_user", JSON.stringify(user));}, [user]);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) return prev.map((i) => i.product.id === product.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { product, qty }];
    });
  };
  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.product.id !== id));
  const updateQty = (id, qty) => setCart((prev) => prev.map((i) => i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i));
  const clearCart = () => setCart([]);
  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const toggleWishlist = (id) => setWishlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  const inWishlist = (id) => wishlist.includes(id);

  const login = (email, name) => setUser({ email, name: name || email.split("@")[0] });
  const logout = () => setUser(null);

  return (
    <StoreContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, cartTotal, cartCount, wishlist, toggleWishlist, inWishlist, user, login, logout }}>
      {children}
    </StoreContext.Provider>);

};

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
};