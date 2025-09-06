import { Palette, Ruler, Shirt } from "lucide-react";

const UserPage = ({ userProfile, handleUserProfileChange, setCurrentPage }) => (
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold mb-8">User Profile</h2>
    <div className="bg-white rounded-xl shadow-md p-6">
      <form className="space-y-6">
        {/* Skin Color */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <Palette className="w-5 h-5 text-blue-600" /> Skin Color
          </label>
          <select
            name="skinColor"
            value={userProfile.skinColor}
            onChange={handleUserProfileChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Select...</option>
            <option value="fair">Fair</option>
            <option value="tan">Tan</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Undertone */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <Ruler className="w-5 h-5 text-blue-600" /> Undertone
          </label>
          <select
            name="size"
            value={userProfile.size}
            onChange={handleUserProfileChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Select...</option>
            <option value="cool">Cool</option>
            <option value="warm">Warm</option>
            <option value="neutral">Neutral</option>
          </select>
        </div>

        {/* Preferred Style */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
            <Shirt className="w-5 h-5 text-blue-600" /> Preferred Style
          </label>
          <select
            name="style"
            value={userProfile.style}
            onChange={handleUserProfileChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
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
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Save Profile
        </button>
      </form>
    </div>
  </div>
);

export default UserPage;
