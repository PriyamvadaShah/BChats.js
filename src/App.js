
import {  HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Contact from "./components/Contact.jsx";
import SignUp from "./components/SignUp.jsx";
import React, { useState } from "react";
import {LoginContext} from "./context/LoginContext.jsx";
import SetupFlow from "./components/SetupFlow";
import IntegrationFlow from "./components/IntegrationFlow";
import Feedback from "./components/Feedback.jsx";
import Footer from "./components/Footer.jsx";
import IntegrationTest from "./components/IntegrationTest.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import ChatbotConversation from "./components/ChabotConversation.jsx";
import Header from "./components/Header.jsx";
function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <div className="bg-light min-h-screen font-sans text-primary">
          <Header />
          <main className="container pt-20" >
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/setup" element={<SetupFlow />} />
              <Route path="/integration" element={<IntegrationFlow />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/test" element={<IntegrationTest />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/chatbot" element={<ChatbotConversation />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LoginContext.Provider>
    </Router>
  );
}

export default App;