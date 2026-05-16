import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { useTilt } from "../hooks/useTilt";

interface MemberCardProps {
  name: string;
  role: string;
  image?: string; // optional — shows initials if missing
  linkedin?: string; // optional — hidden if missing or placeholder
  email?: string; // optional — hidden if missing
}

const PLACEHOLDER_LINKEDIN = "https://linkedin.com";

export default function MemberCard({
  name,
  role,
  image,
  email,
  linkedin,
}: MemberCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(10);

  const hasImage = !!image;
  const hasEmail = !!email && email.trim() !== "";
  const hasLinkedin =
    !!linkedin && linkedin.trim() !== "" && linkedin !== PLACEHOLDER_LINKEDIN;

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative w-full rounded-xl sm:rounded-2xl overflow-hidden cursor-default"
      style={{
        aspectRatio: "3/4",
        transformStyle: "preserve-3d",
        boxShadow:
          "0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      <div className="tilt-shine absolute inset-0 z-10 pointer-events-none transition-all duration-150" />

      {/* Portrait or initials placeholder */}
      {hasImage ? (
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(22,163,74,0.15), rgba(6,13,7,1))",
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px,4vw,40px)",
              fontWeight: 700,
              color: "rgba(52,211,153,0.6)",
              letterSpacing: "0.05em",
            }}
          >
            {initials}
          </span>
        </div>
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.22) 42%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(90deg, transparent, #34d399, transparent)",
        }}
      />

      {/* Role badge */}
      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
        <span
          className="text-[7px] sm:text-[8px] font-bold tracking-[0.16em] uppercase px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full border"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(8px)",
            borderColor: "rgba(52,211,153,0.35)",
            color: "#6ee7b7",
          }}
        >
          {role}
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3.5 z-20">
        <h3
          className="text-[11px] sm:text-[13px] font-semibold text-white leading-snug mb-2"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {name}
        </h3>

        {/* Icons — only show if contact data exists */}
        {(hasEmail || hasLinkedin) && (
          <div className="flex gap-1.5 sm:gap-2 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300 ease-out">
            {hasEmail && (
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/20 text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <FaEnvelope size={9} />
              </a>
            )}
            {hasLinkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/20 text-white hover:bg-[#0a66c2] hover:border-[#0a66c2] transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <FaLinkedinIn size={9} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
