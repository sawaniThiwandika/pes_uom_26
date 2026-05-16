export function VolunteerContent() {
  return (
    <div
      className="w-full flex flex-col items-center text-center gap-6 max-w-xl"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Badge */}
      <span
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase"
        style={{
          color: "rgba(52,211,153,0.90)",
          border: "1px solid rgba(52,211,153,0.28)",
          background: "rgba(52,211,153,0.07)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
          style={{
            boxShadow: "0 0 6px #4ade80",
            animation: "volDot 2s ease-in-out infinite",
          }}
        />
        Applications Open – 2026
      </span>

      {/* Title */}
      <h1
        className="text-white leading-[1.08] tracking-tight"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 600,
        }}
      >
        IEEE PES{" "}
        <span style={{ color: "#6ee7b7", fontStyle: "italic" }}>Volunteer</span>{" "}
        of the Year 2026
      </h1>

      {/* Divider */}
      <div
        className="w-16 h-px rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #34d399, transparent)",
          boxShadow: "0 0 10px rgba(52,211,153,0.4)",
        }}
      />

      {/* Body */}
      <div className="flex flex-col gap-4 max-w-lg">
        <p
          className="text-base leading-relaxed font-light"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Are you a passionate volunteer of the IEEE PES Student Branch Chapter
          of the University of Moratuwa? Your dedication and impact deserve
          recognition.
        </p>
        <p
          className="text-base leading-relaxed font-light"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Share your volunteering journey and achievements for the year 2026 and
          get the opportunity to become the next IEEE PES Volunteer of the Year.
        </p>
      </div>

      {/* CTA */}
      <button
        className="mt-2 px-10 py-3.5 rounded-full text-[13px] font-semibold tracking-[0.12em] uppercase"
        style={{
          color: "#34d399",
          border: "1px solid rgba(52,211,153,0.4)",
          background: "rgba(52,211,153,0.08)",
          transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
          fontFamily: "'Outfit', sans-serif",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "rgba(52,211,153,0.18)";
          el.style.borderColor = "rgba(52,211,153,0.65)";
          el.style.boxShadow = "0 0 28px rgba(52,211,153,0.2)";
          el.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "rgba(52,211,153,0.08)";
          el.style.borderColor = "rgba(52,211,153,0.4)";
          el.style.boxShadow = "none";
          el.style.transform = "translateY(0)";
        }}
      >
        Apply Now →
      </button>

      <style>{`
        @keyframes volDot {
          0%,100% { box-shadow: 0 0 6px #34d399; }
          50%      { box-shadow: 0 0 12px #34d399, 0 0 24px rgba(52,211,153,0.4); }
        }
      `}</style>
    </div>
  );
}
