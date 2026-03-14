export function VolunteerContent() {
    return (
        <div className="w-full flex flex-col items-center text-center gap-7 max-w-xl">

            {/* Badge */}
            <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{
                    color:      "rgba(74,222,128,0.90)",
                    border:     "1px solid rgba(74,222,128,0.28)",
                    background: "rgba(74,222,128,0.07)",
                    backdropFilter: "blur(8px)",
                }}
            >
                <span
                    className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
                    style={{ boxShadow: "0 0 6px #4ade80", animation: "pulse 2s infinite" }}
                />
                Applications Open – 2026
            </span>

            {/* Title */}
            <h1
                className="text-white font-extrabold leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
            >
                IEEE PES{" "}
                <span
                    style={{
                        color:      "#4ade80",
                        textShadow: "0 0 32px rgba(74,222,128,0.40)",
                    }}
                >
                    Volunteer
                </span>
                {" "}of the Year 2026
            </h1>

            {/* Glowing divider */}
            <div
                className="w-20 h-px rounded-full self-center"
                style={{
                    background: "linear-gradient(90deg, transparent, #4ade80, transparent)",
                    boxShadow:  "0 0 12px rgba(74,222,128,0.45)",
                }}
            />

            {/* Body */}
            <div className="flex flex-col gap-4 max-w-lg">
                <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(200,218,230,0.65)" }}
                >
                    Are you a passionate volunteer of the IEEE PES Student Branch Chapter
                    of the University of Moratuwa? Your dedication and impact deserve
                    recognition.
                </p>
                <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(200,218,230,0.65)" }}
                >
                    Share your volunteering journey and achievements for the year 2026
                    and get the opportunity to become the next IEEE PES Volunteer of the Year.
                </p>
            </div>

            {/* CTA */}
            <button
                className="mt-2 px-10 py-3.5 rounded-md text-[13px] font-bold
                           tracking-[0.18em] uppercase transition-all duration-300"
                style={{
                    color:      "#4ade80",
                    border:     "1px solid rgba(74,222,128,0.42)",
                    background: "rgba(74,222,128,0.07)",
                }}
                onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background  = "rgba(74,222,128,0.16)";
                    el.style.borderColor = "rgba(74,222,128,0.80)";
                    el.style.boxShadow   = "0 0 24px rgba(74,222,128,0.22)";
                    el.style.transform   = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background  = "rgba(74,222,128,0.07)";
                    el.style.borderColor = "rgba(74,222,128,0.42)";
                    el.style.boxShadow   = "none";
                    el.style.transform   = "translateY(0)";
                }}
            >
                Apply Now →
            </button>

        </div>
    );
}