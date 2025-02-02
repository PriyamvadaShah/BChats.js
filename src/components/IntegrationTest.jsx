import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, AlertTriangle, Loader, Twitter, Linkedin, Facebook } from "lucide-react";

const IntegrationTest = () => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const result = Math.random() > 0.3;
      setSuccess(result);
      setLoading(false);

      if (result) {
        import("canvas-confetti").then((confetti) => {
          confetti.default({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        });
      }
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="max-w-lg bg-white p-6 rounded-lg shadow-lg text-center">
        {loading ? (
          <>
            <Loader className="animate-spin h-10 w-10 text-blue-600 mx-auto" />
            <p className="text-gray-600 mt-2">Testing chatbot integration...</p>
          </>
        ) : success ? (
          <>
            <Check className="h-10 w-10 text-green-600 mx-auto" />
            <h2 className="text-green-600 text-lg font-bold mt-2">Integration Successful! 🎉</h2>
            <button onClick={() => navigate("/admin")} className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">
              Explore Admin Panel
            </button>
            <button onClick={() => navigate("/chatbot")} className="bg-green-600 text-white py-2 px-4 rounded-lg mt-4">
              Start Talking to Your Chatbot
            </button>
          </>
        ) : (
          <>
            <AlertTriangle className="h-10 w-10 text-red-600 mx-auto" />
            <h2 className="text-red-600 text-lg font-bold mt-2">Integration Failed! 😢</h2>
            <button onClick={() => navigate("/integration")} className="bg-orange-600 text-white py-2 px-4 rounded-lg mt-4">
              Retry Integration
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default IntegrationTest;
