import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { darkMode, setDarkMode, search, setSearch } =
    useContext(ProductContext);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        py-4 px-6 mb-6 rounded-xl 
        shadow-xl
        backdrop-blur-md 
        bg-white/10 dark:bg-gray-900/40
        border border-purple-400/20
        max-w-7xl mx-auto 
      `}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        
        <Link
          to="/"
          className="
            text-3xl font-extrabold tracking-wide 
            bg-gradient-to-r from-purple-400 to-blue-400 
            bg-clip-text text-transparent 
            hover:opacity-80 transition
          "
        >
          PickNow
        </Link>

        
        <div className="w-full md:w-1/2">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Search products..."
            className="
              w-full px-4 py-2 rounded-xl 
              bg-white/30 dark:bg-gray-800/40
              backdrop-blur-lg 
              border border-purple-300/20 
              text-black dark:text-white 
              placeholder-gray-600 dark:placeholder-gray-300
              focus:ring-2 focus:ring-purple-500 
              transition-all
            "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        
        <div className="flex items-center gap-4">

          
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/add"
              className="
                px-4 py-2 rounded-lg font-semibold 
                bg-gradient-to-r from-purple-500 to-blue-500 
                text-white shadow-lg 
                hover:shadow-[0_0_10px_rgba(168,85,247,0.6)]
                transition
              "
            >
              + Add
            </Link>
          </motion.div>

          
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="
              w-10 h-10 flex items-center justify-center 
              rounded-full 
              bg-gray-300 dark:bg-gray-700
              text-black dark:text-white 
              border border-purple-400/30
              shadow-md
              transition
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
