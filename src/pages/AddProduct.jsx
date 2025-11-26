import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AddProduct() {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto p-6"
    >
      {/* Page Title */}
      <h1
        className="
          text-3xl font-extrabold mb-6 
          bg-gradient-to-r from-purple-400 to-blue-400 
          bg-clip-text text-transparent
        "
      >
        Add New Product
      </h1>

      {/* Form Card */}
      <div
        className="
          p-6 rounded-2xl
          bg-white/50 dark:bg-white/10
          backdrop-blur-xl
          border border-purple-400/20
          shadow-[0_0_20px_rgba(168,85,247,0.25)]
        "
      >
        <ProductForm
          initial={{
            title: "",
            price: "",
            description: "",
            category: "",
            image: "",
          }}
          onSubmit={(product) => {
            addProduct(product);
            navigate("/");
          }}
        />
      </div>
    </motion.div>
  );
}
