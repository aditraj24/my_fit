import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 text-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/30 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col gap-16">
        {/* About Heading + Text */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            About <span className="text-yellow-300">Us</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-100 leading-relaxed">
            At <span className="text-yellow-300 font-semibold">My Fit</span>, we
            believe fashion is more than just clothing — it’s a way to{" "}
            <span className="text-pink-300">express yourself</span>,{" "}
            <span className="text-purple-300">stand out</span>, and{" "}
            <span className="text-blue-300">create confidence</span>.  
            <br />
            <br />
            Our mission is to redefine outfit selection by blending creativity
            and technology into a seamless, modern, and personalized styling
            experience.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {[
            {
              name: "Aditya Raj",
              role: "Founder & Creative Director",
              img: "https://i.pravatar.cc/150?img=1",
            },
            {
              name: "Sophia Lee",
              role: "Fashion Stylist",
              img: "https://i.pravatar.cc/150?img=2",
            },
            {
              name: "Ethan Carter",
              role: "UI/UX Designer",
              img: "https://i.pravatar.cc/150?img=3",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-white/20"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-yellow-300"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-200">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
