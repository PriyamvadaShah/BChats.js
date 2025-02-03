import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Check, Sparkles } from "lucide-react";

const IntegrationFlow = () => {
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let savedWebsite = localStorage.getItem("companyWebsite");
    if (savedWebsite && !savedWebsite.startsWith("http")) {
      savedWebsite = `https://${savedWebsite}`;
    }
    setCompanyWebsite(savedWebsite);
  }, []); 
  
  const testChatbot = () => {
    if (!companyWebsite || !companyWebsite.startsWith("http")) {
      alert("Invalid website URL. Please enter a valid website in the setup.");
      return;
    }
    const testUrl = `https://priyamvadashah.github.io/BChats.js/testChatbot.html?url=${encodeURIComponent(companyWebsite)}`;
    window.open(testUrl, "_blank");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(dummyScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailInstructions = () => {
    alert("Integration instructions have been sent to the developer!");
  };

  const dummyScript = `
<!-- BeyondChats Integration Code -->
<script>
  window.BeyondChatsConfig = {
    botId: 'YOUR_BOT_ID',
    position: 'bottom-right',
    theme: 'light'
  };
</script>
<script src="https://cdn.beyondchats.com/widget.js" async></script>
  `.trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-6 py-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-8 relative"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white"
        >
          ✨ Chatbot Integration & Testing
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg flex items-center justify-between mt-6"
        >
          <span>Chatbot not working as intended?</span>
          <button onClick={() => navigate('/feedback')} className="text-blue-600 hover:underline">
            Share Feedback
          </button>
        </motion.div>

        <div className="mt-6 space-y-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={testChatbot}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-xl flex items-center justify-center space-x-2 transition-all hover:shadow-2xl"
          >
            <span>Test Chatbot on {companyWebsite || "Website"}</span>
            <ExternalLink className="h-5 w-5" />
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="border-t pt-4"
          >
            <h3 className="font-medium text-gray-800 text-lg">Integrate on Your Website</h3>
            <div className="bg-gray-100 p-4 rounded-lg text-sm">
              <pre className="overflow-x-auto">{dummyScript}</pre>
              <div className="flex justify-between mt-3">
                <button onClick={handleCopyCode} className="text-blue-600 hover:underline">
                  {copied ? "✔ Copied!" : "📋 Copy Code"}
                </button>
                <button onClick={handleEmailInstructions} className="text-blue-600 hover:underline">
                  📧 Email Instructions
                </button>
              </div>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/test')}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-xl flex items-center justify-center space-x-2 transition-all hover:shadow-2xl"
          >
            <span>Test Integration</span>
            <Check className="h-5 w-5" />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-4 right-4 text-yellow-400"
        >
          <Sparkles className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default IntegrationFlow;
