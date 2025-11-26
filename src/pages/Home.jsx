import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";
import SortBar from "../components/SortBar";
import Pagination from "../components/Pagination";
import { motion } from "framer-motion";

export default function Home() {
  const { paginatedProducts, totalPages } = useContext(ProductContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 mt-6"
    >

      
      <div
        className="
          flex flex-col sm:flex-row gap-4 items-center justify-between 
          p-4 rounded-xl 
          bg-white/50 dark:bg-white/10
          backdrop-blur-lg 
          border border-purple-400/20
          shadow-md
        "
      >
        <Filters />
        <SortBar />
      </div>

     
      <ProductList products={paginatedProducts} />

      
      {totalPages > 1 && (
        <div className="pt-4">
          <Pagination />
        </div>
      )}
    </motion.div>
  );
}
