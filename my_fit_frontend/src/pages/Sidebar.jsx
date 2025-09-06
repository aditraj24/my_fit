import { Home, Shirt, User } from "lucide-react";

const Sidebar = ({ setCurrentPage, currentPage }) => {
  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "wardrobe", label: "Wardrobe", icon: <Shirt className="w-5 h-5" /> },
    { id: "user", label: "User Profile", icon: <User className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        MyFit
      </h1>
      <nav className="flex flex-col space-y-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
              currentPage === item.id
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
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
