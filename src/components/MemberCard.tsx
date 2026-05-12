// import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

// interface MemberCardProps {
//     name: string;
//     role: string;
//     image: string;
//     linkedin: string;
//     email: string;
// }

// export default function MemberCard({
//                                        name,
//                                        role,
//                                        image,
//                                        email,
//                                        linkedin,
//                                    }: MemberCardProps) {
//     return (
//         <div
//             className="
//       w-full max-w-[220px] sm:max-w-xs
//       h-64 sm:h-72
//       bg-gradient-to-br from-white to-gray-100
//       rounded-2xl sm:rounded-3xl
//       flex flex-col items-center justify-center
//       p-3 sm:p-5
//       shadow-[0_8px_20px_rgba(0,0,0,0.06)]
//       sm:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
//       transition-all duration-300
//       relative overflow-hidden group
//       hover:-translate-y-1
//     "
//         >
//             {/* Image */}
//             <img
//                 src={image}
//                 alt={name}
//                 className="
//         w-28 h-28 sm:w-28 sm:h-28
//         rounded-full object-cover
//         border-2 sm:border-4 border-[#2E7D32]
//         mb-2 sm:mb-3
//         transition-transform duration-300
//         group-hover:scale-105
//       "
//             />

//             {/* Name */}
//             <h3 className="text-sm sm:text-base font-semibold text-gray-900 my-0.5 text-center">
//                 {name}
//             </h3>

//             {/* Role */}
//             <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 text-center">
//                 {role}
//             </p>

//             {/* Icons */}
//             <div className="flex items-center gap-1.5">
//                 <a
//                     href={`mailto:${email}`}
//                     className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-[#e9f0e6] text-[#1b6b25] hover:bg-[#1b6b25] hover:text-white transition-all"
//                 >
//                     <FaEnvelope size={9} />
//                 </a>

//                 {linkedin && (
//                     <a
//                         href={linkedin}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-[#e9f0e6] text-[#1b6b25] hover:bg-[#0a66c2] hover:text-white transition-all"
//                     >
//                         <FaLinkedinIn size={9} />
//                     </a>
//                 )}
//             </div>
//         </div>
//     );
// }

import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email: string;
}

export default function MemberCard({ name, role, image, email, linkedin }: MemberCardProps) {
  return (
    <div
      className="group relative w-full rounded-xl sm:rounded-2xl overflow-hidden cursor-default"
      style={{
        aspectRatio: "3 / 4",
        boxShadow: "0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      {/* Full-bleed portrait */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.22) 42%, transparent 70%)",
        }}
      />

      {/* Hover shimmer line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(90deg, transparent, #34d399, transparent)" }}
      />

      {/* Role badge */}
      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
        <span
          className="text-[7px] sm:text-[8px] font-bold tracking-[0.16em] uppercase px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full border"
          style={{
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
            borderColor: "rgba(52,211,153,0.35)",
            color: "#6ee7b7",
          }}
        >
          {role}
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3.5">
        <h3
          className="text-[11px] sm:text-[13px] font-semibold text-white leading-snug mb-2"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {name}
        </h3>

        {/* Icons — always visible on mobile; hover-reveal on desktop */}
        <div className="flex gap-1.5 sm:gap-2 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300 ease-out">
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/20 text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}
            title={email}
          >
            <FaEnvelope size={9} />
          </a>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/20 text-white hover:bg-[#0a66c2] hover:border-[#0a66c2] transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}
              title="LinkedIn"
            >
              <FaLinkedinIn size={9} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}