import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/NavBar.css";

const Navbar = () => {
  return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><a href="/"></a></li>
                    <li><a href="about"></a></li>
                </ul>
            </nav>
        </header>

    );
  };

  export default Navbar;
  