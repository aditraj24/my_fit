import React, { useState, useRef } from "react";
import Sidebar from "./pages/Sidebar";
import HomePage from "./pages/Home";
import UserPage from "./pages/User";
import WardrobePage from "./components/Wardrobe";
import Footer from "./pages/Footer";
import useWardrobeScene from "./hooks/useWardrobeScene";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [userProfile, setUserProfile] = useState({
    skinColor: "",
    size: "",
    style: "",
  });
  const [outfits, setOutfits] = useState([]);
  const wardrobeRef = useRef();

  // 🔥 Activate wardrobe scene only when page = wardrobe
  useWardrobeScene(wardrobeRef, currentPage === "wardrobe");

  const handleUserProfileChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const addOutfit = (newOutfit) => {
    if (newOutfit.trim() !== "") {
      setOutfits([...outfits, newOutfit.trim()]);
    }
  };

  const removeOutfit = (indexToRemove) => {
    setOutfits(outfits.filter((_, index) => index !== indexToRemove));
  };

  const suggestedOutfits = () => {
    const suggestions = {
      "fair-cool-casual": [
        "Light blue denim jacket",
        "White t-shirt",
        "Khaki pants",
      ],
      "dark-warm-formal": ["Navy suit", "Crisp white shirt", "Silk tie"],
      "tan-neutral-streetwear": [
        "Oversized hoodie",
        "Cargo pants",
        "High-top sneakers",
      ],
    };
    const key = `${userProfile.skinColor}-${userProfile.size}-${userProfile.style}`;
    return (
      suggestions[key] || ["No suggestions found. Try a different combination."]
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            userProfile={userProfile}
            suggestedOutfits={suggestedOutfits()}
            setCurrentPage={setCurrentPage}
          />
        );
      case "user":
        return (
          <UserPage
            userProfile={userProfile}
            handleUserProfileChange={handleUserProfileChange}
            setCurrentPage={setCurrentPage}
          />
        );
      case "wardrobe":
        return (
          <WardrobePage
            outfits={outfits}
            addOutfit={addOutfit}
            removeOutfit={removeOutfit}
            setCurrentPage={setCurrentPage}
            wardrobeRef={wardrobeRef}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-white flex flex-col">
      <Sidebar setCurrentPage={setCurrentPage} />
      <div className="md:ml-64 p-4 md:p-8 flex-1">{renderPage()}</div>
      <Footer />
    </div>
  );
}
