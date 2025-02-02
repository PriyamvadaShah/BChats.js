import React from "react";
import { Twitter, Linkedin, Facebook, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-white text-2xl font-semibold">BeyondChats</h2>
          <p className="text-sm mt-2">
            AI-powered chatbot solutions to automate customer support and enhance business communication.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold">Quick Links</h3>
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/about" className="hover:text-white transition">About Us</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
        </div>

        <div>
          <h3 className="text-white font-semibold">Connect With Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="mailto:support@beyondchats.com" className="hover:text-white transition">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://beyondchats.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} BeyondChats. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
