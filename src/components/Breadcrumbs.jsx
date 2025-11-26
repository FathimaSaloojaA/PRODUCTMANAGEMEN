import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Breadcrumbs({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="text-sm mb-6 flex flex-wrap items-center gap-1"
    >
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-1">

          {/* LINK or TEXT */}
          {item.to ? (
            <motion.span whileHover={{ scale: 1.05 }}>
              <Link
                to={item.to}
                className="
                  font-semibold
                  bg-gradient-to-r from-purple-400 to-blue-400 
                  bg-clip-text text-transparent
                  hover:opacity-80 transition
                "
              >
                {item.label}
              </Link>
            </motion.span>
          ) : (
            <span
              className="
                font-semibold 
                text-gray-800 dark:text-gray-200
              "
            >
              {item.label}
            </span>
          )}

          {/* SEPARATOR */}
          {idx < items.length - 1 && (
            <span
              className="
                text-purple-400/70 
                font-bold 
                mx-1
              "
            >
              /
            </span>
          )}
        </span>
      ))}
    </motion.div>
  );
}
