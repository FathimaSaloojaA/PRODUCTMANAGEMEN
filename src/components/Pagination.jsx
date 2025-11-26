import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { motion } from "framer-motion";

export default function Pagination() {
  const { page, setPage, totalPages } = useContext(ProductContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex justify-center items-center gap-4 mt-10"
    >
      {/* PREV BUTTON */}
      <motion.button
        whileHover={{ scale: page <= 1 ? 1 : 1.08 }}
        whileTap={{ scale: 0.9 }}
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
        className="
          px-5 py-2 rounded-xl 
          font-semibold
          bg-white/40 dark:bg-white/10
          backdrop-blur-lg
          border border-purple-400/30 
          text-gray-900 dark:text-white
          shadow-sm
          disabled:opacity-30
          transition-all
        "
      >
        Prev
      </motion.button>

      {/* PAGE COUNTER */}
      <span
        className="
          text-lg font-bold 
          bg-gradient-to-r from-purple-400 to-blue-400
          bg-clip-text text-transparent
        "
      >
        {page} / {totalPages}
      </span>

      {/* NEXT BUTTON */}
      <motion.button
        whileHover={{ scale: page >= totalPages ? 1 : 1.08 }}
        whileTap={{ scale: 0.9 }}
        disabled={page >= totalPages}
        onClick={() => setPage(page + 1)}
        className="
          px-5 py-2 rounded-xl 
          font-semibold
          bg-white/40 dark:bg-white/10
          backdrop-blur-lg
          border border-purple-400/30 
          text-gray-900 dark:text-white
          shadow-sm
          disabled:opacity-30
          transition-all
        "
      >
        Next
      </motion.button>
    </motion.div>
  );
}
