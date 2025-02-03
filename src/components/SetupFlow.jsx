import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building, Globe, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SetupFlow = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    companyDescription: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "websiteUrl") {
      localStorage.setItem("companyWebsite", value);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700 px-6 py-10"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-8 relative"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white"
        >
          Organization Setup
        </motion.h2>

        <div className="mt-6 space-y-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <Building className="absolute left-4 top-3 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white transition-all shadow-lg"
              required
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <Globe className="absolute left-4 top-3 text-gray-400 dark:text-gray-300" />
            <input
              type="url"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white transition-all shadow-lg"
              required
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/integration")}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-xl flex items-center justify-center space-x-2 transition-all hover:shadow-2xl"
          >
            <span>Start Chatbot Integration</span>
            <Rocket className="h-5 w-5" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SetupFlow;
