import type { Project } from "../../data/projectsData.ts";

interface Props {
    project: Project;
    onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            <div
                className="group relative bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer"
                style={{
                    border: "1px solid rgba(0,0,0,0.07)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)",
                    transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
                }}
                onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-6px)";
                    el.style.boxShadow = "0 8px 32px rgba(21,128,61,0.13), 0 2px 8px rgba(0,0,0,0.07)";
                    el.style.borderColor = "rgba(21,128,61,0.3)";
                }}
                onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)";
                    el.style.borderColor = "rgba(0,0,0,0.07)";
                }}
                onClick={onClick}
            >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "210px" }}>
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{ transition: "transform 0.5s ease" }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />

                    {/* Subtle gradient at bottom of image */}
                    <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.18) 100%)" }}
                    />

                    {/* Image count badge */}
                    {project.images.length > 1 && (
                        <div
                            className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-white"
                            style={{
                                background: "rgba(0,0,0,0.45)",
                                backdropFilter: "blur(6px)",
                                fontSize: "11px",
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 500,
                                letterSpacing: "0.03em",
                            }}
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {project.images.length}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">

                    {/* Date pill */}
                    <div className="flex items-center gap-2 mb-3">
                        <span
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "5px",
                                fontSize: "11px",
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 600,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                color: "rgb(21,128,61)",
                                background: "rgba(21,128,61,0.07)",
                                border: "1px solid rgba(21,128,61,0.18)",
                                borderRadius: "999px",
                                padding: "3px 10px",
                            }}
                        >
                            <svg style={{ width: "10px", height: "10px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {project.date}
                        </span>
                    </div>

                    {/* Title */}
                    <h3
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "17px",
                            fontWeight: 700,
                            lineHeight: "1.45",
                            color: "#1a2e1a",
                            marginBottom: "10px",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        {project.title}
                    </h3>

                    {/* Divider */}
                    <div
                        style={{
                            width: "32px",
                            height: "2px",
                            borderRadius: "99px",
                            background: "rgba(21,128,61,0.4)",
                            marginBottom: "12px",
                        }}
                    />

                    {/* Preview */}
                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "13.5px",
                            fontWeight: 400,
                            lineHeight: "1.75",
                            color: "#6b7280",
                            flex: 1,
                        }}
                    >
                        {project.preview}
                    </p>

                    {/* Read More button */}
                    <button
                        onClick={onClick}
                        className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "13px",
                            fontWeight: 600,
                            letterSpacing: "0.04em",
                            padding: "10px 0",
                            background: "rgba(21,128,61,0.06)",
                            color: "rgb(21,128,61)",
                            border: "1px solid rgba(21,128,61,0.2)",
                            transition: "background 0.2s, color 0.2s, border-color 0.2s",
                            cursor: "pointer",
                        }}
                        onMouseEnter={e => {
                            const el = e.currentTarget;
                            el.style.background = "rgb(21,128,61)";
                            el.style.color = "white";
                            el.style.borderColor = "rgb(21,128,61)";
                        }}
                        onMouseLeave={e => {
                            const el = e.currentTarget;
                            el.style.background = "rgba(21,128,61,0.06)";
                            el.style.color = "rgb(21,128,61)";
                            el.style.borderColor = "rgba(21,128,61,0.2)";
                        }}
                    >
                        Read More
                        <svg style={{ width: "14px", height: "14px", transition: "transform 0.2s" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

                {/* Bottom green accent line */}
                <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full"
                    style={{
                        background: "linear-gradient(90deg, rgb(21,128,61), rgba(21,128,61,0.1))",
                        transition: "width 0.5s ease",
                    }}
                />
            </div>
        </>
    );
}