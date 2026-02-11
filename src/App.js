// import { createRoot } from "react-dom/client";
import React, {useState, useEffect} from "react";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import IdeaPage from "./components/layout/IdeaPage";
import "./App.css";


export const STATUS = {
  PROGRESS: "정리중",
  HOLD: "보류중",
  DONE: "완성",
};



function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
    
  );
}

  

export default App;  