import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { motion } from "framer-motion";

export default function SortBar() {
  const { sortType, setSortType } = useContext(ProductContext);

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
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option
          className="text-black dark:text-white bg-white dark:bg-gray-900"
          value=""
        >
          Sort
        </option>

        <option
          value="low-high"
          className="text-black dark:text-white bg-white dark:bg-gray-900"
        >
          Price: Low → High
        </option>

        <option
          value="high-low"
          className="text-black dark:text-white bg-white dark:bg-gray-900"
        >
          Price: High → Low
        </option>

        <option
          value="az"
          className="text-black dark:text-white bg-white dark:bg-gray-900"
        >
          Name A–Z
        </option>

        <option
          value="za"
          className="text-black dark:text-white bg-white dark:bg-gray-900"
        >
          Name Z–A
        </option>
      </select>
    </motion.div>
  );
}
