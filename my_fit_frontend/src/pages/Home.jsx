import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-400 text-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-3xl"></div>
      </div>

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
            src="/assets/outfit.png"
            alt="Fashion Outfit"
            className="w-[350px] md:w-[500px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
