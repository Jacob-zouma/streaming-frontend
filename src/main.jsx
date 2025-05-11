// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Import correct pour React 18+
import App from "./App.jsx";
import "./index.css"; // Vérifie que le fichier existe
import "bootstrap-icons/font/bootstrap-icons.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  