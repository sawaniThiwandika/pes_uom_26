import volunteer from "../assets/volunteer/volunteer.webp";

export function VolunteerImage() {
  return (
    <div className="flex justify-center w-full">
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          maxWidth: "480px",
          width: "100%",
          border: "1px solid rgba(52,211,153,0.20)",
          boxShadow:
            "0 0 40px rgba(52,211,153,0.10), 0 24px 60px rgba(0,0,0,0.6)",
          transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow =
            "0 0 60px rgba(52,211,153,0.20), 0 32px 70px rgba(0,0,0,0.65)";
          el.style.borderColor = "rgba(52,211,153,0.42)";
          el.style.transform = "translateY(-6px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow =
            "0 0 40px rgba(52,211,153,0.10), 0 24px 60px rgba(0,0,0,0.6)";
          el.style.borderColor = "rgba(52,211,153,0.20)";
          el.style.transform = "translateY(0)";
        }}
      >
        {/* Top emerald line */}
        <div
          style={{
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #34d399, transparent)",
          }}
        />
        <img
          src={volunteer}
          alt="IEEE PES Volunteer of the Year"
          className="w-full h-auto object-cover block"
        />
        {/* Bottom gradient fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: "linear-gradient(to top, #060d07, transparent)",
          }}
        />
      </div>
    </div>
  );
}
