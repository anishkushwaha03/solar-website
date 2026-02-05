import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-blue-100 transition">
          ☀️ Techno Solar
        </Link>
        <div className="space-x-6 hidden md:flex items-center">
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-200 transition">About</Link>
          <Link to="/services" className="hover:text-blue-200 transition">Services</Link>
          <Link to="/contact" className="bg-white text-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition shadow-md">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}