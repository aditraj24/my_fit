import { motion } from "framer-motion";

const HomePage = ({ userProfile, suggestedOutfits, setCurrentPage }) => {
  const isProfileComplete =
    userProfile.skinColor && userProfile.size && userProfile.style;

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-white">Outfit Suggestions</h2>

      {isProfileComplete ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700"
        >
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Based on your profile:</h3>
          <p className="text-lg mb-2 text-gray-300">
            <span className="font-medium text-white">Skin Color:</span>{" "}
            {userProfile.skinColor}
          </p>
          <p className="text-lg mb-2 text-gray-300">
            <span className="font-medium text-white">Size:</span> {userProfile.size}
          </p>
          <p className="text-lg mb-4 text-gray-300">
            <span className="font-medium text-white">Style:</span> {userProfile.style}
          </p>

          <h4 className="text-xl font-semibold mb-3 text-green-400">Suggested Outfits:</h4>
          <div className="flex flex-wrap gap-2">
            {suggestedOutfits.map((item, index) => (
              <span
                key={index}
                className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium border border-green-600"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
          <svg
            className="w-10 h-10 text-green-400 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-.01-12a9 9 0 110 18 9 9 0 010-18z"
            />
          </svg>
          <p className="text-lg text-white mb-4">
            Please complete your user profile to get outfit suggestions.
          </p>
          <button
            onClick={() => setCurrentPage("user")}
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Go to User Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
