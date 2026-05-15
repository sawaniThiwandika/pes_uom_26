// // import "../styles/pages.css";
// // import energyVideo from "../assets/energy.mp4";

// // export default function About() {
// //   return (
// //     <div className="about-page">

// //       {/* HERO VIDEO SECTION */}

// //       <section className="about-hero">

// //         <video
// //           className="hero-video"
// //           autoPlay
// //           loop
// //           muted
// //           playsInline
// //         >
// //           <source src={energyVideo} type="video/mp4" />
// //         </video>

// //         <div className="hero-overlay">

// //           <h1>About IEEE PES</h1>

// //           <p>
// //             IEEE Power & Energy Society Student Branch Chapter of
// //             University of Moratuwa focuses on innovation, leadership
// //             and technological advancement in power engineering.
// //           </p>

// //         </div>

// //       </section>

// //       {/* ABOUT IEEE */}

// //       <section className="about-section">

// //         <h2>About IEEE</h2>

// //         <p>
// //           IEEE is the world's largest technical professional organization
// //           dedicated to advancing technology for the benefit of humanity.
// //         </p>

// //       </section>

// //       {/* VISION & MISSION */}

// //       <section className="vision-mission">

// //         <div className="vision-card">
// //           <h2>Our Vision</h2>

// //           <p>
// //             Foster technological innovation and excellence
// //             for the benefit of humanity.
// //           </p>
// //         </div>

// //         <div className="mission-card">
// //           <h2>Our Mission</h2>

// //           <p className="mission-text">
// //             IEEE will be essential to the global technical community and
// //             to technical professionals everywhere, and be universally
// //             recognized for the contributions of technology and of
// //             technical professionals in improving global conditions.
// //           </p>
// //         </div>

// //       </section>

// //     </div>
// //   );
// // }

// import energyVideo from "../assets/energy.mp4";

// /* ── Shared inline styles helpers ─────────────────────────────────── */
// const GS = {
//   bg: "#060d07",
//   accent: "#34d399",
//   accentMuted: "#6ee7b7",
//   surface: "rgba(255,255,255,0.03)",
//   border: "rgba(255,255,255,0.07)",
//   borderAccent: "rgba(52,211,153,0.25)",
// };

// export default function About() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

//         .about-root { font-family: 'Outfit', sans-serif; }
//         .about-display { font-family: 'Cormorant Garamond', serif; }

//         @keyframes aUp {
//           from { opacity:0; transform:translateY(22px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .a-up { animation: aUp 0.65s ease forwards; }
//         .a-up-d1 { animation-delay: 0.1s; opacity:0; }
//         .a-up-d2 { animation-delay: 0.25s; opacity:0; }
//         .a-up-d3 { animation-delay: 0.40s; opacity:0; }

//         .about-card-hover {
//           transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
//         }
//         .about-card-hover:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 32px 72px rgba(0,0,0,0.55), 0 0 0 1px rgba(52,211,153,0.28) !important;
//         }

//         .vm-card-inner {
//           transition: all 0.35s ease;
//         }
//         .vm-card-inner:hover {
//           background: rgba(255,255,255,0.06) !important;
//           transform: translateY(-4px);
//         }

//         .stat-glow:hover {
//           box-shadow: 0 0 32px rgba(52,211,153,0.18) !important;
//         }
//       `}</style>

//       <div
//         className="about-root"
//         style={{ background: GS.bg, minHeight: "100vh" }}
//       >
//         {/* ── Hero Video Section ─────────────────────────────────────────── */}
//         <section
//           className="relative flex items-end overflow-hidden mt-12 lg:mt-0"
//           style={{ minHeight: "92vh" }}
//         >
//           {/* Video */}
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute inset-0 w-full h-full object-cover"
//             style={{ opacity: 0.28 }}
//           >
//             <source src={energyVideo} type="video/mp4" />
//           </video>

//           {/* Multi-layer gradient overlay */}
//           <div
//             className="absolute inset-0"
//             style={{
//               background: `
//                 linear-gradient(to top, #060d07 0%, rgba(6,13,7,0.5) 40%, rgba(6,13,7,0.1) 70%, transparent 100%),
//                 radial-gradient(ellipse at 50% 60%, rgba(22,163,74,0.12) 0%, transparent 60%)
//               `,
//             }}
//           />

//           {/* Ambient top glow */}
//           <div
//             className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
//             style={{
//               width: "700px",
//               height: "400px",
//               background:
//                 "radial-gradient(ellipse, rgba(22,163,74,0.14) 0%, transparent 70%)",
//               filter: "blur(80px)",
//             }}
//           />

//           {/* Content — anchored to bottom */}
//           <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 sm:pb-28">
//             <div className="a-up a-up-d1">
//               <p
//                 className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-5"
//                 style={{ color: GS.accent }}
//               >
//                 IEEE Power &amp; Energy Society · University of Moratuwa
//               </p>
//             </div>

//             <h1
//               className="about-display a-up a-up-d2 leading-none text-white mb-6"
//               style={{
//                 fontSize: "clamp(52px, 8vw, 100px)",
//                 fontWeight: 600,
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               About
//               <br />
//               <span style={{ color: GS.accentMuted, fontStyle: "italic" }}>
//                 IEEE PES
//               </span>
//             </h1>

//             <p
//               className="a-up a-up-d3 max-w-xl leading-relaxed"
//               style={{
//                 fontSize: "clamp(14px, 1.6vw, 17px)",
//                 color: "rgba(255,255,255,0.60)",
//                 fontWeight: 300,
//               }}
//             >
//               IEEE Power &amp; Energy Society Student Branch Chapter of
//               University of Moratuwa — fostering innovation, leadership, and
//               technological advancement in power engineering.
//             </p>

//             {/* Decorative line */}
//             <div className="mt-10 flex items-center gap-4">
//               <div
//                 className="h-px w-16"
//                 style={{
//                   background: `linear-gradient(90deg, ${GS.accent}, transparent)`,
//                 }}
//               />
//               <div
//                 className="w-1.5 h-1.5 rounded-full"
//                 style={{ background: GS.accent }}
//               />
//               <div
//                 className="h-px w-32"
//                 style={{ background: "rgba(255,255,255,0.08)" }}
//               />
//             </div>
//           </div>

//           {/* Scroll indicator */}
//           <div
//             className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-2"
//             style={{ color: "rgba(255,255,255,0.25)" }}
//           >
//             <span
//               className="text-[9px] tracking-[0.2em] uppercase rotate-90 origin-center"
//               style={{ writingMode: "vertical-rl" }}
//             >
//               Scroll
//             </span>
//             <div
//               className="w-px h-12"
//               style={{
//                 background:
//                   "linear-gradient(to bottom, rgba(52,211,153,0.5), transparent)",
//               }}
//             />
//           </div>
//         </section>

//         {/* ── About IEEE Section ──────────────────────────────────────────── */}
//         <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
//           {/* Section header */}
//           <div className="flex items-center gap-4 mb-12">
//             <div
//               className="h-px flex-1"
//               style={{ background: "rgba(255,255,255,0.05)" }}
//             />
//             <span
//               className="text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border"
//               style={{
//                 background: "rgba(52,211,153,0.08)",
//                 borderColor: GS.borderAccent,
//                 color: GS.accentMuted,
//               }}
//             >
//               About IEEE
//             </span>
//             <div
//               className="h-px flex-1"
//               style={{ background: "rgba(255,255,255,0.05)" }}
//             />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//             {/* Text */}
//             <div>
//               <h2
//                 className="about-display leading-tight text-white mb-6"
//                 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600 }}
//               >
//                 The World's Largest
//                 <br />
//                 <span style={{ color: GS.accentMuted, fontStyle: "italic" }}>
//                   Technical Organization
//                 </span>
//               </h2>
//               <p
//                 className="leading-relaxed mb-6"
//                 style={{
//                   color: "rgba(255,255,255,0.55)",
//                   fontSize: "15px",
//                   fontWeight: 300,
//                 }}
//               >
//                 IEEE is the world's largest technical professional organization
//                 dedicated to advancing technology for the benefit of humanity.
//                 With over 400,000 members across 160+ countries, it drives
//                 innovation at the intersection of engineering, science, and
//                 technology.
//               </p>
//               <p
//                 className="leading-relaxed"
//                 style={{
//                   color: "rgba(255,255,255,0.40)",
//                   fontSize: "14px",
//                   fontWeight: 300,
//                 }}
//               >
//                 The Power &amp; Energy Society is one of IEEE's oldest and
//                 largest technical societies, focusing on science, technology,
//                 and economics of electric power generation, transmission,
//                 distribution, and utilization.
//               </p>
//             </div>

//             {/* Stats grid */}
//             <div className="grid grid-cols-2 gap-3">
//               {[
//                 { num: "400K+", label: "Members worldwide" },
//                 { num: "160+", label: "Countries represented" },
//                 { num: "1884", label: "Year founded" },
//                 { num: "39", label: "Technical societies" },
//               ].map(({ num, label }) => (
//                 <div
//                   key={label}
//                   className="stat-glow rounded-2xl p-5 border about-card-hover"
//                   style={{
//                     background: GS.surface,
//                     borderColor: GS.border,
//                     boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
//                     backdropFilter: "blur(12px)",
//                     transition: "all 0.35s ease",
//                   }}
//                 >
//                   <p
//                     className="about-display mb-1"
//                     style={{
//                       fontSize: "clamp(28px,3vw,38px)",
//                       fontWeight: 700,
//                       color: GS.accentMuted,
//                       lineHeight: 1,
//                     }}
//                   >
//                     {num}
//                   </p>
//                   <p
//                     style={{
//                       fontSize: "11px",
//                       color: "rgba(255,255,255,0.4)",
//                       letterSpacing: "0.06em",
//                     }}
//                   >
//                     {label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── Divider ────────────────────────────────────────────────────── */}
//         <div
//           className="max-w-5xl mx-auto px-6 sm:px-10"
//           style={{ height: "1px", background: "rgba(255,255,255,0.05)" }}
//         />

//         {/* ── Vision & Mission ───────────────────────────────────────────── */}
//         <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
//           {/* Section header */}
//           <div className="flex items-center gap-4 mb-14">
//             <div
//               className="h-px flex-1"
//               style={{ background: "rgba(255,255,255,0.05)" }}
//             />
//             <span
//               className="text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border"
//               style={{
//                 background: "rgba(52,211,153,0.08)",
//                 borderColor: GS.borderAccent,
//                 color: GS.accentMuted,
//               }}
//             >
//               Vision &amp; Mission
//             </span>
//             <div
//               className="h-px flex-1"
//               style={{ background: "rgba(255,255,255,0.05)" }}
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {/* Vision Card */}
//             <div
//               className="vm-card-inner group relative rounded-2xl p-8 border overflow-hidden"
//               style={{
//                 background: "rgba(255,255,255,0.03)",
//                 borderColor: "rgba(52,211,153,0.15)",
//                 boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
//                 backdropFilter: "blur(16px)",
//               }}
//             >
//               {/* Corner glow */}
//               <div
//                 className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
//                 style={{
//                   background:
//                     "radial-gradient(ellipse at top right, rgba(52,211,153,0.1) 0%, transparent 70%)",
//                 }}
//               />
//               {/* Number badge */}
//               <div
//                 className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-6 text-sm font-bold"
//                 style={{
//                   background: "rgba(52,211,153,0.12)",
//                   border: "1px solid rgba(52,211,153,0.3)",
//                   color: GS.accent,
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: "18px",
//                 }}
//               >
//                 01
//               </div>

//               <h3
//                 className="about-display mb-4 text-white"
//                 style={{ fontSize: "clamp(24px,2.5vw,32px)", fontWeight: 600 }}
//               >
//                 Our Vision
//               </h3>
//               <div
//                 className="h-px w-10 mb-5"
//                 style={{ background: GS.accent }}
//               />
//               <p
//                 className="leading-relaxed"
//                 style={{
//                   color: "rgba(255,255,255,0.55)",
//                   fontSize: "15px",
//                   fontStyle: "italic",
//                   fontWeight: 300,
//                 }}
//               >
//                 Foster technological innovation and excellence for the benefit
//                 of humanity.
//               </p>
//             </div>

//             {/* Mission Card */}
//             <div
//               className="vm-card-inner group relative rounded-2xl p-8 border overflow-hidden"
//               style={{
//                 background: "rgba(255,255,255,0.03)",
//                 borderColor: "rgba(255,255,255,0.07)",
//                 boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
//                 backdropFilter: "blur(16px)",
//               }}
//             >
//               <div
//                 className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none"
//                 style={{
//                   background:
//                     "radial-gradient(ellipse at bottom left, rgba(52,211,153,0.07) 0%, transparent 70%)",
//                 }}
//               />
//               <div
//                 className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-6"
//                 style={{
//                   background: "rgba(255,255,255,0.05)",
//                   border: "1px solid rgba(255,255,255,0.10)",
//                   color: "rgba(255,255,255,0.5)",
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: "18px",
//                   fontWeight: 700,
//                 }}
//               >
//                 02
//               </div>

//               <h3
//                 className="about-display mb-4 text-white"
//                 style={{ fontSize: "clamp(24px,2.5vw,32px)", fontWeight: 600 }}
//               >
//                 Our Mission
//               </h3>
//               <div
//                 className="h-px w-10 mb-5"
//                 style={{ background: "rgba(255,255,255,0.2)" }}
//               />
//               <p
//                 className="leading-relaxed"
//                 style={{
//                   color: "rgba(255,255,255,0.50)",
//                   fontSize: "15px",
//                   fontWeight: 300,
//                   lineHeight: 1.8,
//                 }}
//               >
//                 IEEE will be essential to the global technical community and to
//                 technical professionals everywhere, and be universally
//                 recognized for the contributions of technology and of technical
//                 professionals in improving global conditions.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// -----------------------------------------------------------------------------------

// import { useRef, useCallback } from "react";
// import energyVideo from "../assets/energy.mp4";
// import EnergyParticles from "../components/EnergyParticles";
// import { useScrollReveal } from "../hooks/useScrollReveal";
// import { useCounter } from "../hooks/useCounter";

// /* ── Animated stat counter ─────────────────────────────────────── */
// function StatCounter({ num, suffix, label }: { num: number; suffix: string; label: string }) {
//   const { value, ref } = useCounter(num, 1800);
//   return (
//     <div className="about-stat-card group relative rounded-2xl p-5 border overflow-hidden"
//       style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)",
//         boxShadow: "0 8px 24px rgba(0,0,0,0.3)", backdropFilter: "blur(12px)",
//         transition: "all 0.4s ease" }}>
//       {/* Corner glow on hover */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
//         style={{ background: "radial-gradient(ellipse at top right, rgba(52,211,153,0.08) 0%, transparent 65%)" }} />
//       <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
//         style={{ background: "linear-gradient(90deg, transparent, #34d399, transparent)" }} />
//       <p ref={ref} className="about-display mb-1 leading-none"
//         style={{ fontSize: "clamp(28px,3vw,40px)", fontWeight: 700, color: "#6ee7b7" }}>
//         {value.toLocaleString()}{suffix}
//       </p>
//       <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.38)", letterSpacing: "0.07em" }}>{label}</p>
//     </div>
//   );
// }

// /* ── Magnetic CTA button ────────────────────────────────────────── */
// function MagneticBtn({ href, children }: { href: string; children: React.ReactNode }) {
//   const btnRef = useRef<HTMLAnchorElement>(null);

//   const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
//     const el = btnRef.current; if (!el) return;
//     const { left, top, width, height } = el.getBoundingClientRect();
//     const x = (e.clientX - left - width  / 2) * 0.28;
//     const y = (e.clientY - top  - height / 2) * 0.28;
//     el.style.transform = `translate(${x}px, ${y}px)`;
//   }, []);

//   const onLeave = useCallback(() => {
//     const el = btnRef.current; if (!el) return;
//     el.style.transform = "translate(0,0)";
//     el.style.transition = "transform 0.45s cubic-bezier(0.23,1,0.32,1)";
//   }, []);

//   return (
//     <a ref={btnRef} href={href}
//       className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold"
//       style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.35)",
//         color: "#6ee7b7", textDecoration: "none", transition: "transform 0.08s linear, background 0.25s" }}
//       onMouseMove={onMove} onMouseLeave={onLeave}
//       onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(52,211,153,0.2)"; }}
//     >
//       {children}
//     </a>
//   );
// }

// export default function About() {
//   const revealRef = useScrollReveal();

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

//         .about-root   { font-family: 'Outfit', sans-serif; }
//         .about-display{ font-family: 'Cormorant Garamond', serif; }

//         /* ── Scroll reveal base state ── */
//         [data-reveal] {
//           opacity: 0;
//           transform: translateY(28px);
//           transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
//                       transform 0.7s cubic-bezier(0.22,1,0.36,1);
//         }
//         [data-reveal].sr-visible { opacity: 1; transform: translateY(0); }

//         /* Hero entrance — runs once on load, no reveal needed */
//         @keyframes aUp {
//           from { opacity:0; transform:translateY(22px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .a-up-1 { animation: aUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
//         .a-up-2 { animation: aUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.22s both; }
//         .a-up-3 { animation: aUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.40s both; }
//         .a-up-4 { animation: aUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s both; }

//         /* Stat card hover lift */
//         .about-stat-card:hover {
//           transform: translateY(-5px) !important;
//           box-shadow: 0 24px 56px rgba(0,0,0,0.4), 0 0 0 1px rgba(52,211,153,0.22) !important;
//           border-color: rgba(52,211,153,0.22) !important;
//         }

//         /* Vision/Mission cards */
//         .vm-card {
//           transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
//                       box-shadow 0.4s ease,
//                       border-color 0.4s ease,
//                       background 0.4s ease;
//         }
//         .vm-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 36px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(52,211,153,0.25) !important;
//           border-color: rgba(52,211,153,0.25) !important;
//           background: rgba(255,255,255,0.055) !important;
//         }

//         /* Parallax video (handled via JS below via CSS var approach) */
//         .hero-video-wrap {
//           position: absolute; inset: 0; overflow: hidden;
//         }
//         .hero-video-inner {
//           position: absolute; inset: -8%;
//           width: 116%; height: 116%;
//           transition: transform 0.05s linear;
//           will-change: transform;
//         }

//         /* Section label pill */
//         .section-pill {
//           display: inline-flex; align-items: center; gap: 6px;
//           font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase;
//           padding: 5px 16px; border-radius: 999px;
//           background: rgba(52,211,153,0.08);
//           border: 1px solid rgba(52,211,153,0.25);
//           color: #6ee7b7;
//         }

//         /* Animated underline on headings */
//         .heading-underline {
//           position: relative; display: inline-block;
//         }
//         .heading-underline::after {
//           content: '';
//           position: absolute; bottom: -6px; left: 0;
//           height: 2px; width: 0;
//           background: linear-gradient(90deg, #34d399, transparent);
//           border-radius: 2px;
//           transition: width 0.55s cubic-bezier(0.22,1,0.36,1) 0.1s;
//         }
//         .sr-visible .heading-underline::after,
//         .a-up-2 .heading-underline::after { width: 60%; }
//       `}</style>

//       <div className="about-root" style={{ background: "#060d07", minHeight: "100vh" }} ref={revealRef}>

//         {/* ══════════════════════════════════════════════
//             HERO — full viewport, video + particle mesh
//         ══════════════════════════════════════════════ */}
//         <section className="relative flex items-end overflow-hidden mt-12 lg:mt-0" style={{ minHeight: "94vh" }}>

//           {/* Video with subtle parallax wrapper */}
//           <div className="hero-video-wrap">
//             <div className="hero-video-inner">
//               <video autoPlay loop muted playsInline
//                 className="w-full h-full object-cover"
//                 style={{ opacity: 0.22 }}>
//                 <source src={energyVideo} type="video/mp4" />
//               </video>
//             </div>
//           </div>

//           {/* Energy particle mesh — power grid metaphor */}
//           <EnergyParticles count={60} />

//           {/* Gradient overlays */}
//           <div className="absolute inset-0" style={{
//             background: "linear-gradient(to top, #060d07 0%, rgba(6,13,7,0.55) 38%, rgba(6,13,7,0.08) 72%, transparent 100%)"
//           }} />
//           <div className="absolute inset-0" style={{
//             background: "radial-gradient(ellipse at 50% 55%, rgba(22,163,74,0.13) 0%, transparent 60%)"
//           }} />

//           {/* Top ambient glow */}
//           <div className="absolute -top-24 left-1/2 -translate-x-1/2 pointer-events-none"
//             style={{ width: "700px", height: "500px",
//               background: "radial-gradient(ellipse, rgba(22,163,74,0.16) 0%, transparent 70%)",
//               filter: "blur(90px)" }} />

//           {/* Hero content */}
//           <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 sm:pb-28">
//             <p className="a-up-1 text-[9px] sm:text-[10px] font-bold tracking-[0.32em] uppercase mb-5"
//               style={{ color: "#34d399" }}>
//               IEEE Power &amp; Energy Society · University of Moratuwa
//             </p>

//             <h1 className="a-up-2 about-display leading-none text-white mb-6"
//               style={{ fontSize: "clamp(52px,8.5vw,108px)", fontWeight: 600, letterSpacing: "-0.02em" }}>
//               About<br />
//               <span className="heading-underline" style={{ color: "#6ee7b7", fontStyle: "italic" }}>
//                 IEEE PES
//               </span>
//             </h1>

//             <p className="a-up-3 max-w-xl leading-relaxed"
//               style={{ fontSize: "clamp(14px,1.6vw,17px)", color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>
//               IEEE Power &amp; Energy Society Student Branch Chapter of University of
//               Moratuwa — fostering innovation, leadership, and technological advancement
//               in power engineering.
//             </p>

//             <div className="a-up-4 mt-10 flex items-center gap-5">
//               <MagneticBtn href="/committees">Meet the Team →</MagneticBtn>
//               <MagneticBtn href="/projects">Our Projects →</MagneticBtn>
//             </div>

//             {/* Decorative line */}
//             <div className="mt-10 flex items-center gap-4 a-up-4">
//               <div className="h-px w-14" style={{ background: "linear-gradient(90deg, #34d399, transparent)" }} />
//               <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#34d399" }} />
//               <div className="h-px w-32" style={{ background: "rgba(255,255,255,0.07)" }} />
//             </div>
//           </div>

//           {/* Scroll cue */}
//           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 a-up-4"
//             style={{ color: "rgba(255,255,255,0.2)" }}>
//             <span className="text-[8px] tracking-[0.28em] uppercase">Scroll</span>
//             <div className="overflow-hidden w-px h-10">
//               <div style={{ width: "1px", height: "100%",
//                 background: "linear-gradient(to bottom, #34d399, transparent)",
//                 animation: "scrollTick 1.6s ease-in-out infinite" }} />
//             </div>
//           </div>
//         </section>

//         <style>{`
//           @keyframes scrollTick {
//             0%   { transform: translateY(-100%); opacity:1; }
//             100% { transform: translateY(100%);  opacity:0; }
//           }
//         `}</style>

//         {/* ══════════════════════════════════════════════
//             ABOUT IEEE — text + animated stats
//         ══════════════════════════════════════════════ */}
//         <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">

//           {/* Section header */}
//           <div className="flex items-center gap-4 mb-14" data-reveal data-reveal-delay="0">
//             <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }} />
//             <span className="section-pill">About IEEE</span>
//             <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }} />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
//             {/* Text column */}
//             <div>
//               <h2 className="about-display leading-tight text-white mb-6"
//                 data-reveal data-reveal-delay="60"
//                 style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 600 }}>
//                 The World's Largest<br />
//                 <span style={{ color: "#6ee7b7", fontStyle: "italic" }}>Technical Organization</span>
//               </h2>
//               <p className="leading-relaxed mb-5" data-reveal data-reveal-delay="120"
//                 style={{ color: "rgba(255,255,255,0.52)", fontSize: "15px", fontWeight: 300 }}>
//                 IEEE is the world's largest technical professional organization
//                 dedicated to advancing technology for the benefit of humanity. With over
//                 400,000 members across 160+ countries, it drives innovation at the
//                 intersection of engineering, science, and technology.
//               </p>
//               <p className="leading-relaxed" data-reveal data-reveal-delay="160"
//                 style={{ color: "rgba(255,255,255,0.38)", fontSize: "14px", fontWeight: 300 }}>
//                 The Power &amp; Energy Society is one of IEEE's oldest and largest technical
//                 societies, focusing on science, technology, and economics of electric
//                 power generation, transmission, distribution, and utilization.
//               </p>
//             </div>

//             {/* Stats grid */}
//             <div className="grid grid-cols-2 gap-3" data-reveal data-reveal-delay="80">
//               <StatCounter num={400000} suffix="+"  label="Members worldwide" />
//               <StatCounter num={160}    suffix="+"  label="Countries represented" />
//               <StatCounter num={1884}   suffix=""   label="Year founded" />
//               <StatCounter num={39}     suffix=""   label="Technical societies" />
//             </div>
//           </div>
//         </section>

//         {/* Divider */}
//         <div className="max-w-5xl mx-auto px-6 sm:px-10"
//           style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />

//         {/* ══════════════════════════════════════════════
//             VISION & MISSION
//         ══════════════════════════════════════════════ */}
//         <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">

//           <div className="flex items-center gap-4 mb-14" data-reveal>
//             <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }} />
//             <span className="section-pill">Vision &amp; Mission</span>
//             <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }} />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//             {/* Vision */}
//             <div className="vm-card relative rounded-2xl p-8 border overflow-hidden"
//               data-reveal data-reveal-delay="60"
//               style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(52,211,153,0.15)",
//                 boxShadow: "0 16px 48px rgba(0,0,0,0.28)", backdropFilter: "blur(16px)" }}>
//               <div className="absolute top-0 right-0 w-36 h-36 pointer-events-none"
//                 style={{ background: "radial-gradient(ellipse at top right, rgba(52,211,153,0.1) 0%, transparent 70%)" }} />
//               <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-6"
//                 style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.3)",
//                   fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 700, color: "#34d399" }}>
//                 01
//               </div>
//               <h3 className="about-display mb-4 text-white" style={{ fontSize: "clamp(24px,2.5vw,32px)", fontWeight: 600 }}>
//                 Our Vision
//               </h3>
//               <div className="h-px w-10 mb-5" style={{ background: "#34d399" }} />
//               <p style={{ color: "rgba(255,255,255,0.52)", fontSize: "15px", fontStyle: "italic", fontWeight: 300, lineHeight: 1.8 }}>
//                 Foster technological innovation and excellence for the benefit of humanity.
//               </p>
//             </div>

//             {/* Mission */}
//             <div className="vm-card relative rounded-2xl p-8 border overflow-hidden"
//               data-reveal data-reveal-delay="160"
//               style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)",
//                 boxShadow: "0 16px 48px rgba(0,0,0,0.28)", backdropFilter: "blur(16px)" }}>
//               <div className="absolute bottom-0 left-0 w-44 h-44 pointer-events-none"
//                 style={{ background: "radial-gradient(ellipse at bottom left, rgba(52,211,153,0.07) 0%, transparent 70%)" }} />
//               <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-6"
//                 style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)",
//                   fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 700,
//                   color: "rgba(255,255,255,0.45)" }}>
//                 02
//               </div>
//               <h3 className="about-display mb-4 text-white" style={{ fontSize: "clamp(24px,2.5vw,32px)", fontWeight: 600 }}>
//                 Our Mission
//               </h3>
//               <div className="h-px w-10 mb-5" style={{ background: "rgba(255,255,255,0.18)" }} />
//               <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "15px", fontWeight: 300, lineHeight: 1.85 }}>
//                 IEEE will be essential to the global technical community and to technical
//                 professionals everywhere, and be universally recognized for the contributions
//                 of technology and of technical professionals in improving global conditions.
//               </p>
//             </div>
//           </div>
//         </section>

//       </div>
//     </>
//   );
// }

import { useRef, useCallback } from "react";
import energyVideo from "../assets/energy.mp4";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCounter } from "../hooks/useCounter";

/* ── Animated stat counter ─────────────────────────────────────── */
function StatCounter({
  num,
  suffix,
  label,
}: {
  num: number;
  suffix: string;
  label: string;
}) {
  const { value, ref } = useCounter(num, 1800);
  return (
    <div
      className="about-stat-card group relative rounded-2xl p-5 border overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "rgba(255,255,255,0.07)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        backdropFilter: "blur(12px)",
        transition: "all 0.4s ease",
      }}
    >
      {/* Corner glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(52,211,153,0.08) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background:
            "linear-gradient(90deg, transparent, #34d399, transparent)",
        }}
      />
      <p
        ref={ref}
        className="about-display mb-1 leading-none"
        style={{
          fontSize: "clamp(28px,3vw,40px)",
          fontWeight: 700,
          color: "#6ee7b7",
        }}
      >
        {value.toLocaleString()}
        {suffix}
      </p>
      <p
        style={{
          fontSize: "11px",
          color: "rgba(255,255,255,0.38)",
          letterSpacing: "0.07em",
        }}
      >
        {label}
      </p>
    </div>
  );
}

/* ── Magnetic CTA button ────────────────────────────────────────── */
function MagneticBtn({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = btnRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.28;
    const y = (e.clientY - top - height / 2) * 0.28;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = btnRef.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
    el.style.transition = "transform 0.45s cubic-bezier(0.23,1,0.32,1)";
  }, []);

  return (
    <a
      ref={btnRef}
      href={href}
      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold"
      style={{
        background: "rgba(52,211,153,0.12)",
        border: "1px solid rgba(52,211,153,0.35)",
        color: "#6ee7b7",
        textDecoration: "none",
        transition: "transform 0.08s linear, background 0.25s",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background =
          "rgba(52,211,153,0.2)";
      }}
    >
      {children}
    </a>
  );
}

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

        .about-root   { font-family: 'Outfit', sans-serif; }
        .about-display{ font-family: 'Cormorant Garamond', serif; }

        /* ── Scroll reveal base state ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        [data-reveal].sr-visible { opacity: 1; transform: translateY(0); }

        /* Hero entrance — runs once on load, no reveal needed */
        @keyframes aUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .a-up-1 { animation: aUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .a-up-2 { animation: aUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.22s both; }
        .a-up-3 { animation: aUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.40s both; }
        .a-up-4 { animation: aUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s both; }

        /* Stat card hover lift */
        .about-stat-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 24px 56px rgba(0,0,0,0.4), 0 0 0 1px rgba(52,211,153,0.22) !important;
          border-color: rgba(52,211,153,0.22) !important;
        }

        /* Vision/Mission cards */
        .vm-card {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s ease,
                      border-color 0.4s ease,
                      background 0.4s ease;
        }
        .vm-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 36px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(52,211,153,0.25) !important;
          border-color: rgba(52,211,153,0.25) !important;
          background: rgba(255,255,255,0.055) !important;
        }

        /* Parallax video (handled via JS below via CSS var approach) */
        .hero-video-wrap {
          position: absolute; inset: 0; overflow: hidden;
        }
        .hero-video-inner {
          position: absolute; inset: -8%;
          width: 116%; height: 116%;
          transition: transform 0.05s linear;
          will-change: transform;
        }

        /* Section label pill */
        .section-pill {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase;
          padding: 5px 16px; border-radius: 999px;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.25);
          color: #6ee7b7;
        }

        /* Animated underline on headings */
        .heading-underline {
          position: relative; display: inline-block;
        }
        .heading-underline::after {
          content: '';
          position: absolute; bottom: -6px; left: 0;
          height: 2px; width: 0;
          background: linear-gradient(90deg, #34d399, transparent);
          border-radius: 2px;
          transition: width 0.55s cubic-bezier(0.22,1,0.36,1) 0.1s;
        }
        .sr-visible .heading-underline::after,
        .a-up-2 .heading-underline::after { width: 60%; }
      `}</style>

      <div
        className="about-root"
        style={{ background: "#060d07", minHeight: "100vh" }}
        ref={revealRef}
      >
        {/* ══════════════════════════════════════════════
            HERO — full viewport, video + particle mesh
        ══════════════════════════════════════════════ */}
        <section
          className="relative flex items-end overflow-hidden mt-12 lg:mt-0"
          style={{ minHeight: "94vh" }}
        >
          {/* Video with subtle parallax wrapper */}
          <div className="hero-video-wrap">
            <div className="hero-video-inner">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ opacity: 0.22 }}
              >
                <source src={energyVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Hero particle boost — boosts global canvas brightness in hero zone */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(52,211,153,0.07) 0%, transparent 70%)",
            }}
          />

          {/* Gradient overlays */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #060d07 0%, rgba(6,13,7,0.55) 38%, rgba(6,13,7,0.08) 72%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 55%, rgba(22,163,74,0.13) 0%, transparent 60%)",
            }}
          />

          {/* Top ambient glow */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: "700px",
              height: "500px",
              background:
                "radial-gradient(ellipse, rgba(22,163,74,0.16) 0%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />

          {/* Hero content */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 sm:pb-28">
            <p
              className="a-up-1 text-[9px] sm:text-[10px] font-bold tracking-[0.32em] uppercase mb-5"
              style={{ color: "#34d399" }}
            >
              IEEE Power &amp; Energy Society · University of Moratuwa
            </p>

            <h1
              className="a-up-2 about-display leading-none text-white mb-6"
              style={{
                fontSize: "clamp(52px,8.5vw,108px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              About
              <br />
              <span
                className="heading-underline"
                style={{ color: "#6ee7b7", fontStyle: "italic" }}
              >
                IEEE PES
              </span>
            </h1>

            <p
              className="a-up-3 max-w-xl leading-relaxed"
              style={{
                fontSize: "clamp(14px,1.6vw,17px)",
                color: "rgba(255,255,255,0.55)",
                fontWeight: 300,
              }}
            >
              IEEE Power &amp; Energy Society Student Branch Chapter of
              University of Moratuwa — fostering innovation, leadership, and
              technological advancement in power engineering.
            </p>

            <div className="a-up-4 mt-10 flex items-center gap-5">
              <MagneticBtn href="/committees">Meet the Team →</MagneticBtn>
              <MagneticBtn href="/projects">Our Projects →</MagneticBtn>
            </div>

            {/* Decorative line */}
            <div className="mt-10 flex items-center gap-4 a-up-4">
              <div
                className="h-px w-14"
                style={{
                  background: "linear-gradient(90deg, #34d399, transparent)",
                }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#34d399" }}
              />
              <div
                className="h-px w-32"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
            </div>
          </div>

          {/* Scroll cue */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 a-up-4"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            <span className="text-[8px] tracking-[0.28em] uppercase">
              Scroll
            </span>
            <div className="overflow-hidden w-px h-10">
              <div
                style={{
                  width: "1px",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, #34d399, transparent)",
                  animation: "scrollTick 1.6s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </section>

        <style>{`
          @keyframes scrollTick {
            0%   { transform: translateY(-100%); opacity:1; }
            100% { transform: translateY(100%);  opacity:0; }
          }
        `}</style>

        {/* ══════════════════════════════════════════════
            ABOUT IEEE — text + animated stats
        ══════════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
          {/* Section header */}
          <div
            className="flex items-center gap-4 mb-14"
            data-reveal
            data-reveal-delay="0"
          >
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <span className="section-pill">About IEEE</span>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Text column */}
            <div>
              <h2
                className="about-display leading-tight text-white mb-6"
                data-reveal
                data-reveal-delay="60"
                style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 600 }}
              >
                The World's Largest
                <br />
                <span style={{ color: "#6ee7b7", fontStyle: "italic" }}>
                  Technical Organization
                </span>
              </h2>
              <p
                className="leading-relaxed mb-5"
                data-reveal
                data-reveal-delay="120"
                style={{
                  color: "rgba(255,255,255,0.52)",
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
                data-reveal
                data-reveal-delay="160"
                style={{
                  color: "rgba(255,255,255,0.38)",
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
            <div
              className="grid grid-cols-2 gap-3"
              data-reveal
              data-reveal-delay="80"
            >
              <StatCounter num={400000} suffix="+" label="Members worldwide" />
              <StatCounter num={160} suffix="+" label="Countries represented" />
              <StatCounter num={1884} suffix="" label="Year founded" />
              <StatCounter num={39} suffix="" label="Technical societies" />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div
          className="max-w-5xl mx-auto px-6 sm:px-10"
          style={{ height: "1px", background: "rgba(255,255,255,0.04)" }}
        />

        {/* ══════════════════════════════════════════════
            VISION & MISSION
        ══════════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
          <div className="flex items-center gap-4 mb-14" data-reveal>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <span className="section-pill">Vision &amp; Mission</span>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Vision */}
            <div
              className="vm-card relative rounded-2xl p-8 border overflow-hidden"
              data-reveal
              data-reveal-delay="60"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(52,211,153,0.15)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.28)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-36 h-36 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(52,211,153,0.1) 0%, transparent 70%)",
                }}
              />
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-6"
                style={{
                  background: "rgba(52,211,153,0.12)",
                  border: "1px solid rgba(52,211,153,0.3)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#34d399",
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
                style={{ background: "#34d399" }}
              />
              <p
                style={{
                  color: "rgba(255,255,255,0.52)",
                  fontSize: "15px",
                  fontStyle: "italic",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                Foster technological innovation and excellence for the benefit
                of humanity.
              </p>
            </div>

            {/* Mission */}
            <div
              className="vm-card relative rounded-2xl p-8 border overflow-hidden"
              data-reveal
              data-reveal-delay="160"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.28)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div
                className="absolute bottom-0 left-0 w-44 h-44 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at bottom left, rgba(52,211,153,0.07) 0%, transparent 70%)",
                }}
              />
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-6"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.45)",
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
                style={{ background: "rgba(255,255,255,0.18)" }}
              />
              <p
                style={{
                  color: "rgba(255,255,255,0.48)",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.85,
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
