import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaUsers, FaProjectDiagram } from "react-icons/fa";

const WORDS = ["Innovation", "Leadership", "Excellence", "Power"];

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const statsRef = useRef<HTMLDivElement>(null);

  /* Cycling word with crossfade */
  useEffect(() => {
    const iv = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

        .hero-root {
          position: relative; min-height: 100svh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
          padding: 25px 24px 80px;
          text-align: center;
        }

        /* ── Animated background: rotating conic gradient rings ── */
        .hero-ring-1, .hero-ring-2, .hero-ring-3 {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(52,211,153,0.12);
          pointer-events: none; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .hero-ring-1 {
          width: clamp(320px,55vw,640px); height: clamp(320px,55vw,640px);
          border-color: rgba(52,211,153,0.18);
          animation: ringRotate 18s linear infinite;
        }
        .hero-ring-2 {
          width: clamp(480px,80vw,900px); height: clamp(480px,80vw,900px);
          border-color: rgba(52,211,153,0.10);
          border-style: dashed;
          animation: ringRotate 30s linear infinite reverse;
        }
        .hero-ring-3 {
          width: clamp(640px,110vw,1200px); height: clamp(640px,110vw,1200px);
          border-color: rgba(52,211,153,0.06);
          animation: ringRotate 50s linear infinite;
        }
        @keyframes ringRotate {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }

        /* Ring tick marks */
        .hero-ring-1::before, .hero-ring-1::after {
          content: '';
          position: absolute; width: 6px; height: 6px; border-radius: 50%;
          background: #34d399; box-shadow: 0 0 10px #34d399, 0 0 22px rgba(52,211,153,0.5);
        }
        .hero-ring-1::before { top: -3px; left: 50%; transform: translateX(-50%); }
        .hero-ring-1::after  { bottom: -3px; left: 50%; transform: translateX(-50%); }

        /* Center glow */
        .hero-center-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(22,163,74,0.16) 0%, transparent 70%);
          filter: blur(40px); pointer-events: none;
          animation: centerPulse 4s ease-in-out infinite;
        }
        @keyframes centerPulse {
          0%,100% { opacity: 0.6; transform: translate(-50%,-50%) scale(1); }
          50%      { opacity: 1;   transform: translate(-50%,-50%) scale(1.2); }
        }

        /* Content */
        .hero-content { position: relative; z-index: 2; max-width: 800px; }

        @keyframes hUp {
          from { opacity:0; transform: translateY(24px); }
          to   { opacity:1; transform: translateY(0); }
        }
        .h-up-1 { animation: hUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .h-up-2 { animation: hUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both; }
        .h-up-3 { animation: hUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.45s both; }
        .h-up-4 { animation: hUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.62s both; }
        .h-up-5 { animation: hUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.78s both; }

        /* Eyebrow */
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 16px; border-radius: 999px;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.22);
          font-size: 10px; font-weight: 600;
          color: rgba(52,211,153,0.8); letter-spacing: 0.2em;
          text-transform: uppercase; margin-bottom: 28px;
        }
        .hero-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
          animation: dotBlink 2s ease-in-out infinite;
        }
        @keyframes dotBlink {
          0%,100% { opacity:1; box-shadow: 0 0 8px #34d399; }
          50%      { opacity:0.5; box-shadow: 0 0 3px #34d399; }
        }

        /* Main heading */
        .hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 9vw, 110px);
          font-weight: 700; color: #fff;
          line-height: 1.0; letter-spacing: -0.025em;
          margin-bottom: 12px;
        }
        .hero-heading-line2 {
          font-style: italic; color: transparent;
          -webkit-text-stroke: 1px rgba(52,211,153,0.7);
          display: block;
        }

        /* Cycling word */
        .hero-word {
          color: #6ee7b7;
          -webkit-text-stroke: 0;
          display: inline-block;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .hero-word.word-hidden {
          opacity: 0; transform: translateY(12px);
        }
        .hero-word.word-visible {
          opacity: 1; transform: translateY(0);
        }

        /* Subtitle */
        .hero-sub {
          font-size: clamp(14px, 1.8vw, 17px);
          color: rgba(255,255,255,0.48); font-weight: 300;
          line-height: 1.75; max-width: 540px; margin: 20px auto 0;
        }

        /* Divider */
        .hero-divider {
          width: 80px; height: 1.5px; border-radius: 999px; margin: 28px auto;
          background: linear-gradient(90deg, transparent, #34d399, transparent);
          box-shadow: 0 0 8px rgba(52,211,153,0.5);
        }

        /* CTA buttons */
        .hero-ctas { display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap; }

        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 999px;
          background: linear-gradient(135deg, rgba(52,211,153,0.22), rgba(22,163,74,0.14));
          border: 1px solid rgba(52,211,153,0.4);
          color: #6ee7b7; font-size: 14px; font-weight: 600;
          text-decoration: none; font-family: 'Outfit', sans-serif;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 0 24px rgba(52,211,153,0.12);
        }
        .hero-btn-primary:hover {
          background: linear-gradient(135deg, rgba(52,211,153,0.32), rgba(22,163,74,0.22));
          box-shadow: 0 0 40px rgba(52,211,153,0.25), 0 8px 24px rgba(0,0,0,0.3);
          transform: translateY(-3px);
          color: #fff;
        }
        .hero-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          color: rgba(255,255,255,0.55); font-size: 14px; font-weight: 500;
          text-decoration: none; font-family: 'Outfit', sans-serif;
          transition: all 0.3s ease;
        }
        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
          color: #fff; transform: translateY(-3px);
        }

        /* Stats row */
        .hero-stats {
          display: flex; align-items: center; justify-content: center;
          gap: 2px; margin-top: 56px; flex-wrap: wrap;
        }
        .hero-stat {
          padding: 14px 28px; display: flex; flex-direction: column; gap: 3px;
          position: relative;
        }
        .hero-stat + .hero-stat::before {
          content: ''; position: absolute; left: 0; top: 20%; height: 60%;
          width: 1px; background: rgba(255,255,255,0.08);
        }
        .hero-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px; font-weight: 700; color: #fff; line-height: 1;
        }
        .hero-stat-label {
          font-size: 10px; color: rgba(255,255,255,0.35);
          letter-spacing: 0.1em; text-transform: uppercase;
        }

        /* Scroll cue */
        .hero-scroll {
          position: absolute; bottom: 32px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          color: rgba(255,255,255,0.2); font-size: 9px;
          letter-spacing: 0.2em; text-transform: uppercase;
          z-index: 2;
        }
        .hero-scroll-bar { width: 1px; height: 36px; overflow: hidden; }
        .hero-scroll-fill {
          width: 1px; height: 100%;
          background: linear-gradient(to bottom, #34d399, transparent);
          animation: scrollDrop 1.8s ease-in-out infinite;
        }
        @keyframes scrollDrop {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>

      <div className="hero-root">
        {/* Decorative rings */}
        <div className="hero-ring-1" />
        <div className="hero-ring-2" />
        <div className="hero-ring-3" />
        <div className="hero-center-glow" />

        {/* Content */}
        <div className="hero-content">
          <div className="h-up-1">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-dot" />
              IEEE Power &amp; Energy Society · UoM
            </div>
          </div>

          <div className="h-up-2">
            <h1 className="hero-heading">
              Driving Energy<br />
              <span className="hero-heading-line2">
                <span className={`hero-word ${visible ? "word-visible" : "word-hidden"}`}>
                  {WORDS[wordIdx]}
                </span>
              </span>
            </h1>
          </div>

          <div className="h-up-3">
            <p className="hero-sub">
              IEEE PES Student Branch Chapter of University of Moratuwa — empowering
              the next generation of power engineers through innovation, education,
              and industry connection.
            </p>
          </div>

          <div className="hero-divider h-up-3" />

          <div className="h-up-4">
            <div className="hero-ctas">
              <NavLink to="/committees" className="hero-btn-primary">
                <FaUsers size={13} /> Meet the Team <FaArrowRight size={11} />
              </NavLink>
              <NavLink to="/projects" className="hero-btn-secondary">
                <FaProjectDiagram size={13} /> Our Projects
              </NavLink>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats h-up-5" ref={statsRef}>
            {[
              { num: "30+", label: "Members" },
              { num: "8+",  label: "Events / Year" },
              { num: "5+",  label: "Years Active" },
            ].map(({ num, label }) => (
              <div key={label} className="hero-stat">
                <span className="hero-stat-num">{num}</span>
                <span className="hero-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero-scroll">
          
          <div className="hero-scroll-bar">
            <div className="hero-scroll-fill" />
          </div>
        </div>
      </div>
    </>
  );
}