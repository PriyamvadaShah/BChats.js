import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      alert("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600 px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 relative"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white"
        >
          Get in Touch
        </motion.h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <User className="absolute left-4 top-3 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white transition-all"
              required
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <Mail className="absolute left-4 top-3 text-gray-400 dark:text-gray-300" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white transition-all"
              required
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <MessageSquare className="absolute left-4 top-4 text-gray-400 dark:text-gray-300" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white transition-all resize-none"
              required
            ></textarea>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={submitted}
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
          >
            <span>{submitted ? "Sending..." : "Send Message"}</span>
            <Send className="w-5 h-5" />
          </motion.button>
        </form>

        {submitted && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center rounded-2xl shadow-xl"
          >
            <span className="text-2xl font-bold text-green-500">🎉 Success!</span>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Your message has been sent.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
