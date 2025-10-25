import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";
import {
  Home,
  Info,
  Briefcase,
  Phone,
  Menu,
  X,
  LogOut,
  Moon,
  Sun,
  User,
  Settings,
  ChevronDown,
  Search,
} from "lucide-react";

const Navbar = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", icon: <Home size={18} />, link: "/" },
    { name: "About", icon: <Info size={18} />, link: "/about" },
    { name: "Services", icon: <Briefcase size={18} />, link: "/services" },
    { name: "contact", icon: <Phone size={18} />, link: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed w-full box-border top-0 left-0 z-50  transition-all duration-500 ${
        scrolled
          ? mode === "light"
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-800"
          : mode === "light"
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50"
          : "bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 box-border">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
            <div className="relative group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg transform group-hover:scale-105 transition-all duration-300">
                YF
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                YourFirm
              </span>
              <span
                className={`text-[10px] sm:text-xs ${
                  mode === "light" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Premium Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`relative px-4 xl:px-6 py-2 rounded-xl font-medium transition-all duration-300 group ${
                  mode === "light"
                    ? "text-gray-700 hover:text-indigo-600"
                    : "text-gray-300 hover:text-indigo-400"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2 text-sm xl:text-base">
                  {item.icon}
                  {item.name}
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
              </a>
            ))}
          </div>

          {/* Right Section (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-1 justify-end">
            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`relative p-2.5 rounded-xl transition-all duration-500 transform hover:scale-110 ${
                mode === "light"
                  ? "bg-gradient-to-br from-amber-400 to-orange-400 text-white shadow-lg"
                  : "bg-gradient-to-br from-blue-400 to-purple-500 text-white shadow-lg"
              }`}
            >
              {mode === "light" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 xl:space-x-3 ml-2 xl:ml-4">
              <a
                href="/login"
                className={`px-4 py-2.5 border rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
                  mode === "light"
                    ? "border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                    : "border-indigo-400 text-indigo-400 hover:bg-indigo-400/10"
                }`}
              >
                Login
              </a>
            </div>

            {/* Profile Dropdown */}
            <div className="relative ml-2 xl:ml-4 w-auto">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className={`flex items-center space-x-2 sm:space-x-3 p-2 rounded-xl transition-all duration-300 ${
                  mode === "light" ? "hover:bg-gray-100" : "hover:bg-gray-800"
                } ${profileOpen ? (mode === "light" ? "bg-gray-100" : "bg-gray-800") : ""}`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                  <User size={18} />
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {profileOpen && (
                <div
                  className={`absolute right-0 top-full mt-2 w-56 sm:w-64 rounded-2xl shadow-2xl border backdrop-blur-xl py-2 ${
                    mode === "light"
                      ? "bg-white/95 border-gray-200"
                      : "bg-gray-800/95 border-gray-700"
                  }`}
                >
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      John Doe
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      john@example.com
                    </p>
                  </div>

                  <div className="py-2">
                    {[
                      { icon: <User size={16} />, label: "Profile", href: "/profile" },
                      { icon: <Settings size={16} />, label: "Settings", href: "/settings" },
                      { icon: <Briefcase size={16} />, label: "Dashboard", href: "/dashboard" },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`flex items-center space-x-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                          mode === "light"
                            ? "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                            : "text-gray-300 hover:bg-gray-700 hover:text-indigo-400"
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                    <button
                      className={`flex items-center space-x-3 w-full px-4 py-2.5 text-sm transition-all duration-200 ${
                        mode === "light"
                          ? "text-red-600 hover:bg-red-50"
                          : "text-red-400 hover:bg-red-500/10"
                      }`}
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                mode === "light"
                  ? "bg-gray-100 hover:bg-gray-200 text-amber-500"
                  : "bg-gray-800 hover:bg-gray-700 text-blue-400"
              }`}
            >
              {mode === "light" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                mode === "light"
                  ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMenu}
          ></div>

          <div
            className={`absolute top-0 right-0 h-full w-72 sm:w-80 max-w-full transform transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } ${mode === "light" ? "bg-white" : "bg-gray-900"}`}
          >
            {/* Header */}
            <div
              className={`p-4 sm:p-6 border-b ${
                mode === "light" ? "border-gray-200" : "border-gray-700"
              }`}
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                    YF
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      YourFirm
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      Premium Solutions
                    </div>
                  </div>
                </div>
                <button
                  onClick={toggleMenu}
                  className={`p-2 rounded-lg ${
                    mode === "light" ? "hover:bg-gray-100" : "hover:bg-gray-800"
                  }`}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search Bar */}
              <div
                className={`relative rounded-xl ${
                  mode === "light" ? "bg-gray-100" : "bg-gray-800"
                }`}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full pl-10 pr-4 py-2.5 sm:py-3 bg-transparent border-none outline-none rounded-xl text-sm ${
                    mode === "light" ? "text-gray-800" : "text-gray-200"
                  }`}
                />
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-3 sm:p-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={toggleMenu}
                  className={`flex items-center space-x-4 p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                    mode === "light"
                      ? "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      : "text-gray-300 hover:bg-gray-800 hover:text-indigo-400"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      mode === "light" ? "bg-gray-100" : "bg-gray-800"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Auth Section */}
            <div
              className={`p-4 border-t ${
                mode === "light" ? "border-gray-200" : "border-gray-700"
              }`}
            >
              <div className="grid grid-cols-2 gap-3 mb-4">
                <a
                  href="/login"
                  className={`px-4 py-3 text-center border rounded-xl font-medium text-sm transition-all duration-300 ${
                    mode === "light"
                      ? "border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                      : "border-indigo-400 text-indigo-400 hover:bg-indigo-400/10"
                  }`}
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className={`px-4 py-3 text-center rounded-xl font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Sign Up
                </a>
              </div>

              <button
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  mode === "light"
                    ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              >
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
