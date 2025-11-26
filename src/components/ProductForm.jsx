import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductForm({ initial, onSubmit }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});

  function validate() {
    let errs = {};

    if (!form.title.trim()) errs.title = "Title is required";
    if (!form.price || isNaN(form.price)  ) errs.price = "Valid price required";
     if ( form.price<=10 ) errs.price = "Price should be greater than 10";
    if (!form.description.trim()) errs.description = "Description required";
    if (!form.category.trim()) errs.category = "Category required";
    if (!form.image || !form.image.startsWith("http"))
      errs.image = "Valid image URL required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) onSubmit(form);
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {["title", "price", "description", "category", "image"].map((field) => (
        <div key={field} className="relative">
          {/* LABEL */}
          <label
            className="
              block mb-1 text-sm font-semibold 
              text-gray-800 dark:text-gray-200 capitalize
            "
          >
            {field}
          </label>

          {/* INPUT */}
          <input
            value={form[field]}
            onChange={(e) =>
              setForm({ ...form, [field]: e.target.value })
            }
            className="
              w-full px-4 py-3 rounded-xl text-gray-900 dark:text-white 
              bg-white/40 dark:bg-white/10 
              backdrop-blur-lg

              border border-purple-400/30
              focus:border-purple-400
              focus:ring-2 focus:ring-purple-500

              transition-all outline-none
              placeholder-gray-600 dark:placeholder-gray-300
              shadow-sm
            "
            placeholder={`Enter ${field}`}
          />

          {/* ERROR MESSAGE */}
          {errors[field] && (
            <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
          )}
        </div>
      ))}

      {/* SUBMIT BUTTON */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.92 }}
        className="
          w-full py-3 rounded-xl font-semibold
          text-white 
          bg-gradient-to-r from-purple-500 to-blue-500 
          shadow-lg hover:shadow-purple-500/40
          transition-all
        "
      >
        Submit
      </motion.button>
    </motion.form>
  );
}
