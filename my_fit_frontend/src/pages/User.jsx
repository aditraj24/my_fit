import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function UserAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const field = e.target.type === "text" ? "name" : e.target.type;
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";
      const { data } = await axios.post(url, formData);
      alert(data.message);
      console.log(data);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 text-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/30 rounded-full blur-3xl"></div>
      </div>

      {/* Auth Card */}
      <motion.div
        key={isLogin ? "login" : "register"}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20"
      >
        {isLogin ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-yellow-300">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="w-full py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow-md hover:scale-105 transition"
              >
                Log In
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-200">
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-yellow-300 hover:underline"
              >
                Register
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6 text-yellow-300">Register</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="w-full py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow-md hover:scale-105 transition"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-200">
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-yellow-300 hover:underline"
              >
                Log In
              </button>
            </p>
          </>
        )}
      </motion.div>
    </section>
  );
}
