import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js"
import Search from "./pages/Search.js";
import './App.css';

function App() {
  return (
//<> 
   
    <Router>
      <Home />
      <Search />
      <Routes>
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/" element={<Home />} />
        
      </Routes>
    </Router>
//</>
  );
}

export default App;

