// // import { FaEnvelope, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// // import ContactForm from "../components/ContactForm";

// // const CONTACT_CARDS = [
// //   {
// //     icon: <FaEnvelope />,
// //     title: "Mail Us",
// //     lines: [
// //       "IEEE PES Student Branch Chapter",
// //       "University of Moratuwa",
// //       "Moratuwa 10400, Sri Lanka",
// //     ],
// //   },
// //   {
// //     icon: <FaEnvelope />,
// //     title: "Email Us",
// //     lines: ["ieeepessbcuniversityofmoratuwa@gmail.com"],
// //     href: "mailto:ieeepessbcuniversityofmoratuwa@gmail.com",
// //     linkLabel: "Send an Email",
// //   },
// //   {
// //     icon: (
// //       <span className="flex gap-3 text-xl">
// //         <FaFacebookF />
// //         <FaLinkedinIn />
// //       </span>
// //     ),
// //     title: "Follow Us",
// //     lines: ["Stay connected on social media"],
// //     socials: [
// //       {
// //         href: "https://www.facebook.com/ieee.pes.sbc.uom",
// //         label: "Facebook",
// //         icon: <FaFacebookF />,
// //       },
// //       {
// //         href: "https://www.linkedin.com/company/ieee-pes-student-branch-chapter-of-university-of-moratuwa/",
// //         label: "LinkedIn",
// //         icon: <FaLinkedinIn />,
// //       },
// //     ],
// //   },
// // ];

// // export default function Contact() {
// //   return (
// //     <div>
// //       {/* ── Day 2: Gradient Hero ── */}
// //       <section
// //         className="relative flex items-center justify-center text-center overflow-hidden"
// //         style={{
// //           background: "linear-gradient(160deg, #1B5E20 0%, #0f172a 100%)",
// //           minHeight: "380px",
// //           paddingTop: "100px",
// //         }}
// //       >
// //         {/* Subtle decorative glow */}
// //         <div
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
// //           style={{
// //             width: "500px",
// //             height: "500px",
// //             background: "radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%)",
// //           }}
// //         />

// //         <div className="relative z-10 max-w-[700px] px-6">
// //           <h1
// //             className="font-bold tracking-tight text-white"
// //             style={{ fontSize: "clamp(28px, 5vw, 42px)" }}
// //           >
// //             Contact Us
// //           </h1>
// //           <p
// //             className="mt-4 leading-relaxed"
// //             style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(14px, 2.5vw, 17px)" }}
// //           >
// //             Get in touch with IEEE PES Student Branch Chapter of University of
// //             Moratuwa. We are here to assist you with any queries or information
// //             you need.
// //           </p>
// //         </div>
// //       </section>

// //       {/* ── Day 3: Contact Info Cards ── */}
// //       <section className="max-w-[1100px] mx-auto px-5 py-16">
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {CONTACT_CARDS.map((card, i) => (
// //             <div
// //               key={i}
// //               className="bg-white rounded-[14px] p-8 text-center flex flex-col items-center gap-4
// //                          transition-all duration-300 hover:-translate-y-1.5"
// //               style={{
// //                 boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
// //               }}
// //               onMouseEnter={(e) => {
// //                 (e.currentTarget as HTMLElement).style.boxShadow =
// //                   "0 14px 30px rgba(0,0,0,0.12)";
// //               }}
// //               onMouseLeave={(e) => {
// //                 (e.currentTarget as HTMLElement).style.boxShadow =
// //                   "0 8px 20px rgba(0,0,0,0.08)";
// //               }}
// //             >
// //               {/* Icon circle with flip animation */}
// //               <div
// //                 className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl contact-icon-flip"
// //                 style={{ background: "#2E7D32" }}
// //               >
// //                 {card.icon}
// //               </div>

// //               <h3 className="text-lg font-semibold">{card.title}</h3>

// //               {card.lines.map((line, j) => (
// //                 <p key={j} className="text-sm text-gray-500 leading-relaxed m-0">
// //                   {line}
// //                 </p>
// //               ))}

// //               {/* Email link */}
// //               {card.href && (
// //                 <a
// //                   href={card.href}
// //                   className="text-sm font-medium no-underline transition-colors duration-200"
// //                   style={{ color: "#2E7D32" }}
// //                   onMouseEnter={(e) => {
// //                     (e.currentTarget as HTMLElement).style.color = "#4CAF50";
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     (e.currentTarget as HTMLElement).style.color = "#2E7D32";
// //                   }}
// //                 >
// //                   {card.linkLabel}
// //                 </a>
// //               )}

// //               {/* Social links */}
// //               {card.socials && (
// //                 <div className="flex gap-3 mt-1">
// //                   {card.socials.map((s, k) => (
// //                     <a
// //                       key={k}
// //                       href={s.href}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       aria-label={s.label}
// //                       className="w-10 h-10 rounded-full flex items-center justify-center text-white
// //                                  transition-all duration-300 hover:scale-110"
// //                       style={{
// //                         background: "#2E7D32",
// //                         boxShadow: "0 2px 8px rgba(46,125,50,0.3)",
// //                       }}
// //                       onMouseEnter={(e) => {
// //                         (e.currentTarget as HTMLElement).style.boxShadow =
// //                           "0 4px 16px rgba(46,125,50,0.5)";
// //                       }}
// //                       onMouseLeave={(e) => {
// //                         (e.currentTarget as HTMLElement).style.boxShadow =
// //                           "0 2px 8px rgba(46,125,50,0.3)";
// //                       }}
// //                     >
// //                       {s.icon}
// //                     </a>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* ── Day 4: Contact Form ── */}
// //       <ContactForm />
// //     </div>
// //   );
// // }

// import {
//   FaEnvelope,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import ContactForm from "../components/ContactForm";

// const CONTACT_CARDS = [
//   {
//     Icon: FaMapMarkerAlt,
//     title: "Mail Us",
//     lines: [
//       "IEEE PES Student Branch Chapter",
//       "University of Moratuwa",
//       "Moratuwa 10400, Sri Lanka",
//     ],
//   },
//   {
//     Icon: FaEnvelope,
//     title: "Email Us",
//     lines: ["ieeepessbcuniversityofmoratuwa@gmail.com"],
//     href: "mailto:ieeepessbcuniversityofmoratuwa@gmail.com",
//     linkLabel: "Send an Email",
//   },
//   {
//     Icon: FaFacebookF,
//     title: "Follow Us",
//     lines: ["Stay connected on social media"],
//     socials: [
//       {
//         href: "https://www.facebook.com/ieee.pes.sbc.uom",
//         label: "Facebook",
//         Icon: FaFacebookF,
//       },
//       {
//         href: "https://www.linkedin.com/company/ieee-pes-student-branch-chapter-of-university-of-moratuwa/",
//         label: "LinkedIn",
//         Icon: FaLinkedinIn,
//       },
//     ],
//   },
// ];

// export default function Contact() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

//         .contact-root { font-family: 'Outfit', sans-serif; background: #060d07; }
//         .contact-display { font-family: 'Cormorant Garamond', serif; }

//         @keyframes cUp {
//           from { opacity:0; transform:translateY(20px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .c-up-1 { animation: cUp 0.55s ease 0.05s both; }
//         .c-up-2 { animation: cUp 0.55s ease 0.18s both; }
//         .c-up-3 { animation: cUp 0.55s ease 0.32s both; }

//         .contact-card {
//           transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
//         }
//         .contact-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 32px 72px rgba(0,0,0,0.5), 0 0 0 1px rgba(52,211,153,0.25) !important;
//           border-color: rgba(52,211,153,0.25) !important;
//         }

//         .social-btn {
//           transition: all 0.25s ease;
//         }
//         .social-btn:hover {
//           transform: scale(1.1);
//           box-shadow: 0 0 20px rgba(52,211,153,0.3) !important;
//         }

//         .contact-icon-ring {
//           transition: all 0.3s ease;
//         }
//         .contact-card:hover .contact-icon-ring {
//           background: rgba(52,211,153,0.15) !important;
//           border-color: rgba(52,211,153,0.4) !important;
//           color: #34d399 !important;
//         }
//       `}</style>

//       <div className="contact-root min-h-screen mt-12 lg:mt-0">
//         {/* ── Hero ──────────────────────────────────────────────────────── */}
//         <section
//           className="relative flex items-end overflow-hidden"
//           style={{ minHeight: "52vh", paddingBottom: "80px" }}
//         >
//           {/* Ambient glows */}
//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background: `
//                 radial-gradient(ellipse at 50% 0%, rgba(22,163,74,0.16) 0%, transparent 55%),
//                 linear-gradient(to bottom, #060d07 0%, #060d07 100%)
//               `,
//             }}
//           />
//           <div
//             className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
//             style={{
//               background:
//                 "radial-gradient(ellipse, rgba(22,163,74,0.18) 0%, transparent 70%)",
//               filter: "blur(80px)",
//             }}
//           />

//           {/* Subtle horizontal rule grid lines */}
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute left-0 right-0 pointer-events-none"
//               style={{
//                 top: `${(i + 1) * 22}%`,
//                 height: "1px",
//                 background: "rgba(255,255,255,0.025)",
//               }}
//             />
//           ))}

//           {/* Content */}
//           <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
//             <p
//               className="c-up-1 text-[10px] font-bold tracking-[0.3em] uppercase mb-5"
//               style={{ color: "#34d399" }}
//             >
//               IEEE PES SBC · University of Moratuwa
//             </p>
//             <h1
//               className="contact-display c-up-2 text-white leading-none mb-6"
//               style={{
//                 fontSize: "clamp(52px,8vw,96px)",
//                 fontWeight: 600,
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               Contact
//               <br />
//               <span style={{ color: "#6ee7b7", fontStyle: "italic" }}>Us</span>
//             </h1>
//             <p
//               className="c-up-3 max-w-lg leading-relaxed"
//               style={{
//                 color: "rgba(255,255,255,0.5)",
//                 fontSize: "15px",
//                 fontWeight: 300,
//               }}
//             >
//               Get in touch with IEEE PES Student Branch Chapter of University of
//               Moratuwa. We're here to assist you with any queries or
//               information.
//             </p>
//             <div className="mt-8 flex items-center gap-3">
//               <div
//                 className="h-px w-14"
//                 style={{
//                   background: "linear-gradient(90deg, #34d399, transparent)",
//                 }}
//               />
//               <div
//                 className="w-1.5 h-1.5 rounded-full"
//                 style={{ background: "#34d399" }}
//               />
//               <div
//                 className="h-px w-28"
//                 style={{ background: "rgba(255,255,255,0.07)" }}
//               />
//             </div>
//           </div>
//         </section>

//         {/* ── Contact Cards ─────────────────────────────────────────────── */}
//         <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20">
//           {/* Section label */}
//           <div className="flex items-center gap-4 mb-10">
//             <div
//               className="h-px flex-1"
//               style={{ background: "rgba(255,255,255,0.05)" }}
//             />
//             <span
//               className="text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border"
//               style={{
//                 background: "rgba(52,211,153,0.08)",
//                 borderColor: "rgba(52,211,153,0.25)",
//                 color: "#6ee7b7",
//               }}
//             >
//               Get in touch
//             </span>
//             <div
//               className="h-px flex-1"
//               style={{ background: "rgba(255,255,255,0.05)" }}
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {CONTACT_CARDS.map((card, i) => (
//               <div
//                 key={i}
//                 className="contact-card relative flex flex-col gap-5 rounded-2xl p-7 border overflow-hidden"
//                 style={{
//                   background: "rgba(255,255,255,0.03)",
//                   borderColor: "rgba(255,255,255,0.07)",
//                   boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
//                   backdropFilter: "blur(16px)",
//                 }}
//               >
//                 {/* Corner glow */}
//                 <div
//                   className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
//                   style={{
//                     background:
//                       "radial-gradient(ellipse at top right, rgba(52,211,153,0.07) 0%, transparent 70%)",
//                   }}
//                 />

//                 {/* Icon */}
//                 <div
//                   className="contact-icon-ring w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0"
//                   style={{
//                     background: "rgba(255,255,255,0.05)",
//                     borderColor: "rgba(255,255,255,0.10)",
//                     color: "rgba(255,255,255,0.5)",
//                     fontSize: "16px",
//                   }}
//                 >
//                   <card.Icon />
//                 </div>

//                 {/* Title */}
//                 <div>
//                   <p
//                     className="text-[9px] font-bold tracking-[0.22em] uppercase mb-2"
//                     style={{ color: "#34d399" }}
//                   >
//                     {card.title}
//                   </p>
//                   {card.lines.map((line, j) => (
//                     <p
//                       key={j}
//                       className="text-sm leading-relaxed"
//                       style={{
//                         color: "rgba(255,255,255,0.5)",
//                         fontWeight: 300,
//                       }}
//                     >
//                       {line}
//                     </p>
//                   ))}
//                 </div>

//                 {/* Email link */}
//                 {card.href && (
//                   <a
//                     href={card.href}
//                     className="inline-flex items-center gap-2 text-sm font-semibold"
//                     style={{ color: "#34d399", textDecoration: "none" }}
//                   >
//                     <span>{card.linkLabel}</span>
//                     <span style={{ fontSize: "10px" }}>→</span>
//                   </a>
//                 )}

//                 {/* Socials */}
//                 {card.socials && (
//                   <div className="flex gap-3">
//                     {card.socials.map((s, k) => (
//                       <a
//                         key={k}
//                         href={s.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label={s.label}
//                         className="social-btn w-10 h-10 rounded-xl flex items-center justify-center border text-white"
//                         style={{
//                           background: "rgba(52,211,153,0.10)",
//                           borderColor: "rgba(52,211,153,0.28)",
//                           color: "#34d399",
//                           fontSize: "14px",
//                         }}
//                       >
//                         <s.Icon />
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── Divider ───────────────────────────────────────────────────── */}
//         <div
//           className="max-w-5xl mx-auto px-6 sm:px-10"
//           style={{ height: "1px", background: "rgba(255,255,255,0.05)" }}
//         />

//         {/* ── Contact Form ──────────────────────────────────────────────── */}
//         <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
//           <div className="flex items-center gap-4 mb-12">
//             <div
//               className="h-px flex-1"
//               style={{ background: "rgba(255,255,255,0.05)" }}
//             />
//             <span
//               className="text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border"
//               style={{
//                 background: "rgba(52,211,153,0.08)",
//                 borderColor: "rgba(52,211,153,0.25)",
//                 color: "#6ee7b7",
//               }}
//             >
//               Send a message
//             </span>
//             <div
//               className="h-px flex-1"
//               style={{ background: "rgba(255,255,255,0.05)" }}
//             />
//           </div>
//           <ContactForm />
//         </section>
//       </div>
//     </>
//   );
// }

import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ContactForm from "../components/ContactForm";

const CONTACT_CARDS = [
  {
    Icon: FaMapMarkerAlt,
    title: "Mail Us",
    lines: [
      "IEEE PES Student Branch Chapter",
      "University of Moratuwa",
      "Moratuwa 10400, Sri Lanka",
    ],
  },
  {
    Icon: FaEnvelope,
    title: "Email Us",
    lines: ["ieeepessbcuniversityofmoratuwa@gmail.com"],
    href: "mailto:ieeepessbcuniversityofmoratuwa@gmail.com",
    linkLabel: "Send an Email",
  },
  {
    Icon: FaFacebookF,
    title: "Follow Us",
    lines: ["Stay connected on social media"],
    socials: [
      {
        href: "https://www.facebook.com/ieee.pes.sbc.uom",
        label: "Facebook",
        Icon: FaFacebookF,
      },
      {
        href: "https://www.linkedin.com/company/ieee-pes-student-branch-chapter-of-university-of-moratuwa/",
        label: "LinkedIn",
        Icon: FaLinkedinIn,
      },
    ],
  },
];

export default function Contact() {
  const revealRef = useScrollReveal();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

        .contact-root  { font-family: 'Outfit', sans-serif; background: #060d07; }
        .contact-serif { font-family: 'Cormorant Garamond', serif; }

        [data-reveal] {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
                      transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        [data-reveal].sr-visible { opacity:1; transform:translateY(0); }

        @keyframes cUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .c-up-1 { animation: cUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .c-up-2 { animation: cUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.20s both; }
        .c-up-3 { animation: cUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.35s both; }
        .c-up-4 { animation: cUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.50s both; }

        /* Info card */
        .c-info-card {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s ease, border-color 0.4s ease, background 0.4s ease;
        }
        .c-info-card:hover {
          transform: translateY(-7px);
          background: rgba(255,255,255,0.055) !important;
          border-color: rgba(52,211,153,0.28) !important;
          box-shadow: 0 36px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(52,211,153,0.18) !important;
        }
        .c-info-card:hover .c-icon-box {
          background: rgba(52,211,153,0.15) !important;
          border-color: rgba(52,211,153,0.4) !important;
          color: #34d399 !important;
        }
        .c-icon-box { transition: all 0.35s ease; }

        /* Social hover */
        .c-social {
          transition: all 0.25s ease;
        }
        .c-social:hover {
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 8px 24px rgba(52,211,153,0.3) !important;
          border-color: rgba(52,211,153,0.6) !important;
          background: rgba(52,211,153,0.22) !important;
        }

        /* Section pill */
        .c-pill {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase;
          padding: 5px 16px; border-radius: 999px;
          background: rgba(52,211,153,0.08); border: 1px solid rgba(52,211,153,0.25); color: #6ee7b7;
        }

        /* Scanning grid lines on hero */
        @keyframes scanLine {
          from { transform: translateY(-100%); opacity: 0.4; }
          to   { transform: translateY(100vh);  opacity: 0; }
        }
        .scan-line {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(52,211,153,0.4), transparent);
          pointer-events: none;
          animation: scanLine 4s linear infinite;
        }
      `}</style>

      <div className="contact-root min-h-screen mt-12 lg:mt-0" ref={revealRef}>
        {/* ══ Hero ══════════════════════════════════════════════════════ */}
        <section
          className="relative flex items-end overflow-hidden mt-20"
          style={{ minHeight: "54vh", paddingBottom: "80px" }}
        >
          {/* Ambient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(22,163,74,0.16) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: "700px",
              height: "500px",
              background:
                "radial-gradient(ellipse, rgba(22,163,74,0.18) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* Scanning line — surveillance/energy grid metaphor */}
          <div className="scan-line" style={{ animationDelay: "0s" }} />
          <div className="scan-line" style={{ animationDelay: "2s" }} />

          {/* Horizontal grid */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                top: `${(i + 1) * 18}%`,
                height: "1px",
                background: "rgba(255,255,255,0.022)",
              }}
            />
          ))}

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
            <p
              className="c-up-1 text-[9px] sm:text-[10px] font-bold tracking-[0.32em] uppercase mb-5"
              style={{ color: "#34d399" }}
            >
              IEEE Power &amp; Energy Society · University of Moratuwa
            </p>
            <h1
              className="contact-serif c-up-2 text-white leading-none mb-6"
              style={{
                fontSize: "clamp(52px,8vw,100px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Contact
              <br />
              <span style={{ color: "#6ee7b7", fontStyle: "italic" }}>Us</span>
            </h1>
            <p
              className="c-up-3 max-w-lg leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.48)",
                fontSize: "15px",
                fontWeight: 300,
              }}
            >
              Get in touch with IEEE PES Student Branch Chapter of University of
              Moratuwa. We're here to assist you with any queries or
              information.
            </p>
            <div className="c-up-4 mt-8 flex items-center gap-3">
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
                className="h-px w-28"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
            </div>
          </div>
        </section>

        {/* ══ Info cards ════════════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-14 sm:pb-18">
          <div className="flex items-center gap-4 mb-10" data-reveal>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <span className="c-pill">Get in touch</span>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CONTACT_CARDS.map((card, i) => (
              <div
                key={i}
                className="c-info-card relative flex flex-col gap-5 rounded-2xl p-7 border overflow-hidden"
                data-reveal
                data-reveal-delay={`${i * 90}`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.07)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.28)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at top right, rgba(52,211,153,0.06) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="c-icon-box w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.09)",
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "16px",
                  }}
                >
                  <card.Icon />
                </div>
                <div>
                  <p
                    className="text-[9px] font-bold tracking-[0.22em] uppercase mb-2"
                    style={{ color: "#34d399" }}
                  >
                    {card.title}
                  </p>
                  {card.lines.map((l, j) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed"
                      style={{
                        color: "rgba(255,255,255,0.48)",
                        fontWeight: 300,
                      }}
                    >
                      {l}
                    </p>
                  ))}
                </div>
                {card.href && (
                  <a
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "#34d399", textDecoration: "none" }}
                  >
                    {card.linkLabel} <span>→</span>
                  </a>
                )}
                {card.socials && (
                  <div className="flex gap-3">
                    {card.socials.map((s, k) => (
                      <a
                        key={k}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="c-social w-10 h-10 rounded-xl flex items-center justify-center border"
                        style={{
                          background: "rgba(52,211,153,0.09)",
                          borderColor: "rgba(52,211,153,0.25)",
                          color: "#34d399",
                          fontSize: "14px",
                          textDecoration: "none",
                        }}
                      >
                        <s.Icon />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div
          className="max-w-5xl mx-auto px-6 sm:px-10"
          style={{ height: "1px", background: "rgba(255,255,255,0.05)" }}
        />

        {/* ══ Contact Form ══════════════════════════════════════════════ */}
        <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
          <div className="flex items-center gap-4 mb-12" data-reveal>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <span className="c-pill">
              <FaPaperPlane size={9} /> Send a message
            </span>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>
          <div data-reveal data-reveal-delay="80">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
