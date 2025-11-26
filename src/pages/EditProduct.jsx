import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";
import { motion } from "framer-motion";

export default function EditProduct() {
  const { id } = useParams();
  const { products, updateProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id == id);

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
      className="max-w-3xl mx-auto p-6"
    >
      
      <h1
        className="
          text-3xl font-extrabold mb-6 
          bg-gradient-to-r from-purple-400 to-blue-400 
          bg-clip-text text-transparent
        "
      >
        Edit Product
      </h1>

      
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
          initial={product}
          onSubmit={(updated) => {
            updateProduct(product.id, { ...updated, id: product.id });
            navigate(`/product/${product.id}`);
          }}
        />
      </div>
    </motion.div>
  );
}
