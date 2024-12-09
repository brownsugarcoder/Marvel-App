import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/NavBar.css";

const Navbar = () => {
  return (
        <header>
            <nav className="navbar">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="search">Search</a>
                    </li>
                </ul>
            </nav>
        </header>

    );
  };

  export default Navbar;
  