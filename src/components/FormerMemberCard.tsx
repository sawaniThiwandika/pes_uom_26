// import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

// export interface FormerMemberCardProps {
//   name: string;
//   role: string;
//   image: string;
//   email: string;
//   linkedin: string;
// }

// export default function FormerMemberCard({
//   name,
//   role,
//   image,
//   email,
//   linkedin,
// }: FormerMemberCardProps) {
//   return (
//     <div className="flex items-center gap-3 bg-white rounded-2xl p-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(27,107,37,0.13)] transition-all duration-300 hover:-translate-y-0.5 group border border-transparent hover:border-[#2E7D32]/10">
//       {/* Avatar */}
//       <div className="relative flex-shrink-0">
//         <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#2E7D32]/25 group-hover:border-[#2E7D32]/60 transition-colors duration-300">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
//           />
//         </div>
//       </div>

//       {/* Info */}
//       <div className="flex-1 min-w-0">
//         <h4 className="text-sm font-semibold text-[#0f1f12] leading-tight mb-0.5 truncate">
//           {name}
//         </h4>
//         <p className="text-xs font-medium text-[#1b6b25] mb-2 truncate">
//           {role}
//         </p>

//         {/* Action icons */}
//         <div className="flex items-center gap-1.5">
//           <a
//             href={`mailto:${email}`}
//             className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e9f0e6] text-[#1b6b25] hover:bg-[#1b6b25] hover:text-white transition-all duration-200"
//             title={email}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <FaEnvelope size={10} />
//           </a>
//           {linkedin && (
//             <a
//               href={linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e9f0e6] text-[#1b6b25] hover:bg-[#0a66c2] hover:text-white transition-all duration-200"
//               title="LinkedIn Profile"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <FaLinkedinIn size={10} />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";

export interface FormerMemberCardProps {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedin: string;
}

export default function FormerMemberCard({
  name,
  role,
  image,
  email,
  linkedin,
}: FormerMemberCardProps) {
  return (
    <div
      className="group relative flex items-center gap-3.5 rounded-xl p-3.5 border border-white/[0.07] hover:border-emerald-400/25 transition-all duration-350 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
      }}
    >
      {/* Hover glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 50%, rgba(52,211,153,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Left emerald accent bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-8 rounded-full bg-emerald-400/0 group-hover:bg-emerald-400/70 transition-all duration-400" />

      {/* Avatar */}
      <div className="relative flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-emerald-400/30 transition-colors duration-300">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-semibold text-gray-100 leading-tight mb-0.5 truncate">
          {name}
        </h4>
        <p className="text-[10px] font-semibold tracking-[0.12em] text-emerald-400 uppercase mb-2.5 truncate">
          {role}
        </p>

        {/* Action icons */}
        <div className="flex items-center gap-1.5">
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center w-6 h-6 rounded-lg border border-white/10 text-gray-400 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.05)" }}
            title={email}
            onClick={(e) => e.stopPropagation()}
          >
            <FaEnvelope size={9} />
          </a>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-6 h-6 rounded-lg border border-white/10 text-gray-400 hover:border-[#0a66c2]/60 hover:text-[#0a66c2] transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.05)" }}
              title="LinkedIn"
              onClick={(e) => e.stopPropagation()}
            >
              <FaLinkedinIn size={9} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
