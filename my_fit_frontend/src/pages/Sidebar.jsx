import { Home, Shirt, User } from "lucide-react";

const Sidebar = ({ setCurrentPage, currentPage }) => {
  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "wardrobe", label: "Wardrobe", icon: <Shirt className="w-5 h-5" /> },
    { id: "user", label: "User Profile", icon: <User className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-black shadow-lg p-6 flex flex-col border-r border-gray-800">
      <h1 className="text-3xl font-bold text-green-400 mb-10 text-center">
        MyFit
      </h1>
      <nav className="flex flex-col space-y-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
              currentPage === item.id
                ? "bg-green-900 text-green-400 border border-green-400"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
