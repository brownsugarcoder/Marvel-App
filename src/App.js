import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import './App.css';
import Home from "./pages/Home.js"
import Search from "./pages/Search.js";

function App() {
  return (
<> 
    <Home/>
    <Search/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </Router>
</>
);
}

export default App;

