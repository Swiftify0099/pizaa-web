import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";
import { Home, Info, Briefcase, Phone, Menu, X, LogOut, Moon, Sun } from "lucide-react";
import Profile from "../../component/Profile.jsx";

const Sidebar = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, link: "/" },
    { name: "About", icon: <Info size={20} />, link: "/about" },
    { name: "Services", icon: <Briefcase size={20} />, link: "/services" },
    { name: "Contact", icon: <Phone size={20} />, link: "/contact" },
  ];

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${mode === "light" ? "bg-gray-50 text-gray-800" : "bg-gray-900 text-gray-100"}`}>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 lg:w-72 z-50 transform transition-transform duration-300 border-r 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${mode === "light" ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={`flex items-center justify-between px-5 py-4 border-b 
            ${mode === "light" ? "border-gray-200" : "border-gray-700"}`}>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                YF
              </div>
              <h1 className="text-xl font-semibold">YourFirm</h1>
            </div>
            <button className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setSidebarOpen(false)}>
              <X size={22} />
            </button>
          </div>

          {/* Profile */}
          <div className="px-5 py-4">
            <Profile compact />
          </div>

          {/* Menu */}
          <nav className="flex-1 px-3 space-y-1 mt-4">
            {menuItems.map((item) => (
              <a key={item.name} href={item.link}
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm font-medium transition
                  ${mode === "light" ? "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600" : "text-gray-300 hover:bg-gray-700 hover:text-indigo-400"}
                `}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Footer Buttons */}
          <div className={`p-4 border-t ${mode === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm transition
                ${mode === "light" ? "bg-gray-100 hover:bg-gray-200 text-gray-800" : "bg-gray-700 hover:bg-gray-600 text-gray-100"}
              `}
            >
              {mode === "light" ? <Moon size={18} /> : <Sun size={18} />}
              {mode === "light" ? "Dark Mode" : "Light Mode"}
            </button>

            <button
              className={`w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm transition
                ${mode === "light" ? "bg-red-100 text-red-600 hover:bg-red-200" : "bg-red-900 text-red-300 hover:bg-red-800"}
              `}
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <div className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between px-4 py-3 border-b lg:hidden
        ${mode === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-800"}
      `}>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
            YF
          </div>
          <h1 className="text-lg font-semibold">YourFirm</h1>
        </div>
        <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
          <Menu size={24} />
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
