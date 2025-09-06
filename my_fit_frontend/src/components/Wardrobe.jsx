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
      <h2 className="text-4xl font-bold mb-8">3D Wardrobe</h2>

      <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 🪞 3D Wardrobe Container */}
        <div
          ref={wardrobeRef}
          className="relative bg-gray-100 rounded-xl w-full h-[28rem] flex items-center justify-center overflow-hidden"
        >
          {/* Overlay placeholder text */}
          <p className="absolute text-gray-500 text-center px-4">
            3D Wardrobe loading...
          </p>
        </div>

        {/* 👕 Outfit Management */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-4">Your Outfits</h3>

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
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Add Outfit
            </button>
          </form>

          {/* Outfit List */}
          <ul className="bg-gray-50 rounded-lg p-4 max-h-72 overflow-y-auto space-y-2">
            {outfits.length === 0 ? (
              <p className="text-center text-gray-500 italic">
                No outfits in your wardrobe.
              </p>
            ) : (
              outfits.map((outfit, index) => (
                <li
                  key={index}
                  className="py-2 flex justify-between items-center bg-white rounded-lg px-4 shadow-sm"
                >
                  <span className="text-gray-700 font-medium">{outfit}</span>
                  <button
                    onClick={() => removeOutfit(index)}
                    className="text-red-500 hover:text-red-700 transition-colors"
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
