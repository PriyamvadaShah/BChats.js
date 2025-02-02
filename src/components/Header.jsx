import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="flex items-center space-x-3 text-gray-900 dark:text-white font-bold text-2xl">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-gradient-to-r from-purple-400 to-pink-500 p-2 rounded-full"
          >
            <img 
              src="/logo.jpg" 
              alt="BeyondChats" 
              className="h-8 w-8 rounded-full object-contain"
            />
          </motion.div>
          <span className="tracking-wide">BeyondChats</span>
        </Link>

        <nav className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300 font-medium">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Link to="/" className="hover:text-purple-500 transition-all duration-300">Home</Link>
          </motion.div>
          {isLoggedIn ? (
            <>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Link to="/setup" className="hover:text-purple-500 transition-all duration-300">Features</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Link to="/contact" className="hover:text-purple-500 transition-all duration-300">Contact</Link>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <button 
                  className="text-gray-400 cursor-not-allowed"
                  onClick={() => alert("Please log in to access this page.")}
                >
                  Features
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <button 
                  className="text-gray-400 cursor-not-allowed"
                  onClick={() => alert("Please log in to access this page.")}
                >
                  Contact
                </button>
              </motion.div>
            </>
          )}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
          </button>
          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsLoggedIn(false);
                navigate("/login");
              }}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-all"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-all"
            >
              Login
            </Link>
          )}
        </div>

        <button
          className="block md:hidden text-gray-600 dark:text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <nav className="flex flex-col py-4 px-6 space-y-4 text-gray-600 dark:text-gray-300">
              <Link to="/" className="hover:text-purple-500 transition-all duration-300" onClick={() => setMenuOpen(false)}>Home</Link>
              {isLoggedIn ? (
                <>
                  <Link to="/features" className="hover:text-purple-500 transition-all duration-300" onClick={() => setMenuOpen(false)}>Features</Link>
                  <Link to="/contact" className="hover:text-purple-500 transition-all duration-300" onClick={() => setMenuOpen(false)}>Contact</Link>
                </>
              ) : (
                <>
                  <button className="text-gray-400 cursor-not-allowed" onClick={() => alert("Please log in to access this page.")}>Features</button>
                  <button className="text-gray-400 cursor-not-allowed" onClick={() => alert("Please log in to access this page.")}>Contact</button>
                </>
              )}
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-all"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-all text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
