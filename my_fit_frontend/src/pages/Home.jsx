import { motion } from "framer-motion";

const HomePage = ({ userProfile, suggestedOutfits, setCurrentPage }) => {
  const isProfileComplete =
    userProfile.skinColor && userProfile.size && userProfile.style;

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8">Outfit Suggestions</h2>

      {isProfileComplete ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h3 className="text-2xl font-semibold mb-4">Based on your profile:</h3>
          <p className="text-lg mb-2">
            <span className="font-medium">Skin Color:</span>{" "}
            {userProfile.skinColor}
          </p>
          <p className="text-lg mb-2">
            <span className="font-medium">Size:</span> {userProfile.size}
          </p>
          <p className="text-lg mb-4">
            <span className="font-medium">Style:</span> {userProfile.style}
          </p>

          <h4 className="text-xl font-semibold mb-3">Suggested Outfits:</h4>
          <div className="flex flex-wrap gap-2">
            {suggestedOutfits.map((item, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center bg-yellow-100 p-6 rounded-lg text-center">
          <svg
            className="w-10 h-10 text-yellow-600 mb-3"
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
          <p className="text-lg text-yellow-800 mb-4">
            Please complete your user profile to get outfit suggestions.
          </p>
          <button
            onClick={() => setCurrentPage("user")}
            className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Go to User Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
