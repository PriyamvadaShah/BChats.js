import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card.jsx";
import { ArrowLeft, Send, Sparkles } from "lucide-react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!feedback.trim()) {
      alert("Please enter your feedback before submitting.");
      return;
    }

    console.log("User Feedback:", feedback);
    setSubmitted(true);

    import("canvas-confetti").then((confetti) => {
      confetti.default({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    });

    setTimeout(() => {
      navigate("/integration");
    }, 2000);
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
        className="max-w-lg w-full bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-8 relative"
      >
        {/* Floating Header Animation */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white"
        >
          💡 Share Your Feedback
        </motion.h2>

        <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Tell us what’s on your mind!
            </CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-green-600 text-lg"
              >
                ✅ Thank you for your feedback!
                <Sparkles className="inline-block h-6 w-6 text-yellow-500 ml-2" />
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full h-32 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-gray-200 dark:bg-gray-900"
                  placeholder="Describe your issue or feedback here..."
                  required
                />
                <div className="flex justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate("/integration")}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white flex items-center"
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" /> Back
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center shadow-lg"
                  >
                    Submit <Send className="h-5 w-5 ml-2" />
                  </motion.button>
                </div>
              </motion.form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Feedback;
