import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "foodproject_wishlist";

const readWishlist = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const useWishlist = () => {
  const [wishlistIds, setWishlistIds] = useState(readWishlist);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  const isWishlisted = useCallback(
    (id) => wishlistIds.includes(id),
    [wishlistIds]
  );

  const toggleWishlist = useCallback((id) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  return { wishlistIds, isWishlisted, toggleWishlist };
};

export default useWishlist;
