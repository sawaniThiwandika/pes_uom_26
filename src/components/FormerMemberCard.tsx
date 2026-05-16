import { FaEnvelope, FaLinkedinIn, FaUserCircle } from "react-icons/fa";

export interface FormerMemberCardProps {
  name: string;
  role: string;
  image?: string; // optional — shows placeholder if missing
  email?: string; // optional — icon hidden if missing
  linkedin?: string; // optional — icon hidden if missing
}

export default function FormerMemberCard({
  name,
  role,
  image,
  email,
  linkedin,
}: FormerMemberCardProps) {
  const hasImage = !!image;
  const hasEmail = !!email && email.trim() !== "";
  const hasLinkedin =
    !!linkedin && linkedin.trim() !== "" && linkedin !== "https://linkedin.com";

  return (
    <div
      className="group relative flex items-center gap-3.5 rounded-xl p-3.5 border border-white/[0.07] hover:border-emerald-400/25 transition-all duration-350 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 50%, rgba(52,211,153,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-8 rounded-full bg-emerald-400/0 group-hover:bg-emerald-400/70 transition-all duration-400" />

      {/* Avatar — placeholder if no image */}
      <div
        className="relative flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-emerald-400/30 transition-colors duration-300"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        {hasImage ? (
          <>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          </>
        ) : (
          /* Initials placeholder */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: "rgba(52,211,153,0.08)" }}
          >
            <FaUserCircle/>
            {/* <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "#34d399",
              }}
            >
              {name
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}
            </span> */}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-semibold text-gray-100 leading-tight mb-0.5 truncate">
          {name}
        </h4>
        <p className="text-[10px] font-semibold tracking-[0.12em] text-emerald-400 uppercase mb-2.5 truncate">
          {role}
        </p>

        {/* Action icons — only render if data exists */}
        {(hasEmail || hasLinkedin) && (
          <div className="flex items-center gap-1.5">
            {hasEmail && (
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center w-6 h-6 rounded-lg border border-white/10 text-gray-400 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.05)" }}
                title={email}
                onClick={(e) => e.stopPropagation()}
              >
                <FaEnvelope size={9} />
              </a>
            )}
            {hasLinkedin && (
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
        )}
        {/* If no contact info at all, show a subtle "no contact" state */}
        {!hasEmail && !hasLinkedin && (
          <span
            className="text-[9px]"
            style={{ color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}
          >
            —
          </span>
        )}
      </div>
    </div>
  );
}
