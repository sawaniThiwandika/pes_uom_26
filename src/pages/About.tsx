// import "../styles/pages.css";
// import energyVideo from "../assets/energy.mp4";

// export default function About() {
//   return (
//     <div className="about-page">

//       {/* HERO VIDEO SECTION */}

//       <section className="about-hero">

//         <video
//           className="hero-video"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src={energyVideo} type="video/mp4" />
//         </video>

//         <div className="hero-overlay">

//           <h1>About IEEE PES</h1>

//           <p>
//             IEEE Power & Energy Society Student Branch Chapter of
//             University of Moratuwa focuses on innovation, leadership
//             and technological advancement in power engineering.
//           </p>

//         </div>

//       </section>

//       {/* ABOUT IEEE */}

//       <section className="about-section">

//         <h2>About IEEE</h2>

//         <p>
//           IEEE is the world's largest technical professional organization
//           dedicated to advancing technology for the benefit of humanity.
//         </p>

//       </section>

//       {/* VISION & MISSION */}

//       <section className="vision-mission">

//         <div className="vision-card">
//           <h2>Our Vision</h2>

//           <p>
//             Foster technological innovation and excellence
//             for the benefit of humanity.
//           </p>
//         </div>

//         <div className="mission-card">
//           <h2>Our Mission</h2>

//           <p className="mission-text">
//             IEEE will be essential to the global technical community and
//             to technical professionals everywhere, and be universally
//             recognized for the contributions of technology and of
//             technical professionals in improving global conditions.
//           </p>
//         </div>

//       </section>

//     </div>
//   );
// }

import energyVideo from "../assets/energy.mp4";

/* ── Shared inline styles helpers ─────────────────────────────────── */
const GS = {
  bg: "#060d07",
  accent: "#34d399",
  accentMuted: "#6ee7b7",
  surface: "rgba(255,255,255,0.03)",
  border: "rgba(255,255,255,0.07)",
  borderAccent: "rgba(52,211,153,0.25)",
};

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

        .about-root { font-family: 'Outfit', sans-serif; }
        .about-display { font-family: 'Cormorant Garamond', serif; }

        @keyframes aUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .a-up { animation: aUp 0.65s ease forwards; }
        .a-up-d1 { animation-delay: 0.1s; opacity:0; }
        .a-up-d2 { animation-delay: 0.25s; opacity:0; }
        .a-up-d3 { animation-delay: 0.40s; opacity:0; }

        .about-card-hover {
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .about-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 32px 72px rgba(0,0,0,0.55), 0 0 0 1px rgba(52,211,153,0.28) !important;
        }

        .vm-card-inner {
          transition: all 0.35s ease;
        }
        .vm-card-inner:hover {
          background: rgba(255,255,255,0.06) !important;
          transform: translateY(-4px);
        }

        .stat-glow:hover {
          box-shadow: 0 0 32px rgba(52,211,153,0.18) !important;
        }
      `}</style>

      <div
        className="about-root"
        style={{ background: GS.bg, minHeight: "100vh" }}
      >
        {/* ── Hero Video Section ─────────────────────────────────────────── */}
        <section
          className="relative flex items-end overflow-hidden mt-12 lg:mt-0"
          style={{ minHeight: "92vh" }}
        >
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.28 }}
          >
            <source src={energyVideo} type="video/mp4" />
          </video>

          {/* Multi-layer gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to top, #060d07 0%, rgba(6,13,7,0.5) 40%, rgba(6,13,7,0.1) 70%, transparent 100%),
                radial-gradient(ellipse at 50% 60%, rgba(22,163,74,0.12) 0%, transparent 60%)
              `,
            }}
          />

          {/* Ambient top glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: "700px",
              height: "400px",
              background:
                "radial-gradient(ellipse, rgba(22,163,74,0.14) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* Content — anchored to bottom */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 sm:pb-28">
            <div className="a-up a-up-d1">
              <p
                className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-5"
                style={{ color: GS.accent }}
              >
                IEEE Power &amp; Energy Society · University of Moratuwa
              </p>
            </div>

            <h1
              className="about-display a-up a-up-d2 leading-none text-white mb-6"
              style={{
                fontSize: "clamp(52px, 8vw, 100px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              About
              <br />
              <span style={{ color: GS.accentMuted, fontStyle: "italic" }}>
                IEEE PES
              </span>
            </h1>

            <p
              className="a-up a-up-d3 max-w-xl leading-relaxed"
              style={{
                fontSize: "clamp(14px, 1.6vw, 17px)",
                color: "rgba(255,255,255,0.60)",
                fontWeight: 300,
              }}
            >
              IEEE Power &amp; Energy Society Student Branch Chapter of
              University of Moratuwa — fostering innovation, leadership, and
              technological advancement in power engineering.
            </p>

            {/* Decorative line */}
            <div className="mt-10 flex items-center gap-4">
              <div
                className="h-px w-16"
                style={{
                  background: `linear-gradient(90deg, ${GS.accent}, transparent)`,
                }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: GS.accent }}
              />
              <div
                className="h-px w-32"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-2"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            <span
              className="text-[9px] tracking-[0.2em] uppercase rotate-90 origin-center"
              style={{ writingMode: "vertical-rl" }}
            >
              Scroll
            </span>
            <div
              className="w-px h-12"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(52,211,153,0.5), transparent)",
              }}
            />
          </div>
        </section>

        {/* ── About IEEE Section ──────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border"
              style={{
                background: "rgba(52,211,153,0.08)",
                borderColor: GS.borderAccent,
                color: GS.accentMuted,
              }}
            >
              About IEEE
            </span>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <h2
                className="about-display leading-tight text-white mb-6"
                style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600 }}
              >
                The World's Largest
                <br />
                <span style={{ color: GS.accentMuted, fontStyle: "italic" }}>
                  Technical Organization
                </span>
              </h2>
              <p
                className="leading-relaxed mb-6"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "15px",
                  fontWeight: 300,
                }}
              >
                IEEE is the world's largest technical professional organization
                dedicated to advancing technology for the benefit of humanity.
                With over 400,000 members across 160+ countries, it drives
                innovation at the intersection of engineering, science, and
                technology.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.40)",
                  fontSize: "14px",
                  fontWeight: 300,
                }}
              >
                The Power &amp; Energy Society is one of IEEE's oldest and
                largest technical societies, focusing on science, technology,
                and economics of electric power generation, transmission,
                distribution, and utilization.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: "400K+", label: "Members worldwide" },
                { num: "160+", label: "Countries represented" },
                { num: "1884", label: "Year founded" },
                { num: "39", label: "Technical societies" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="stat-glow rounded-2xl p-5 border about-card-hover"
                  style={{
                    background: GS.surface,
                    borderColor: GS.border,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.35s ease",
                  }}
                >
                  <p
                    className="about-display mb-1"
                    style={{
                      fontSize: "clamp(28px,3vw,38px)",
                      fontWeight: 700,
                      color: GS.accentMuted,
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ────────────────────────────────────────────────────── */}
        <div
          className="max-w-5xl mx-auto px-6 sm:px-10"
          style={{ height: "1px", background: "rgba(255,255,255,0.05)" }}
        />

        {/* ── Vision & Mission ───────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-14">
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border"
              style={{
                background: "rgba(52,211,153,0.08)",
                borderColor: GS.borderAccent,
                color: GS.accentMuted,
              }}
            >
              Vision &amp; Mission
            </span>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Vision Card */}
            <div
              className="vm-card-inner group relative rounded-2xl p-8 border overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(52,211,153,0.15)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(52,211,153,0.1) 0%, transparent 70%)",
                }}
              />
              {/* Number badge */}
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-6 text-sm font-bold"
                style={{
                  background: "rgba(52,211,153,0.12)",
                  border: "1px solid rgba(52,211,153,0.3)",
                  color: GS.accent,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "18px",
                }}
              >
                01
              </div>

              <h3
                className="about-display mb-4 text-white"
                style={{ fontSize: "clamp(24px,2.5vw,32px)", fontWeight: 600 }}
              >
                Our Vision
              </h3>
              <div
                className="h-px w-10 mb-5"
                style={{ background: GS.accent }}
              />
              <p
                className="leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "15px",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                Foster technological innovation and excellence for the benefit
                of humanity.
              </p>
            </div>

            {/* Mission Card */}
            <div
              className="vm-card-inner group relative rounded-2xl p-8 border overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div
                className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at bottom left, rgba(52,211,153,0.07) 0%, transparent 70%)",
                }}
              />
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-6"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                02
              </div>

              <h3
                className="about-display mb-4 text-white"
                style={{ fontSize: "clamp(24px,2.5vw,32px)", fontWeight: 600 }}
              >
                Our Mission
              </h3>
              <div
                className="h-px w-10 mb-5"
                style={{ background: "rgba(255,255,255,0.2)" }}
              />
              <p
                className="leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.50)",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                IEEE will be essential to the global technical community and to
                technical professionals everywhere, and be universally
                recognized for the contributions of technology and of technical
                professionals in improving global conditions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
