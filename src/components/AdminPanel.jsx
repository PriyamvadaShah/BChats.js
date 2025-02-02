import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Admin Panel</h2>
        <p className="text-gray-600 text-center mt-2">
          Manage your chatbot, view analytics, and update settings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            View Chatbot Analytics
          </button>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
            Edit Chatbot Responses
          </button>
          <button className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700">
            Manage Users
          </button>
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
            Delete Chatbot
          </button>
        </div>

        <button
          onClick={() => navigate("/chatbot")}
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Start Talking to Your Chatbot
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
