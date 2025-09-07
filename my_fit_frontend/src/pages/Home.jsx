import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    alert("Form submitted!");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-400 text-white overflow-hidden">
        {/* Background Decorations */}
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Dress <span className="text-yellow-300">Your Style</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-lg">
              Discover, select, and style outfits that define your personality.
              Modern fashion, curated for you.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition">
                Start Styling
              </button>
              <button className="px-6 py-3 bg-white/20 border border-white/40 backdrop-blur-md font-semibold rounded-full hover:bg-white/30 transition">
                Explore
              </button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/outfit.webp"
              alt="Fashion Outfit"
              className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 rounded-xl drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Outfit Form Section */}
      <section className="py-16 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Make Your Outfit
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Style */}
            <div>
              <label className="block mb-1 font-semibold">Choose Style</label>
              <select className="w-full border border-gray-300 rounded-lg p-2">
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
                <option value="sporty">Sporty</option>
                <option value="business">Business</option>
              </select>
            </div>

            {/* Occasion */}
            <div>
              <label className="block mb-1 font-semibold">
                Choose Occasion
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-2">
                <option value="party">Party</option>
                <option value="wedding">Wedding</option>
                <option value="interview">Interview</option>
                <option value="daily">Daily</option>
                <option value="date">Date</option>
              </select>
            </div>

            {/* Weather */}
            <div>
              <label className="block mb-1 font-semibold">Choose Weather</label>
              <select className="w-full border border-gray-300 rounded-lg p-2">
                <option value="sunny">Sunny</option>
                <option value="rainy">Rainy</option>
                <option value="cloudy">Cloudy</option>
                <option value="snowy">Snowy</option>
              </select>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block mb-1 font-semibold">
                Upload Your Photo
              </label>
              <input
                type="file"
                name="photo"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-yellow-300 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
