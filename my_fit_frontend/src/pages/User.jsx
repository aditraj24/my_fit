import { Palette, Ruler, Shirt } from "lucide-react";

const UserPage = ({ userProfile, handleUserProfileChange, setCurrentPage }) => (
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-white">User Profile</h2>
    <div className="bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700">
      <form className="space-y-6">
        {/* Skin Color */}
        <div>
          <label className="text-white font-semibold mb-2 flex items-center gap-2">
            <Palette className="w-5 h-5 text-green-400" /> Skin Color
          </label>
          <select
            name="skinColor"
            value={userProfile.skinColor}
            onChange={handleUserProfileChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:border-green-400 focus:outline-none"
          >
            <option value="">Select...</option>
            <option value="fair">Fair</option>
            <option value="tan">Tan</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Undertone */}
        <div>
          <label className="text-white font-semibold mb-2 flex items-center gap-2">
            <Ruler className="w-5 h-5 text-green-400" /> Undertone
          </label>
          <select
            name="size"
            value={userProfile.size}
            onChange={handleUserProfileChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:border-green-400 focus:outline-none"
          >
            <option value="">Select...</option>
            <option value="cool">Cool</option>
            <option value="warm">Warm</option>
            <option value="neutral">Neutral</option>
          </select>
        </div>

        {/* Preferred Style */}
        <div>
          <label className="text-white font-semibold mb-2 flex items-center gap-2">
            <Shirt className="w-5 h-5 text-green-400" /> Preferred Style
          </label>
          <select
            name="style"
            value={userProfile.style}
            onChange={handleUserProfileChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:border-green-400 focus:outline-none"
          >
            <option value="">Select...</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="streetwear">Streetwear</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          type="button"
          onClick={() => setCurrentPage("home")}
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors"
        >
          Save Profile
        </button>
      </form>
    </div>
  </div>
);

export default UserPage;
