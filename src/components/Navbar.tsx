import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaProjectDiagram,
  FaHandsHelping,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home", Icon: FaHome },
  { to: "/about", label: "About", Icon: FaInfoCircle },
  { to: "/committees", label: "Committees", Icon: FaUsers },
  { to: "/projects", label: "Projects", Icon: FaProjectDiagram },
  { to: "/volunteer", label: "Volunteer", Icon: FaHandsHelping },
  { to: "/contact", label: "Contact", Icon: FaEnvelope },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hideBar, setHideBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  // const location = useLocation();
  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /* Close on route change */

  //useEffect(() => { closeMenu(); }, [location.pathname]);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Scroll: glass + hide-on-scroll-down */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 48);
      setHideBar(y > lastY.current && y > 140);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  /* Escape key closes menu */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .nav-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 9000;
          display: flex; align-items: center; justify-content: center;
          padding: 12px 24px;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), padding 0.4s ease;
          font-family: 'Outfit', sans-serif;
        }
        .nav-root.nav-hidden { transform: translateY(-110%); }

        .nav-pill {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; max-width: 1100px;
          padding: 10px 20px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: background 0.4s ease, border-color 0.4s ease,
                      box-shadow 0.4s ease, padding 0.3s ease;
        }
        .nav-pill.pill-scrolled {
          background: rgba(6,13,7,0.80);
          backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px);
          border-color: rgba(52,211,153,0.18);
          box-shadow: 0 8px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(52,211,153,0.08) inset;
          padding: 8px 20px;
        }
        .nav-pill.pill-top {
          background: rgba(6,13,7,0.40);
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
        }

        /* Logo */
        .nav-logo { display: flex; align-items: center; gap: 9px; text-decoration: none; flex-shrink: 0; }
        .nav-logo-icon {
          width: 34px; height: 34px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(52,211,153,0.14); border: 1px solid rgba(52,211,153,0.3);
          color: #34d399; font-size: 15px; transition: all 0.3s ease;
        }
        .nav-logo:hover .nav-logo-icon { background: rgba(52,211,153,0.24); box-shadow: 0 0 18px rgba(52,211,153,0.3); }
        .nav-logo-text { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 700; color: #fff; }
        .nav-logo-sub { font-family: 'Outfit', sans-serif; font-size: 8.5px; font-weight: 500; color: rgba(52,211,153,0.7); letter-spacing: 0.18em; text-transform: uppercase; display: block; margin-top: 1px; }

        /* Desktop links */
        .nav-links { display: flex; align-items: center; gap: 2px; }
        .nav-link {
          position: relative; display: flex; align-items: center; gap: 5px;
          padding: 7px 13px; border-radius: 999px;
          font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.6);
          text-decoration: none; transition: color 0.25s ease, background 0.25s ease;
        }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.06); }
        .nav-link.active-link { color: #6ee7b7; background: rgba(52,211,153,0.10); }
        .nav-link.active-link::after {
          content: ''; position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
          width: 16px; height: 1.5px; border-radius: 999px; background: #34d399;
        }

        /* Hamburger */
        .nav-hamburger {
          display: none; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.09); background: rgba(255,255,255,0.04);
          color: #fff; font-size: 16px; cursor: pointer; transition: all 0.25s ease;
        }
        .nav-hamburger:hover { background: rgba(52,211,153,0.12); border-color: rgba(52,211,153,0.3); color: #34d399; }

        /* ── Mobile overlay ──
           Uses data-open attribute so open/close animations are independent.
           "data-open=true"  → slides IN  (0.45s)
           "data-open=false" → slides OUT (0.38s, slightly faster)
           This avoids the CSS-class-removal snap bug.
        */
        .nav-overlay-backdrop {
          position: fixed; inset: 0; z-index: 8990;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
          opacity: 0; pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .nav-overlay-backdrop[data-open="true"] { opacity: 1; pointer-events: all; }

        .nav-mobile-panel {
          position: fixed; top: 0; right: 0; bottom: 0; z-index: 9100;
          width: min(320px, 88vw);
          background: rgba(4,10,5,0.97);
          backdrop-filter: blur(32px); -webkit-backdrop-filter: blur(32px);
          border-left: 1px solid rgba(52,211,153,0.10);
          display: flex; flex-direction: column;
          padding: 0;
          transform: translateX(100%);
          transition: transform 0.42s cubic-bezier(0.22,1,0.36,1);
          box-shadow: -20px 0 60px rgba(0,0,0,0.6);
        }
        .nav-mobile-panel[data-open="true"] { transform: translateX(0); }

        /* Panel header */
        .nav-panel-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 24px; border-bottom: 1px solid rgba(255,255,255,0.05);
          flex-shrink: 0;
        }
        .nav-panel-close {
          width: 38px; height: 38px; border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.6); font-size: 15px; cursor: pointer;
          transition: all 0.22s ease;
        }
        .nav-panel-close:hover { background: rgba(220,50,50,0.12); border-color: rgba(220,50,50,0.3); color: #f87171; }

        /* Links */
        .nav-panel-links { flex: 1; overflow-y: auto; padding: 12px 16px; }
        .nav-panel-link {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; border-radius: 14px; margin-bottom: 4px;
          color: rgba(255,255,255,0.60); text-decoration: none;
          font-size: 15px; font-weight: 500; font-family: 'Outfit', sans-serif;
          transition: background 0.22s ease, color 0.22s ease, transform 0.22s ease;
          /* Links animate in via stagger when panel opens */
          opacity: 0; transform: translateX(16px);
        }
        .nav-mobile-panel[data-open="true"] .nav-panel-link {
          opacity: 1; transform: translateX(0);
        }
        /* Stagger delays */
        .nav-mobile-panel[data-open="true"] .nav-panel-link:nth-child(1) { transition: background 0.22s ease, color 0.22s ease, opacity 0.35s ease 0.08s, transform 0.35s cubic-bezier(0.22,1,0.36,1) 0.08s; }
        .nav-mobile-panel[data-open="true"] .nav-panel-link:nth-child(2) { transition: background 0.22s ease, color 0.22s ease, opacity 0.35s ease 0.13s, transform 0.35s cubic-bezier(0.22,1,0.36,1) 0.13s; }
        .nav-mobile-panel[data-open="true"] .nav-panel-link:nth-child(3) { transition: background 0.22s ease, color 0.22s ease, opacity 0.35s ease 0.18s, transform 0.35s cubic-bezier(0.22,1,0.36,1) 0.18s; }
        .nav-mobile-panel[data-open="true"] .nav-panel-link:nth-child(4) { transition: background 0.22s ease, color 0.22s ease, opacity 0.35s ease 0.23s, transform 0.35s cubic-bezier(0.22,1,0.36,1) 0.23s; }
        .nav-mobile-panel[data-open="true"] .nav-panel-link:nth-child(5) { transition: background 0.22s ease, color 0.22s ease, opacity 0.35s ease 0.28s, transform 0.35s cubic-bezier(0.22,1,0.36,1) 0.28s; }
        .nav-mobile-panel[data-open="true"] .nav-panel-link:nth-child(6) { transition: background 0.22s ease, color 0.22s ease, opacity 0.35s ease 0.33s, transform 0.35s cubic-bezier(0.22,1,0.36,1) 0.33s; }

        /* Hover/active states are controlled inline so they don't conflict */
        .nav-panel-link:hover { background: rgba(255,255,255,0.06); color: #fff; transform: translateX(4px); }
        .nav-panel-link.panel-active { background: rgba(52,211,153,0.10); color: #6ee7b7; }
        .nav-panel-link-icon {
          width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.4); font-size: 12px;
          transition: all 0.22s ease;
        }
        .nav-panel-link.panel-active .nav-panel-link-icon,
        .nav-panel-link:hover .nav-panel-link-icon {
          background: rgba(52,211,153,0.12); border-color: rgba(52,211,153,0.25); color: #34d399;
        }

        /* Panel footer */
        .nav-panel-footer {
          padding: 16px 24px; border-top: 1px solid rgba(255,255,255,0.05); flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
          .nav-root { padding: 10px 16px; }
        }
      `}</style>

      {/* ── Navbar pill ── */}
      <nav className={`nav-root ${hideBar ? "nav-hidden" : ""}`}>
        <div className={`nav-pill ${scrolled ? "pill-scrolled" : "pill-top"}`}>
          <NavLink to="/" className="nav-logo">
            <div className="flex items-center gap-3">
              <img src={logo} alt="IEEE PES" className="h-9 w-auto" />
            </div>
          </NavLink>

          <div className="nav-links">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <button
            className="nav-hamburger"
            onClick={openMenu}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* ── Backdrop (click to close) ── */}
      <div
        className="nav-overlay-backdrop"
        data-open={menuOpen ? "true" : "false"}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Slide-in panel ── */}
      <div
        ref={menuRef}
        className="nav-mobile-panel"
        data-open={menuOpen ? "true" : "false"}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="nav-panel-header">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="IEEE PES" className="h-9 w-auto" />
            </div>
          </div>
          <button
            className="nav-panel-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Links */}
        <div className="nav-panel-links">
          {NAV_LINKS.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `nav-panel-link ${isActive ? "panel-active" : ""}`
              }
              onClick={closeMenu}
            >
              <div className="nav-panel-link-icon">
                <Icon />
              </div>
              {label}
            </NavLink>
          ))}
        </div>

        {/* Footer */}
        <div className="nav-panel-footer">
          <p
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.2)",
              lineHeight: 1.6,
            }}
          >
            © {new Date().getFullYear()} IEEE PES SBC
            <br />
            University of Moratuwa
          </p>
        </div>
      </div>
    </>
  );
}
