import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl text-purple-400 font-bold mb-4">404</h1>
      <p className="text-gray-300 mb-6">Page not found</p>
      <Link
        to="/"
        className="px-4 py-2 bg-purple-600 rounded text-white"
      >
        Go Home
      </Link>
    </div>
  );
}
