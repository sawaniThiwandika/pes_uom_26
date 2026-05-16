// import { useState } from "react";
// import {
//   FaBullhorn,
//   FaCalendarAlt,
//   FaChartLine,
//   FaCode,
//   FaFeatherAlt,
//   FaPalette,
//   FaShieldAlt,
//   FaChevronDown,
//   FaHistory,
// } from "react-icons/fa";
// import MemberCard from "../components/MemberCard";
// import FormerMemberCard, {
//   type FormerMemberCardProps,
// } from "../components/FormerMemberCard";
// import advisor from "../assets/Advisor.webp";
// import kavishka from "/committee/kavishka.webp";
// import nadun from "/committee/nadun.webp";
// import saneru from "/committee/saneru.webp";
// import lasindu from "/committee/lasindu.webp";
// import ishan from "/committee/ishan.webp";
// import vidura from "/committee/vidura.webp";
// import dulsika from "/committee/dulsika.webp";
// import mahesha from "/committee/mahesha.webp";
// import pabasara from "/committee/pabasara.webp";
// import shakya from "/committee/shakya.webp";
// import seynath from "/committee/seynath.webp";
// import vihanga from "/committee/vihanga.webp";
// import hasitha from "/committee/hasitha.webp";
// import anupa from "/committee/anupa.webp";
// import kivira from "/committee/kivira.webp";
// import chamix from "/committee/chamix.webp";
// import easha from "/committee/easha.webp";
// import achintha from "/committee/achintha.webp";
// import dilini from "/committee/dilni.webp";
// import thuvarahan from "/committee/thuvarahan.webp";
// import thisul from "/committee/thisul.webp";
// import shalani from "/committee/shalani.webp";
// import vindya from "/committee/vindya.webp";
// import harshani from "/committee/harshani.webp";
// import dulasha from "/committee/dulasha.webp";
// import raveesha from "/committee/raveesha.webp";
// import charithma from "/committee/charithma.webp";
// import okindu from "/committee/okindu.webp";
// import sawani from "/committee/sawani.webp";
// import chanupa from "/committee/chanupa.webp";
// import madhuwantha from "/committee/madhuwantha.webp";

// // ─── Former Committee Data ────────────────────────────────────────────────────
// // TODO: Replace placeholder images with actual photos for each former member.
// // Import the actual images at the top of this file and update the `image` fields.

// interface FormerYear {
//   year: string;
//   members: FormerMemberCardProps[];
// }

// const formerCommittees: FormerYear[] = [
//   {
//     year: "2024/25",
//     members: [
//       {
//         name: "Former Chairman", // TODO: Replace with actual name
//         role: "Chairman",
//         image: kavishka, // TODO: Replace with actual image import
//         email: "chairman2425@ieee.org", // TODO: Replace with actual email
//         linkedin: "https://linkedin.com", // TODO: Replace with actual LinkedIn URL
//       },
//       {
//         name: "Former Vice Chairman",
//         role: "Vice Chairman",
//         image: nadun,
//         email: "vicechairman2425@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//       {
//         name: "Former Secretary",
//         role: "Secretary",
//         image: saneru,
//         email: "secretary2425@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//       {
//         name: "Former Treasurer",
//         role: "Treasurer",
//         image: lasindu,
//         email: "treasurer2425@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//       {
//         name: "Former Webmaster",
//         role: "Webmaster",
//         image: ishan,
//         email: "webmaster2425@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//     ],
//   },
//   {
//     year: "2023/24",
//     members: [
//       {
//         name: "Former Chairman",
//         role: "Chairman",
//         image: kavishka,
//         email: "chairman2324@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//       {
//         name: "Former Vice Chairman",
//         role: "Vice Chairman",
//         image: nadun,
//         email: "vicechairman2324@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//       {
//         name: "Former Secretary",
//         role: "Secretary",
//         image: saneru,
//         email: "secretary2324@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//       {
//         name: "Former Treasurer",
//         role: "Treasurer",
//         image: lasindu,
//         email: "treasurer2324@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//       {
//         name: "Former Webmaster",
//         role: "Webmaster",
//         image: ishan,
//         email: "webmaster2324@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//     ],
//   },
//   {
//     year: "2022/23",
//     members: [
//       {
//         name: "Former Chairman",
//         role: "Chairman",
//         image: kavishka,
//         email: "chairman2223@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//       {
//         name: "Former Vice Chairman",
//         role: "Vice Chairman",
//         image: nadun,
//         email: "vicechairman2223@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//       {
//         name: "Former Secretary",
//         role: "Secretary",
//         image: saneru,
//         email: "secretary2223@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//       {
//         name: "Former Treasurer",
//         role: "Treasurer",
//         image: lasindu,
//         email: "treasurer2223@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//       {
//         name: "Former Webmaster",
//         role: "Webmaster",
//         image: ishan,
//         email: "webmaster2223@ieee.org",
//         linkedin: "https://linkedin.com",
//       },
//     ],
//   },
// ];

// // ─── Component ────────────────────────────────────────────────────────────────

// export default function Committees() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [activeFormerYear, setActiveFormerYear] = useState(0);
//   const [showFormerCommittee, setShowFormerCommittee] = useState(false);

//   const committees = [
//     {
//       title: "Executive Committee",
//       Icon: FaShieldAlt,
//       members: [
//         {
//           name: "Kavishka Lakshan",
//           role: "Chairman",
//           image: kavishka,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Nadun Walaketiya",
//           role: "Vice Chairman",
//           image: nadun,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Saneru Weerasinghe",
//           role: "Secretary",
//           image: saneru,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Lasindu Shaluka",
//           role: "Treasurer",
//           image: lasindu,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Ishan Sasnaka",
//           role: "Webmaster",
//           image: ishan,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//       ],
//     },
//     {
//       title: "Public Relations",
//       Icon: FaBullhorn,
//       members: [
//         {
//           name: "Vidura Jayawardhene",
//           role: "Lead",
//           image: vidura,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Dulsika Mendis",
//           role: "Member",
//           image: dulsika,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Mahesha Weerasinghe",
//           role: "Member",
//           image: mahesha,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//       ],
//     },
//     {
//       title: "Organizing",
//       Icon: FaCalendarAlt,
//       members: [
//         {
//           name: "Pabasara Piyumal",
//           role: "Lead",
//           image: pabasara,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Shakya Marasingha",
//           role: "Member",
//           image: shakya,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Seynath Chathwara Suraweera",
//           role: "Member",
//           image: seynath,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Sembakuttige Vihanga Kaushal",
//           role: "Member",
//           image: vihanga,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Hasitha Rupasinghe",
//           role: "Member",
//           image: hasitha,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "P.K. Anupa Minojitha",
//           role: "Member",
//           image: anupa,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Kivira Vehan Gammaddegoda",
//           role: "Member",
//           image: kivira,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//       ],
//     },
//     {
//       title: "Creative Design",
//       Icon: FaPalette,
//       members: [
//         {
//           name: "Chamiru Gajasinghe",
//           role: "Lead",
//           image: chamix,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Easha Wanniarachchi",
//           role: "Member",
//           image: easha,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Achintha Niroshan",
//           role: "Member",
//           image: achintha,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Dilni Nimanya Muthukuda",
//           role: "Member",
//           image: dilini,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Thuvarahan Thayalan",
//           role: "Member",
//           image: thuvarahan,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "B.G. Thisul Dulneth",
//           role: "Member",
//           image: thisul,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//       ],
//     },
//     {
//       title: "Editorial",
//       Icon: FaFeatherAlt,
//       members: [
//         {
//           name: "Shalani Ambalangodage",
//           role: "Lead",
//           image: shalani,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Vindya Nilushika",
//           role: "Member",
//           image: vindya,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Harshani Lakmali",
//           role: "Member",
//           image: harshani,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Dulasha Perera",
//           role: "Member",
//           image: dulasha,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Raveesha Samarasinghe",
//           role: "Member",
//           image: raveesha,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//       ],
//     },
//     {
//       title: "Finance",
//       Icon: FaChartLine,
//       members: [
//         {
//           name: "Charithma Dewmi",
//           role: "Lead",
//           image: charithma,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Okindu Fernando",
//           role: "Member",
//           image: okindu,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//       ],
//     },
//     {
//       title: "Web Development",
//       Icon: FaCode,
//       members: [
//         {
//           name: "Sawani Thiwandika",
//           role: "Lead",
//           image: sawani,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Chanupa Hansaja Vithanage",
//           role: "Member",
//           image: chanupa,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//         {
//           name: "Madhuwantha Dissanayaka",
//           role: "Member",
//           image: madhuwantha,
//           email: "ieeepessbcuniversityofmoratuwa@gmail.com",
//           linkedin: "https://linkedin.com",
//         },
//       ],
//     },
//   ];

//   const current = committees[activeTab];
//   const lead = current.members.find((member) => member.role === "Lead");
//   const members = current.members.filter((member) => member.role !== "Lead");

//   return (
//     <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8fbf7] to-[#eef5ef] px-4 sm:px-8 lg:px-28 py-10 sm:py-24 md:py-32 mt-12 lg:mt-0">
//       {/* Background Gradient Decorations */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-10 left-[15%] w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(46,125,50,0.08)_0%,transparent_70%)] blur-3xl" />
//         <div className="absolute top-20 right-[15%] w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(27,94,32,0.06)_0%,transparent_70%)] blur-3xl" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Page Title */}
//         <h1 className="text-center text-3xl sm:text-4xl lg:text-6xl font-serif text-[#0f1f12] mb-4 sm:mb-6 lg:mb-8">
//           Committees
//         </h1>

//         {/* Committee Tab Buttons */}
//         <div className="flex flex-wrap justify-center gap-2 lg:gap-2.5 w-full max-w-4xl mx-auto mb-6 sm:mb-12 lg:mb-14">
//           {/* Desktop layout */}
//           <div className="hidden md:flex flex-wrap justify-center gap-2.5 w-full">
//             {committees.map((committee, index) => (
//               <button
//                 key={committee.title}
//                 onClick={() => setActiveTab(index)}
//                 className={`flex items-center justify-center gap-2 min-h-11 px-3.5 py-2.5 border-0 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
//                   activeTab === index
//                     ? "bg-[#1b6b25] text-white shadow-[0_18px_38px_rgba(27,107,37,0.28)]"
//                     : "bg-white text-[#172017] shadow-[0_10px_24px_rgba(15,23,42,0.1)] hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,23,42,0.14)]"
//                 }`}
//                 type="button"
//               >
//                 <span
//                   className={`flex items-center justify-center w-7 h-7 rounded-full text-sm ${
//                     activeTab === index
//                       ? "bg-white/18 text-white"
//                       : "bg-[#e9f0e6] text-[#172017]"
//                   }`}
//                 >
//                   <committee.Icon />
//                 </span>
//                 <span>{committee.title}</span>
//               </button>
//             ))}
//           </div>

//           {/* Mobile layout — single scrollable row */}
//           <div
//             className="md:hidden flex gap-2 overflow-x-auto w-full pb-1"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             <style>{`
//               .tab-scroll-row::-webkit-scrollbar { display: none; }
//             `}</style>
//             <div
//               className="tab-scroll-row flex gap-2 px-1 w-full overflow-x-auto"
//               style={{ scrollbarWidth: "none" }}
//             >
//               {committees.map((committee, index) => (
//                 <button
//                   key={committee.title}
//                   onClick={() => setActiveTab(index)}
//                   className={`flex items-center gap-1.5 h-9 px-3 py-1.5 border-0 rounded-full font-semibold text-xs transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
//                     activeTab === index
//                       ? "bg-[#1b6b25] text-white shadow-[0_8px_20px_rgba(27,107,37,0.28)]"
//                       : "bg-white text-[#172017] shadow-[0_4px_12px_rgba(15,23,42,0.1)]"
//                   }`}
//                   type="button"
//                 >
//                   <span
//                     className={`flex items-center justify-center w-5 h-5 rounded-full text-xs flex-shrink-0 ${
//                       activeTab === index
//                         ? "bg-white/20 text-white"
//                         : "bg-[#e9f0e6] text-[#172017]"
//                     }`}
//                   >
//                     <committee.Icon />
//                   </span>
//                   <span>{committee.title}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ── Advisor Card (only on Executive Committee tab) ── */}
//         {activeTab === 0 && (
//           <section className="text-center mb-8 sm:mb-8 lg:mb-8">
//             {/* ─ Mobile: horizontal compact card (visible below sm) ─ */}
//             <div className="sm:hidden max-w-xs mx-auto bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.09)] overflow-hidden border border-[#e9f0e6]">
//               <div className="flex items-stretch gap-0">
//                 {/* Portrait image — fixed width, full height */}
//                 <div className="relative w-28 flex-shrink-0">
//                   <img
//                     src={advisor}
//                     alt="Advisor"
//                     className="w-full h-full object-cover object-top"
//                     style={{ minHeight: "9rem" }}
//                   />
//                   {/* Subtle green tint overlay on bottom */}
//                   <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#1b6b25]/20 to-transparent" />
//                 </div>

//                 {/* Details panel */}
//                 <div className="flex-1 flex flex-col justify-center gap-0.5 px-3 py-3 text-center">
//                   <p className="text-[10px] font-semibold text-[#1b6b25] uppercase tracking-widest mb-1">
//                     Chapter Advisor
//                   </p>
//                   <h3 className="text-sm font-bold text-[#0f1f12] leading-snug mb-1.5">
//                     Mrs. K.A.T. Lasagani
//                   </h3>

//                   <div className="space-y-0.5">
//                     <p className="text-[11px] text-gray-600 font-medium">
//                       B.Sc (Moratuwa)
//                     </p>
//                     <p className="text-[11px] text-gray-600 font-medium">
//                       M.Eng. (Canada)
//                     </p>
//                     <p className="text-[11px] text-gray-600 font-medium">
//                       P.Eng. (ON, Canada)
//                     </p>
//                   </div>

//                   <div className="mt-2 pt-2 border-t border-gray-100 space-y-0.5">
//                     <p className="text-[11px] text-gray-700">
//                       Senior Lecturer Gr. II
//                     </p>
//                     <p className="text-[11px] text-gray-500">
//                       Dept. of Electrical Engineering
//                     </p>
//                     <p className="text-[11px] text-gray-500">
//                       University of Moratuwa
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ─ Desktop/tablet: original vertical card (hidden below sm) ─ */}
//             <div className="hidden sm:block">
//               <div className="w-full max-w-xs h-80 bg-gradient-to-br from-white to-gray-100 rounded-3xl flex flex-col items-center justify-center p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-350 relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] mx-auto">
//                 <div
//                   className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
//                   style={{
//                     background:
//                       "linear-gradient(120deg, #2E7D32, transparent, #2E7D32)",
//                     padding: "2px",
//                     WebkitMask:
//                       "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                     WebkitMaskComposite: "xor",
//                     maskComposite: "exclude",
//                   }}
//                 />
//                 <div className="flex flex-col items-center gap-4">
//                   <div className="relative">
//                     <div className="relative w-40 h-52 rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(46,125,50,0.2)] transition-transform duration-300 group-hover:scale-105">
//                       <img
//                         src={advisor}
//                         alt="Advisor"
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
//                         <div className="space-y-1.5">
//                           <p className="text-xs text-white leading-relaxed font-medium">
//                             B.Sc (Moratuwa), M.Eng. (Canada)
//                           </p>
//                           <p className="text-xs text-white leading-relaxed font-medium">
//                             P.Eng. (ON, Canada)
//                           </p>
//                           <hr className="border-white/30 my-1.5" />
//                           <p className="text-xs text-white leading-relaxed">
//                             Senior Lecturer Gr. II
//                           </p>
//                           <p className="text-xs text-white/90 leading-relaxed">
//                             Department of Electrical Engineering
//                           </p>
//                           <p className="text-xs text-white/90 leading-relaxed">
//                             University of Moratuwa
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-center space-y-1.5">
//                   <h3 className="text-lg lg:text-xl font-bold text-[#0f1f12]">
//                     Mrs. K.A.T. Lasagani
//                   </h3>
//                   <p className="text-xs lg:text-sm font-semibold text-[#1b6b25] tracking-wide">
//                     IEEE PES CHAPTER ADVISOR
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* ── Current Member Cards ── */}
//         {current.title === "Executive Committee" ? (
//           <>
//             <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8 lg:mb-8">
//               <MemberCard {...current.members[0]} />
//               <MemberCard {...current.members[1]} />
//             </div>
//             <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
//               {current.members.slice(2).map((member) => (
//                 <MemberCard key={member.name} {...member} />
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             {lead && (
//               <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8 lg:mb-10">
//                 <MemberCard {...lead} />
//               </div>
//             )}
//             <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
//               {members.map((member) => (
//                 <MemberCard key={member.name} {...member} />
//               ))}
//             </div>
//           </>
//         )}

//         {/* ── Former Executive Committee toggle + section (only on ExCom tab) ── */}
//         {activeTab === 0 && (
//           <section className="mt-8 sm:mt-16 lg:mt-20">
//             {/* Toggle button */}
//             <button
//               type="button"
//               onClick={() => setShowFormerCommittee((v) => !v)}
//               className="flex items-center justify-between gap-3 w-full max-w-md mx-auto px-5 py-3.5 rounded-2xl bg-white border border-[#2E7D32]/15 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(27,107,37,0.12)] hover:border-[#2E7D32]/30 transition-all duration-300 group"
//             >
//               <div className="flex items-center gap-2.5">
//                 <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e9f0e6] text-[#1b6b25] group-hover:bg-[#1b6b25] group-hover:text-white transition-colors duration-300">
//                   <FaHistory size={13} />
//                 </span>
//                 <span className="text-sm font-semibold text-[#0f1f12]">
//                   Former Executive Committee
//                 </span>
//               </div>
//               <FaChevronDown
//                 size={12}
//                 className={`text-[#1b6b25] transition-transform duration-300 ${
//                   showFormerCommittee ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Collapsible content */}
//             {showFormerCommittee && (
//               <div className="mt-4 sm:mt-6">
//                 {/* Subtle divider */}
//                 <div className="flex items-center gap-3 mb-4 sm:mb-7">
//                   <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#2E7D32]/20" />
//                   <div className="flex gap-1.5">
//                     {formerCommittees.map((yearGroup, index) => (
//                       <button
//                         key={yearGroup.year}
//                         onClick={() => setActiveFormerYear(index)}
//                         type="button"
//                         className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
//                           activeFormerYear === index
//                             ? "bg-[#1b6b25] text-white shadow-[0_6px_16px_rgba(27,107,37,0.22)]"
//                             : "bg-white text-[#4a6b4e] shadow-[0_2px_8px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(15,23,42,0.12)]"
//                         }`}
//                       >
//                         {yearGroup.year}
//                       </button>
//                     ))}
//                   </div>
//                   <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2E7D32]/20" />
//                 </div>

//                 {/* Former member cards grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
//                   {formerCommittees[activeFormerYear].members.map((member) => (
//                     <FormerMemberCard
//                       key={`${member.name}-${member.role}`}
//                       {...member}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </section>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState, useRef, useEffect } from "react";
import {
  FaShieldAlt,
  FaChevronDown,
  FaHistory,
} from "react-icons/fa";
import MemberCard from "../components/MemberCard";
import FormerMemberCard from "../components/FormerMemberCard";
import advisor from "../assets/Advisor.webp";

import { formerCommittees } from "../data/formerCommitteeData";
import { committees } from "../data/committeeData";



/* ── Circuit-board tile tab selector ──────────────────────────────── */
function CircuitTabs({
  committees,
  activeTab,
  setActiveTab,
}: {
  committees: { title: string; Icon: React.ElementType; short: string }[];
  activeTab: number;
  setActiveTab: (i: number) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll active tile into view on mobile
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const active = container.children[activeTab] as HTMLElement;
    if (active)
      active.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
  }, [activeTab]);

  return (
    <>
      {/* ── DESKTOP: circuit tile grid ── */}
      <div className="hidden md:flex justify-center">
        <div className="relative">
          {/* PCB trace background — horizontal lines connecting tiles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Horizontal trace through centre */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "5%",
                right: "5%",
                height: "1px",
                transform: "translateY(-50%)",
                background:
                  "linear-gradient(90deg, transparent, rgba(52,211,153,0.18) 10%, rgba(52,211,153,0.18) 90%, transparent)",
              }}
            />
          </div>

          <div className="flex items-center gap-0">
            {committees.map((c, i) => {
              const isActive = activeTab === i;
              return (
                <div key={c.title} className="relative flex items-center">
                  {/* Trace segment between tiles */}
                  {i > 0 && (
                    <div
                      style={{
                        width: "24px",
                        height: "1px",
                        background:
                          isActive || activeTab === i - 1
                            ? "rgba(52,211,153,0.55)"
                            : "rgba(52,211,153,0.12)",
                        transition: "background 0.35s ease",
                        flexShrink: 0,
                      }}
                    />
                  )}

                  {/* Tile */}
                  <button
                    type="button"
                    onClick={() => setActiveTab(i)}
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "7px",
                      width: isActive ? "88px" : "72px",
                      height: isActive ? "88px" : "72px",
                      borderRadius: "14px",
                      border: `1px solid ${isActive ? "rgba(52,211,153,0.55)" : "rgba(255,255,255,0.08)"}`,
                      background: isActive
                        ? "rgba(52,211,153,0.12)"
                        : "rgba(255,255,255,0.03)",
                      color: isActive ? "#6ee7b7" : "#6b7280",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                      boxShadow: isActive
                        ? "0 0 24px rgba(52,211,153,0.2), 0 0 0 1px rgba(52,211,153,0.12) inset"
                        : "none",
                      backdropFilter: "blur(12px)",
                      flexShrink: 0,
                      zIndex: isActive ? 2 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "rgba(52,211,153,0.28)";
                        (e.currentTarget as HTMLElement).style.color =
                          "#9ca3af";
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(255,255,255,0.06)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "rgba(255,255,255,0.08)";
                        (e.currentTarget as HTMLElement).style.color =
                          "#6b7280";
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(255,255,255,0.03)";
                      }
                    }}
                  >
                    {/* Pulse ring on active */}
                    {isActive && (
                      <div
                        style={{
                          position: "absolute",
                          inset: "-4px",
                          borderRadius: "18px",
                          border: "1px solid rgba(52,211,153,0.25)",
                          animation: "tileRing 2s ease-in-out infinite",
                          pointerEvents: "none",
                        }}
                      />
                    )}

                    {/* Corner circuit dot — top-right */}
                    <div
                      style={{
                        position: "absolute",
                        top: "6px",
                        right: "6px",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: isActive
                          ? "#34d399"
                          : "rgba(255,255,255,0.12)",
                        transition: "background 0.3s ease",
                        boxShadow: isActive ? "0 0 6px #34d399" : "none",
                      }}
                    />

                    {/* Icon */}
                    <div
                      style={{
                        fontSize: isActive ? "18px" : "15px",
                        transition: "font-size 0.3s ease",
                      }}
                    >
                      <c.Icon />
                    </div>

                    {/* Short label */}
                    <span
                      style={{
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textAlign: "center",
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                        maxWidth: "60px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {c.short}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Active label below the row */}
          <div
            style={{
              textAlign: "center",
              marginTop: "14px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "#6ee7b7",
              letterSpacing: "0.08em",
              minHeight: "18px",
              transition: "opacity 0.2s ease",
            }}
          >
            {committees[activeTab].title}
          </div>
        </div>
      </div>

      {/* ── MOBILE: horizontal scroll chips ── */}
      <div
        ref={scrollRef}
        className="md:hidden flex gap-2 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {committees.map((c, i) => {
          const isActive = activeTab === i;
          return (
            <button
              key={c.title}
              type="button"
              onClick={() => setActiveTab(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "7px 12px",
                borderRadius: "10px",
                flexShrink: 0,
                border: `1px solid ${isActive ? "rgba(52,211,153,0.45)" : "rgba(255,255,255,0.08)"}`,
                background: isActive
                  ? "rgba(52,211,153,0.12)"
                  : "rgba(255,255,255,0.03)",
                color: isActive ? "#6ee7b7" : "#6b7280",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: isActive ? "0 0 14px rgba(52,211,153,0.18)" : "none",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: "12px" }}>
                <c.Icon />
              </span>
              {c.short}
            </button>
          );
        })}
      </div>
    </>
  );
}

/* ── Member card grid helpers ─────────────────────────────────────── */
function MemberGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-5">
      {children}
    </div>
  );
}
function MemberSlot({
  lead,
  children,
}: {
  lead?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`sm:w-[178px] lg:w-[195px] ${lead ? "member-lead-slot" : ""}`}
    >
      {children}
    </div>
  );
}

/* ══════════════════ MAIN COMPONENT ══════════════════════════════════ */
export default function Committees() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFormerYear, setActiveFormerYear] = useState(0);
  const [showFormerCommittee, setShowFormerCommittee] = useState(false);

  

  const current = committees[activeTab];
  const isExec = current.title === "Executive Committee";
  const lead = current.members.find((m) => m.role === "Lead");
  const rest = current.members.filter((m) => m.role !== "Lead");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        .comm-root  { font-family: 'Outfit', sans-serif; }
        .comm-title { font-family: 'Cormorant Garamond', serif; }

        /* Circuit tile ring pulse */
        @keyframes tileRing {
          0%,100% { opacity: 0.6; transform: scale(1); }
          50%     { opacity: 1;   transform: scale(1.04); }
        }

        /* Mobile chip scroll */
        .chip-scroll::-webkit-scrollbar { display: none; }
        .chip-scroll { scrollbar-width: none; }

        /* Section fade-in */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.42s cubic-bezier(0.22,1,0.36,1) both; }

        /* Lead member slot — emerald ring */
        .member-lead-slot > div {
          box-shadow: 0 0 0 1.5px rgba(52,211,153,0.5),
                      0 16px 48px rgba(0,0,0,0.55) !important;
        }
        .member-lead-slot > div::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #34d399, transparent);
          pointer-events: none; z-index: 30;
        }

        /* Advisor banner */
        .advisor-banner {
          transition: box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .advisor-banner:hover {
          box-shadow: 0 0 0 1px rgba(52,211,153,0.3), 0 20px 60px rgba(0,0,0,0.45) !important;
          border-color: rgba(52,211,153,0.25) !important;
        }
        .advisor-banner:hover .advisor-photo {
          transform: scale(1.06);
        }
        .advisor-photo { transition: transform 0.6s cubic-bezier(0.22,1,0.36,1); }

        /* Section label */
        .section-label {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; padding: 5px 14px; border-radius: 999px;
          background: rgba(52,211,153,0.08); border: 1px solid rgba(52,211,153,0.22);
          color: #6ee7b7;
        }

        /* Former toggle */
        .former-toggle {
          transition: all 0.3s ease;
        }
        .former-toggle:hover {
          background: rgba(52,211,153,0.08) !important;
          border-color: rgba(52,211,153,0.28) !important;
        }
      `}</style>

      <div
        className="comm-root relative w-full min-h-screen overflow-x-hidden mt-12 lg:mt-0 px-4 sm:px-8 lg:px-20 py-10 sm:py-16 md:py-20"
        style={{ background: "#060d07" }}
      >
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              position: "absolute",
              top: "-80px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "650px",
              height: "450px",
              background:
                "radial-gradient(ellipse, rgba(22,163,74,0.16) 0%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(ellipse, rgba(21,128,61,0.09) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* ── Page header ── */}
          <header className="text-center mb-10 sm:mb-12">
            <p
              className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: "#34d399" }}
            >
              IEEE PES Student Branch · University of Moratuwa
            </p>
            <h1
              className="comm-title leading-none text-white mb-4"
              style={{
                fontSize: "clamp(44px,7vw,88px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Committees
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div
                className="h-px w-14"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(52,211,153,0.55))",
                }}
              />
              <div
                className="w-1 h-1 rounded-full"
                style={{ background: "#34d399" }}
              />
              <div
                className="h-px w-14"
                style={{
                  background:
                    "linear-gradient(270deg, transparent, rgba(52,211,153,0.55))",
                }}
              />
            </div>
          </header>

          {/* ══ CIRCUIT BOARD TAB SELECTOR ══════════════════════════════ */}
          <div className="mb-10 sm:mb-12">
            <CircuitTabs
              committees={committees}
              activeTab={activeTab}
              setActiveTab={(i) => setActiveTab(i)}
            />
          </div>

          {/* ══ EXECUTIVE COMMITTEE ══════════════════════════════════════
              Layout:
              - Advisor: slim horizontal identity banner (always visible)
              - Members: grid immediately below — ALL fit on first screen
          ══════════════════════════════════════════════════════════════ */}
          {isExec ? (
            <div className="fade-up">
              {/* ── Advisor identity banner ── */}
              <div
                className="advisor-banner mb-6 rounded-2xl overflow-hidden border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="flex items-stretch">
                  {/* Photo strip */}
                  <div
                    className="relative flex-shrink-0 overflow-hidden"
                    style={{ width: "clamp(72px,10vw,100px)" }}
                  >
                    <img
                      src={advisor}
                      alt="Advisor"
                      className="advisor-photo w-full h-full object-cover object-top"
                      style={{ minHeight: "88px" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to right, transparent 60%, rgba(6,13,7,0.7))",
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                      {/* Left: role + name */}
                      <div>
                        <p
                          className="text-[8px] sm:text-[9px] font-bold tracking-[0.25em] uppercase mb-0.5"
                          style={{ color: "#34d399" }}
                        >
                          Chapter Advisor
                        </p>
                        <h3
                          className="comm-title text-white font-semibold leading-tight"
                          style={{ fontSize: "clamp(13px,1.6vw,18px)" }}
                        >
                          Mrs. K.A.T. Lasagani
                        </h3>
                      </div>

                      {/* Divider */}
                      <div
                        className="hidden sm:block h-8 w-px"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                      />

                      {/* Credentials */}
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "B.Sc (Moratuwa)",
                          "M.Eng. (Canada)",
                          "P.Eng. (ON)",
                        ].map((cred) => (
                          <span
                            key={cred}
                            className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.09)",
                              color: "rgba(255,255,255,0.45)",
                              fontWeight: 500,
                            }}
                          >
                            {cred}
                          </span>
                        ))}
                      </div>

                      {/* Position */}
                      <div className="hidden md:block text-right ml-auto">
                        <p
                          className="text-[10px] font-medium"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          Senior Lecturer Gr. II
                        </p>
                        <p
                          className="text-[10px]"
                          style={{ color: "rgba(255,255,255,0.25)" }}
                        >
                          Dept. of Electrical Engineering · UoM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Section label ── */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                <span className="section-label">
                  <FaShieldAlt size={9} /> Executive Committee
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
              </div>

              {/* ── Exec member grid — 3-col desktop, 2-col mobile ── */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {current.members.map((m) => (
                  <MemberCard key={m.name} {...m} />
                ))}
              </div>
            </div>
          ) : (
            /* ══ NON-EXECUTIVE COMMITTEES ═══════════════════════════════ */
            <div className="fade-up">
              {/* Section label */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                <span className="section-label">
                  <current.Icon size={9} /> {current.title}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
              </div>

              <MemberGrid>
                {lead && (
                  <MemberSlot lead>
                    <MemberCard {...lead} />
                  </MemberSlot>
                )}
                {rest.map((m) => (
                  <MemberSlot key={m.name}>
                    <MemberCard {...m} />
                  </MemberSlot>
                ))}
              </MemberGrid>
            </div>
          )}

          {/* ══ FORMER EXECUTIVE COMMITTEE (exec tab only) ═══════════════ */}
          {activeTab === 0 && (
            <section className="mt-14 sm:mt-20">
              <button
                type="button"
                onClick={() => setShowFormerCommittee((v) => !v)}
                className="former-toggle flex items-center justify-between gap-3 w-full max-w-md mx-auto px-5 py-3.5 rounded-2xl border"
                style={{
                  background: showFormerCommittee
                    ? "rgba(52,211,153,0.07)"
                    : "rgba(255,255,255,0.03)",
                  borderColor: showFormerCommittee
                    ? "rgba(52,211,153,0.28)"
                    : "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded-full"
                    style={{
                      background: showFormerCommittee
                        ? "rgba(52,211,153,0.18)"
                        : "rgba(255,255,255,0.07)",
                      color: showFormerCommittee ? "#34d399" : "#9ca3af",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <FaHistory size={13} />
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: showFormerCommittee ? "#6ee7b7" : "#d1d5db",
                    }}
                  >
                    Former Executive Committee
                  </span>
                </div>
                <FaChevronDown
                  size={12}
                  style={{
                    color: "#34d399",
                    transform: showFormerCommittee
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>

              {showFormerCommittee && (
                <div className="mt-5 fade-up">
                  {/* Year selector */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="h-px flex-1"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    />
                    <div className="flex gap-2">
                      {formerCommittees.map((yg, i) => (
                        <button
                          key={yg.year}
                          type="button"
                          onClick={() => setActiveFormerYear(i)}
                          className="px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300"
                          style={{
                            background:
                              activeFormerYear === i
                                ? "rgba(52,211,153,0.14)"
                                : "rgba(255,255,255,0.04)",
                            borderColor:
                              activeFormerYear === i
                                ? "rgba(52,211,153,0.45)"
                                : "rgba(255,255,255,0.08)",
                            color:
                              activeFormerYear === i ? "#6ee7b7" : "#6b7280",
                          }}
                        >
                          {yg.year}
                        </button>
                      ))}
                    </div>
                    <div
                      className="h-px flex-1"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
                    {formerCommittees[activeFormerYear].members.map((m) => (
                      <FormerMemberCard key={`${m.name}-${m.role}`} {...m} />
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </>
  );
}
