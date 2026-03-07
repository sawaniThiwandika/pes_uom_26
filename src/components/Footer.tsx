import { Link } from "react-router-dom";
import "../styles/pages.css";

export default function Footer() {
  return (
    <footer className="footer">

      <h3>IEEE PES Student Branch Chapter</h3>
      <p>University of Moratuwa</p>

      <div className="footer-links">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/committees">Committees</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>

      </div>

      <hr />

      <p className="copyright">
        © 2026 IEEE – All rights reserved.
      </p>

    </footer>
  );
}