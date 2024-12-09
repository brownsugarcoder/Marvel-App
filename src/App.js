import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js"
import Search from "./pages/Search.js";
import Charactercard from "./components/Charactercard.js";
import NavBar from "./components/NavBar.js";
import './App.css';

function App() {
  return (
//<> 
   
    <Router>
      <NavBar />
      <Charactercard />
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

