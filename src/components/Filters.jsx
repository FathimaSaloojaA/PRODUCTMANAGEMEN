import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { motion } from "framer-motion";

export default function Filters() {
  const { category, setCategory } = useContext(ProductContext);

  const categories = [
    "All",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <select
        className="
          px-4 py-2 rounded-xl 
          bg-white/40 dark:bg-white/10 
          backdrop-blur-lg 

          border border-purple-400/30 
          text-gray-900 dark:text-white 
          shadow-sm

          focus:ring-2 focus:ring-purple-500 
          transition-all cursor-pointer
        "
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((c) => (
          <option
            key={c}
            value={c}
            className="text-black dark:text-white bg-white dark:bg-gray-900"
          >
            {c}
          </option>
        ))}
      </select>
    </motion.div>
  );
}
