import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { motion } from "framer-motion";

export default function WishlistButton({ id }) {
  const { wishlist, toggleWishlist, darkMode } = useContext(ProductContext);
  const active = wishlist.includes(id);

  // Dynamic colors based on theme
  const inactiveColor = darkMode ? "rgba(255,255,255,0.6)" : "#555";
  const inactiveShadow = darkMode
    ? "0 0 6px rgba(255,255,255,0.3)"
    : "0 0 4px rgba(0,0,0,0.2)";

  return (
    <motion.button
      onClick={() => toggleWishlist(id)}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      animate={active ? { scale: [1, 1.25, 1] } : {}}
      transition={{ duration: 0.3 }}
      className="
        text-2xl font-bold
        p-1 rounded-full
        shadow-lg
        backdrop-blur-md
        bg-white/40 dark:bg-black/30
        border border-purple-400/20
        absolute top-2 right-2
      "
      style={{
        color: active ? "#ff3b6a" : inactiveColor,
        textShadow: active
          ? "0 0 12px rgba(255, 75, 105, 0.9), 0 0 24px rgba(255, 50, 90, 0.8)"
          : inactiveShadow,
      }}
    >
      ♥
    </motion.button>
  );
}
