import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ open, onClose, onConfirm }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-50 
            bg-black/60 backdrop-blur-sm
            flex items-center justify-center
          "
        >
          
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            className="
              w-[90%] max-w-md p-6 rounded-2xl text-center
              
              /* Glassmorphism */
              bg-white/40 dark:bg-white/10
              backdrop-blur-xl

              /* Neon border */
              border border-purple-400/30
              shadow-[0_0_25px_rgba(168,85,247,0.25)]
            "
          >
            <p
              className="
                text-lg font-semibold mb-6
                text-gray-900 dark:text-gray-100
              "
            >
              Are you sure you want to delete this product?
            </p>

            
            <div className="flex justify-center gap-4">

              
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={onConfirm}
                className="
                  px-5 py-2 rounded-lg font-semibold
                  bg-gradient-to-r from-red-500 to-red-700 
                  text-white shadow-lg 
                  hover:shadow-red-500/40
                  transition
                "
              >
                Delete
              </motion.button>

              
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={onClose}
                className="
                  px-5 py-2 rounded-lg font-semibold 
                  bg-gray-300 dark:bg-gray-700 
                  text-black dark:text-white
                  border border-gray-500/20
                  shadow-md 
                  hover:shadow-gray-500/20
                  transition
                "
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
