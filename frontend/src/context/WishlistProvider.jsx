import React, { createContext, useContext } from "react";
import useWishlist from "../hooks/useWishlist";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const wishlist = useWishlist();
  return (
    <WishlistContext.Provider value={wishlist}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlistContext must be used within WishlistProvider");
  }
  return ctx;
};

export default WishlistProvider;
