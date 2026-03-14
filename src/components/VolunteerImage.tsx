import volunteer from "../assets/volunteer/volunteer1.webp";

export function VolunteerImage() {
    return (
        <div className="flex justify-center w-full">
            <div
                className="relative rounded-2xl overflow-hidden transition-all duration-500
                           hover:-translate-y-2"
                style={{
                    maxWidth:  "480px",
                    width:     "100%",
                    border:    "1px solid rgba(74,222,128,0.22)",
                    boxShadow: "0 0 40px rgba(74,222,128,0.12), 0 24px 60px rgba(0,0,0,0.55)",
                }}
                onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 60px rgba(74,222,128,0.22), 0 32px 70px rgba(0,0,0,0.60)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(74,222,128,0.50)";
                }}
                onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 40px rgba(74,222,128,0.12), 0 24px 60px rgba(0,0,0,0.55)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(74,222,128,0.22)";
                }}
            >
                <img
                    src={volunteer}
                    alt="IEEE PES Volunteer of the Year"
                    className="w-full h-auto object-cover block"
                />



            </div>
        </div>
    );
}