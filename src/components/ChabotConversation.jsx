import React, { useState } from "react";
import { Send } from "lucide-react";

const ChatbotConversation = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Hello! How can I assist you today?", sender: "bot" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg flex flex-col">
        <h2 className="text-xl font-bold text-gray-800 text-center">Chatbot</h2>

        <div className="flex-1 overflow-y-auto mt-4 space-y-2 bg-gray-50 p-4 rounded-lg h-80">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-300 text-black self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex mt-4">
          <input
            className="flex-1 p-2 border rounded-l-lg focus:outline-none"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotConversation;
