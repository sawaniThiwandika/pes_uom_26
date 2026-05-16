import { VolunteerContent } from "./VolunteerContent";
import { VolunteerImage } from "./VolunteerImage";

export function VolunteerHero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-6 sm:px-12 lg:px-20 pt-24 pb-16 overflow-hidden"
    //   style={{ background: "#060d07" }}
    >
      {/* Ambient glows — matches site theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "30%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(ellipse, rgba(22,163,74,0.14) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "10%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(21,128,61,0.10) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Tech grid overlay — same as Contact page */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0, opacity: 0.06 }}
        >
          <defs>
            <pattern
              id="volGrid"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 56 0 L 0 0 0 56"
                fill="none"
                stroke="rgba(52,211,153,1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#volGrid)" />
        </svg>
        {/* Corner brackets */}
        <div
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            width: "20px",
            height: "20px",
            borderTop: "1.5px solid rgba(52,211,153,0.4)",
            borderLeft: "1.5px solid rgba(52,211,153,0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            width: "20px",
            height: "20px",
            borderTop: "1.5px solid rgba(52,211,153,0.4)",
            borderRight: "1.5px solid rgba(52,211,153,0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "24px",
            width: "20px",
            height: "20px",
            borderBottom: "1.5px solid rgba(52,211,153,0.4)",
            borderLeft: "1.5px solid rgba(52,211,153,0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            right: "24px",
            width: "20px",
            height: "20px",
            borderBottom: "1.5px solid rgba(52,211,153,0.4)",
            borderRight: "1.5px solid rgba(52,211,153,0.4)",
          }}
        />
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <VolunteerContent />
        </div>
        <div className="flex-1 flex justify-center">
          <VolunteerImage />
        </div>
      </div>
    </section>
  );
}
