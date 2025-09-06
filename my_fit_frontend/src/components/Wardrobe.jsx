import { useState } from "react";

const WardrobePage = ({
  outfits,
  addOutfit,
  removeOutfit,
  setCurrentPage,
  wardrobeRef,
}) => {
  const [newOutfit, setNewOutfit] = useState("");

  const handleAddOutfit = (e) => {
    e.preventDefault();
    if (!newOutfit.trim()) return;
    addOutfit(newOutfit);
    setNewOutfit("");
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-white">3D Wardrobe</h2>

      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 border border-gray-700">
        {/* 🪞 3D Wardrobe Container */}
        <div
          ref={wardrobeRef}
          className="relative bg-gray-900 rounded-xl w-full h-[28rem] flex items-center justify-center overflow-hidden border border-gray-600"
        >
          {/* Overlay placeholder text */}
          <p className="absolute text-green-400 text-center px-4">
            3D Wardrobe loading...
          </p>
        </div>

        {/* 👕 Outfit Management */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Your Outfits</h3>

          {/* Add Outfit Form */}
          <form
            onSubmit={handleAddOutfit}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <input
              type="text"
              value={newOutfit}
              onChange={(e) => setNewOutfit(e.target.value)}
              placeholder="Add an outfit name..."
              className="flex-1 p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-700 text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition-colors"
            >
              Add Outfit
            </button>
          </form>

          {/* Outfit List */}
          <ul className="bg-gray-900 rounded-lg p-4 max-h-72 overflow-y-auto space-y-2 border border-gray-600">
            {outfits.length === 0 ? (
              <p className="text-center text-gray-400 italic">
                No outfits in your wardrobe.
              </p>
            ) : (
              outfits.map((outfit, index) => (
                <li
                  key={index}
                  className="py-2 flex justify-between items-center bg-gray-800 rounded-lg px-4 shadow-sm border border-gray-700"
                >
                  <span className="text-white font-medium">{outfit}</span>
                  <button
                    onClick={() => removeOutfit(index)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WardrobePage;
