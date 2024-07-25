import React, { useState } from "react";
import "./App.css";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <div className="header">
        <h1>Chat with Bot</h1>
        <button onClick={toggleDarkMode} className="dark-mode-button">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <ChatWindow darkMode={darkMode} />
    </div>
  );
}

export default App;
