import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 bg-gradient-to-tr from-purple-900 via-black to-blue-900 text-gray-300 py-10 border-t border-purple-500/20">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">
            <span className="text-purple-400">Pick</span> Now
          </h1>
          <p className="text-gray-400 text-sm">
            Premium products with seamless shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link className="hover:text-purple-400" to="/">Home</Link></li>
            <li><Link className="hover:text-purple-400" to="/wishlist">Wishlist</Link></li>
            <li><Link className="hover:text-purple-400" to="/cart">Cart</Link></li>
            <li><Link className="hover:text-purple-400" to="/products">Products</Link></li>
          </ul>
        </div>

        {/* Social icons */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex gap-4">

            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-purple-500/20 transition">
              <Facebook size={20} />
            </a>

            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-purple-500/20 transition">
              <Instagram size={20} />
            </a>

            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-purple-500/20 transition">
              <Github size={20} />
            </a>

            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-purple-500/20 transition">
              <Mail size={20} />
            </a>

          </div>
        </div>

      </div>

      <p className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Expensio. All rights reserved.
      </p>

    </footer>
  );
}
