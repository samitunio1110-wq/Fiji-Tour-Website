import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import bgImg from "./assets/bgImg.jpg";

function App() {
  return (
    <>
      <div
     className="min-h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
