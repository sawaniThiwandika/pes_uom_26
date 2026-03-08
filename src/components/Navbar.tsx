import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/pages.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-container">
        <img src={logo} alt="IEEE PES Logo" className="logo-image"/>
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/committees">Committees</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>

      </div>

    </nav>
  );
}