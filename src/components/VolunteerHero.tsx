import { VolunteerContent } from "./VolunteerContent";
import { VolunteerImage }   from "./VolunteerImage";

export function VolunteerHero() {
    return (
        <section
            className="relative min-h-screen flex items-center
                       px-6 sm:px-12 lg:px-20 pt-24 pb-16 overflow-hidden"
            style={{
                background: "linear-gradient(160deg, #0d1c2e 0%, #070c17 55%, #090e1a 100%)",
            }}
        >


            {/* ── Two-column on desktop, stacked on mobile ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto
                            flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Left — text content, left-aligned on desktop */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <VolunteerContent />
                </div>

                {/* Right — image */}
                <div className="flex-1 flex justify-center">
                    <VolunteerImage />
                </div>

            </div>
        </section>
    );
}