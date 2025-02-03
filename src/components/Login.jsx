import React, { useState, useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import { Mail, Lock, ArrowRight, Chrome } from "lucide-react";
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { firebaseConfig } from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthFlow = () => {
  const { setIsLoggedIn } = useContext(LoginContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setIsLoggedIn(true);
    });
    return () => unsubscribe();
  }, [setIsLoggedIn]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError("");
      await signInWithPopup(auth, googleProvider);
      setIsLoggedIn(true);
      navigate("/setup");
    } catch (error) {
      setError("Failed to sign in with Google. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/setup");
    setIsLoggedIn(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 p-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center text-white drop-shadow-md"
        >
          Login to Your Account
        </motion.h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-300" />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full bg-white/20 text-white px-10 py-3 rounded-lg border border-white/30 backdrop-blur-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-300" />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full bg-white/20 text-white px-10 py-3 rounded-lg border border-white/30 backdrop-blur-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md flex items-center justify-center space-x-2 transition-all"
          >
            {loading ? "Loading..." : "Continue"}
            <ArrowRight className="h-5 w-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white text-gray-900 border border-white/30 py-3 rounded-lg font-semibold shadow-md flex items-center justify-center space-x-2 transition-all"
          >
            <Chrome className="h-5 w-5 text-blue-500" />
            Continue with Google
          </motion.button>
        </form>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm text-center mt-4"
          >
            {error}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white mt-6"
        >
          New here?{" "}
          <button onClick={() => navigate("/")} className="text-blue-400 hover:underline">
            Sign Up
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AuthFlow;
