import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-300 mt-12"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            My Fit
          </h2>
          <p className="mt-3 text-gray-400 max-w-sm">
            Redefining fashion with <span className="text-yellow-400">style</span>, 
            <span className="text-pink-400"> comfort</span>, and 
            <span className="text-purple-400"> elegance</span>.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/user" className="hover:text-yellow-400 transition">User</Link></li>
            <li><a href="#" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-6">
            {[Facebook, Instagram, Twitter, Github].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-700 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:text-black transition"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-500 text-sm">
        <p>© {year} MyApp. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
