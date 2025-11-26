import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import toast from "../utils/toast.js";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortType, setSortType] = useState("");
  const [page, setPage] = useState(1);

  const PRODUCTS_PER_PAGE = 6;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) throw new Error("Unable to fetch product data");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // ----------------- CRUD --------------------
  const addProduct = (product) => {
    product.id = Date.now();
    setProducts([product, ...products]);
    toast("Product added!");
  };

  const updateProduct = (id, updated) => {
    setProducts(products.map((p) => (p.id === id ? updated : p)));
    toast("Product updated!");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    toast("Product deleted!");
  };

  // ----------------- Wishlist --------------------
  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((w) => w !== id));
      toast("Removed from wishlist");
    } else {
      setWishlist([...wishlist, id]);
      toast("Added to wishlist");
    }
  };

  // ----------------- Filters --------------------
  const filteredProducts = products
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category === "All" ? true : p.category === category
    );

  // ----------------- Sorting --------------------
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortType) {
      case "low-high":
        return a.price - b.price;
      case "high-low":
        return b.price - a.price;
      case "az":
        return a.title.localeCompare(b.title);
      case "za":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  // ----------------- Pagination --------------------
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(start, start + PRODUCTS_PER_PAGE);
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        addProduct,
        updateProduct,
        deleteProduct,
        wishlist,
        toggleWishlist,
        darkMode,
        setDarkMode,

        search, setSearch,
        category, setCategory,
        sortType, setSortType,
        page, setPage,
        paginatedProducts,
        totalPages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
