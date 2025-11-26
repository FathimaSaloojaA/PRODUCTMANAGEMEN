import { Link } from "react-router-dom";
import WishlistButton from "./WishlistButton";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -3,
        boxShadow: "0 0 18px rgba(168, 85, 247, 0.3)",
      }}
      transition={{ duration: 0.25 }}
      className="
        relative p-5 rounded-xl 

        /* Glassmorphism background */
        bg-white/60 dark:bg-white/10 
        backdrop-blur-lg 

        /* Border & subtle neon */
        border border-purple-400/20 
        hover:border-purple-400/40 

        /* Smooth elevation */
        shadow-md hover:shadow-purple-400/20 
        transition-all cursor-pointer
      "
    >
      {/* Wishlist (top-right) */}
      <div className="absolute top-3 right-3 z-10">
        <WishlistButton id={product.id} />
      </div>

      <Link to={`/product/${product.id}`} className="block">

        {/* IMAGE */}
        <motion.img
          src={product.image}
          alt={product.title}
          className="
            h-44 w-full object-contain mb-4 
            transition-transform
          "
          whileHover={{ scale: 1.06 }}
        />

        {/* TITLE */}
        <h2
          className="
            text-lg font-semibold 
            text-gray-900 dark:text-gray-100 
            mb-1 line-clamp-2
            group-hover:text-purple-300 transition
          "
        >
          {product.title}
        </h2>

        {/* PRICE */}
        <p
          className="
            text-xl font-bold 
            bg-gradient-to-r from-green-400 to-emerald-500 
            bg-clip-text text-transparent
          "
        >
          ${product.price}
        </p>
      </Link>
    </motion.div>
  );
}
