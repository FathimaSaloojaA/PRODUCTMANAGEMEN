import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import WishlistButton from "../components/WishlistButton";
import Modal from "../components/Modal";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, deleteProduct } = useContext(ProductContext);

  const product = products.find((p) => p.id == id);
  const [open, setOpen] = useState(false);

  if (!product)
    return (
      <p className="text-center text-red-500 text-xl mt-10">
        Product not found
      </p>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* BREADCRUMBS */}
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: product.category, to: "/" },
          { label: product.title },
        ]}
      />

      {/* PRODUCT CONTAINER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="
          max-w-3xl mx-auto relative p-8 rounded-2xl 

          bg-white/50 dark:bg-white/10 
          backdrop-blur-xl

          border border-purple-400/30 
          shadow-[0_0_20px_rgba(168,85,247,0.25)]

          transition-all
        "
      >
        {/* WISHLIST BUTTON */}
        <div className="absolute top-4 right-4">
          <WishlistButton id={product.id} />
        </div>

        {/* PRODUCT IMAGE */}
        <motion.img
          src={product.image}
          alt={product.title}
          className="h-64 mx-auto object-contain mb-6"
          whileHover={{ scale: 1.08 }}
        />

        {/* TITLE */}
        <h1
          className="
            text-3xl font-extrabold 
            text-gray-900 dark:text-gray-100 
            mb-2
          "
        >
          {product.title}
        </h1>

        {/* PRICE */}
        <p
          className="
            text-3xl font-bold mb-4
            bg-gradient-to-r from-green-400 to-emerald-500 
            bg-clip-text text-transparent
          "
        >
          ${product.price}
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to={`/edit/${product.id}`}
              className="
                px-5 py-2 rounded-lg font-semibold
                bg-yellow-500 hover:bg-yellow-600 
                text-white shadow
                transition
              "
            >
              Edit
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <button
              onClick={() => setOpen(true)}
              className="
                px-5 py-2 rounded-lg font-semibold
                bg-red-600 hover:bg-red-700 
                text-white shadow
                transition
              "
            >
              Delete
            </button>
          </motion.div>
        </div>

        {/* DELETE CONFIRM MODAL */}
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => {
            deleteProduct(product.id);
            navigate("/");
          }}
        />
      </motion.div>
    </motion.div>
  );
}
