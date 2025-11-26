import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import ProductProvider, { ProductContext } from "./context/ProductContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import NotFound from "./pages/NotFound";

function AppContent() {
  const { darkMode } = useContext(ProductContext);

  // 🔥 Apply theme class to <html> element
  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark-theme");
      html.classList.remove("light-theme");
    } else {
      html.classList.add("light-theme");
      html.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <ProductProvider>
      <AppContent />
    </ProductProvider>
  );
}
