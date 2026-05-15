// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// const NAV_LINKS = [
//     { to: "/",           label: "Home"       },
//     { to: "/about",      label: "About"      },
//     { to: "/committees", label: "Committees" },
//     { to: "/projects",   label: "Projects"   },
//     { to: "/contact",    label: "Contact"    },
// ];

// export default function Footer() {
//     return (
//         <footer className="bg-[#1B5E20] text-white text-center px-5 py-10 ">

//             {/* Logo */}
//             <div className="flex justify-center mb-4">
//                 <img src={logo} alt="IEEE PES Logo" className="h-14 w-auto" />
//             </div>

//             <h3 className="text-lg font-semibold tracking-wide">
//                 IEEE PES Student Branch Chapter
//             </h3>
//             <p className="text-sm text-white/70 mt-1">
//                 University of Moratuwa
//             </p>

//             {/* Nav links */}
//             <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 my-5">
//                 {NAV_LINKS.map(({ to, label }) => (
//                     <Link
//                         key={to}
//                         to={to}
//                         className="text-white text-sm no-underline hover:text-white/70 transition-colors duration-300"
//                     >
//                         {label}
//                     </Link>
//                 ))}
//             </div>

//             <hr className="border-white/20 mx-auto max-w-xs" />

//             <p className="text-xs text-white/60 mt-4 tracking-wide">
//                 © 2026 IEEE — All rights reserved.
//             </p>

//         </footer>
//     );
// }

import { NavLink } from "react-router-dom";
import { FaBolt, FaFacebookF, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import logo from "../assets/logo.png";

const LINKS = [
  { to: "/",           label: "Home" },
  { to: "/about",      label: "About" },
  { to: "/committees", label: "Committees" },
  { to: "/projects",   label: "Projects" },
  { to: "/volunteer",  label: "Volunteer" },
  { to: "/contact",    label: "Contact" },
];

const SOCIALS = [
  { href: "https://www.facebook.com/ieee.pes.sbc.uom",
    label: "Facebook", Icon: FaFacebookF },
  { href: "https://www.linkedin.com/company/ieee-pes-student-branch-chapter-of-university-of-moratuwa/",
    label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "mailto:ieeepessbuom25@gmail.com",
    label: "Email", Icon: FaEnvelope },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap');

        .footer-root {
          position: relative; overflow: hidden;
          background: #030a04;
          border-top: 1px solid rgba(255,255,255,0.05);
          font-family: 'Outfit', sans-serif;
        }

        /* Top emerald gradient line */
        .footer-root::before {
          content: '';
          position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, #34d399, rgba(52,211,153,0.4), transparent);
        }

        /* Ambient glow */
        .footer-glow {
          position: absolute; top: -120px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 300px; border-radius: 50%; pointer-events: none;
          background: radial-gradient(ellipse, rgba(22,163,74,0.08) 0%, transparent 70%);
          filter: blur(60px);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 48px;
          max-width: 1100px; margin: 0 auto;
          padding: 64px 32px 48px;
        }

        /* Logo col */
        .footer-brand { display: flex; flex-direction: column; gap: 16px; }
        .footer-logo {
          display: flex; align-items: center; gap: 10px; text-decoration: none;
        }
        .footer-logo-icon {
          width: 38px; height: 38px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(52,211,153,0.12);
          border: 1px solid rgba(52,211,153,0.28);
          color: #34d399; font-size: 16px;
        }
        .footer-logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px; font-weight: 700; color: #fff;
        }
        .footer-tagline {
          font-size: 13px; font-weight: 300; color: rgba(255,255,255,0.38);
          line-height: 1.7; max-width: 240px;
        }
        .footer-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 12px; border-radius: 999px;
          background: rgba(52,211,153,0.07);
          border: 1px solid rgba(52,211,153,0.18);
          font-size: 10px; font-weight: 600;
          color: rgba(52,211,153,0.75); letter-spacing: 0.1em;
          text-transform: uppercase; width: fit-content;
        }

        /* Columns */
        .footer-col-title {
          font-size: 10px; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(52,211,153,0.7);
          margin-bottom: 20px;
        }
        .footer-link {
          display: block; font-size: 13.5px; font-weight: 400;
          color: rgba(255,255,255,0.45); text-decoration: none;
          margin-bottom: 10px; transition: all 0.22s ease;
          position: relative; padding-left: 0;
        }
        .footer-link::before {
          content: '';
          position: absolute; left: -12px; top: 50%; transform: translateY(-50%);
          width: 4px; height: 4px; border-radius: 50%;
          background: #34d399; opacity: 0;
          transition: opacity 0.2s ease, left 0.2s ease;
        }
        .footer-link:hover { color: #fff; padding-left: 12px; }
        .footer-link:hover::before { opacity: 1; left: 0; }

        /* Contact info */
        .footer-contact-row {
          display: flex; align-items: flex-start; gap: 10px;
          margin-bottom: 14px;
        }
        .footer-contact-icon {
          width: 28px; height: 28px; border-radius: 8px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.15);
          color: #34d399; font-size: 11px; margin-top: 1px;
        }
        .footer-contact-text {
          font-size: 12px; color: rgba(255,255,255,0.4);
          font-weight: 300; line-height: 1.6;
        }

        /* Socials */
        .footer-social {
          display: flex; align-items: center; gap: 10px; margin-top: 8px;
        }
        .footer-social-btn {
          width: 38px; height: 38px; border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.45); font-size: 14px;
          text-decoration: none;
          transition: all 0.28s ease;
        }
        .footer-social-btn:hover {
          background: rgba(52,211,153,0.14);
          border-color: rgba(52,211,153,0.38);
          color: #34d399;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(52,211,153,0.2);
        }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          max-width: 1100px; margin: 0 auto;
          padding: 20px 32px;
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
        }
        .footer-copy {
          font-size: 12px; color: rgba(255,255,255,0.25);
        }
        .footer-scroll-top {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.2);
          color: #34d399; font-size: 13px; cursor: pointer;
          transition: all 0.25s ease;
        }
        .footer-scroll-top:hover {
          background: rgba(52,211,153,0.18);
          box-shadow: 0 0 16px rgba(52,211,153,0.25);
          transform: translateY(-2px);
        }

        /* Divider in footer */
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          max-width: 1100px; margin: 0 auto;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px; padding: 48px 24px 36px;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px; padding: 40px 20px 28px;
          }
          .footer-bottom {
            padding: 16px 20px;
            flex-direction: column; text-align: center; gap: 12px;
          }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-glow" />

        <div className="footer-grid">

          {/* ── Brand ── */}
          <div className="footer-brand">
            <NavLink to="/" className="footer-logo">
              <div className="flex justify-center mb-4">
                 <img src={logo} alt="IEEE PES Logo" className="h-14 w-auto" />
             </div>
            </NavLink>
            <p className="footer-tagline">
              IEEE Power &amp; Energy Society Student Branch Chapter of the
              University of Moratuwa — advancing power engineering for humanity.
            </p>
            <div className="footer-badge">
              <FaBolt size={8} /> Est. · University of Moratuwa
            </div>
            <div className="footer-social">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className="footer-social-btn">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigation ── */}
          <div>
            <p className="footer-col-title">Navigation</p>
            {LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === "/"} className="footer-link">
                {label}
              </NavLink>
            ))}
          </div>

          {/* ── Contact ── */}
          <div>
            <p className="footer-col-title">Contact</p>
            <div className="footer-contact-row">
              <div className="footer-contact-icon"><FaMapMarkerAlt /></div>
              <p className="footer-contact-text">
                IEEE PES Student Branch Chapter<br />
                University of Moratuwa<br />
                Moratuwa 10400, Sri Lanka
              </p>
            </div>
            <div className="footer-contact-row">
              <div className="footer-contact-icon"><FaEnvelope /></div>
              <a href="mailto:ieeepessbuom25@gmail.com"
                className="footer-contact-text"
                style={{ color: "rgba(52,211,153,0.6)", textDecoration: "none" }}>
                ieeepessbuom25<br />@gmail.com
              </a>
            </div>
          </div>

          {/* ── IEEE ── */}
          <div>
            <p className="footer-col-title">IEEE</p>
            {[
              { href: "https://www.ieee.org", label: "IEEE Global" },
              { href: "https://www.ieee-pes.org", label: "IEEE PES" },
              { href: "https://ieeexplore.ieee.org", label: "IEEE Xplore" },
              { href: "https://www.ieee.org/membership", label: "Membership" },
            ].map(({ href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="footer-link">{label}</a>
            ))}
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} IEEE PES Student Branch Chapter · University of Moratuwa.
            All rights reserved.
          </p>
          <button className="footer-scroll-top" onClick={scrollTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </footer>
    </>
  );
}