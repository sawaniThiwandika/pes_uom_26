import { useState, useEffect } from "react";
import type { Project } from "../../data/projectsData";

interface Props {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
    const [imgIndex, setImgIndex] = useState(0);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => { setImgIndex(0); }, [project]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (!project) return;
            if (e.key === "ArrowRight") setImgIndex(i => (i + 1) % project.images.length);
            if (e.key === "ArrowLeft") setImgIndex(i => (i - 1 + project.images.length) % project.images.length);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [project, onClose]);

    if (!project) return null;

    const prevImg = () => setImgIndex(i => (i - 1 + project.images.length) % project.images.length);
    const nextImg = () => setImgIndex(i => (i + 1) % project.images.length);

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                style={{ background: "rgba(8,16,8,0.7)", backdropFilter: "blur(10px)" }}
                onClick={onClose}
            >
                {/* Wrapper — position relative so close button anchors to it */}
                <div
                    className="relative w-full"
                    style={{ maxWidth: "680px" }}
                    onClick={e => e.stopPropagation()}
                >
                    {/* ── Close button — outside scroll, always visible ── */}
                    <button
                        onClick={onClose}
                        className="absolute flex items-center justify-center z-20"
                        style={{
                            top: "-14px",
                            right: "-14px",
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: "white",
                            border: "2px solid rgba(21,128,61,0.25)",
                            color: "#374151",
                            cursor: "pointer",
                            boxShadow: "0 4px 14px rgba(0,0,0,0.14)",
                            transition: "background 0.2s, color 0.2s",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "rgb(21,128,61)";
                            e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "white";
                            e.currentTarget.style.color = "#374151";
                        }}
                    >
                        <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* ── Modal card ── */}
                    <div
                        style={{
                            background: "white",
                            borderRadius: "20px",
                            overflow: "hidden",
                            maxHeight: "88vh",
                            overflowY: "auto",
                            boxShadow: "0 40px 100px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.05)",
                            animation: "modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards",
                        }}
                    >
                        {/* Top green bar */}
                        <div style={{ height: "3px", background: "linear-gradient(90deg, rgb(21,128,61), rgba(74,222,128,0.4))", borderRadius: "20px 20px 0 0" }} />

                        {/* ── Image Slider ── */}
                        <div className="relative overflow-hidden" style={{ height: "300px", background: "#0f1a0f" }}>
                            <img
                                key={imgIndex}
                                src={project.images[imgIndex]}
                                alt=""
                                className="w-full h-full object-cover"
                                style={{ animation: "imgFade 0.35s ease forwards" }}
                            />

                            {/* Fade to white */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: "linear-gradient(to bottom, transparent 50%, white 100%)" }}
                            />

                            {/* Prev / Next arrows */}
                            {project.images.length > 1 && (
                                <>
                                    {[
                                        { action: prevImg, pos: "left-3", icon: "←" },
                                        { action: nextImg, pos: "right-3", icon: "→" },
                                    ].map(btn => (
                                        <button
                                            key={btn.pos}
                                            onClick={btn.action}
                                            className={`absolute top-1/2 -translate-y-1/2 ${btn.pos} flex items-center justify-center`}
                                            style={{
                                                width: "38px", height: "38px",
                                                borderRadius: "50%",
                                                background: "rgba(0,0,0,0.38)",
                                                backdropFilter: "blur(4px)",
                                                border: "1px solid rgba(255,255,255,0.15)",
                                                color: "white",
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                                cursor: "pointer",
                                                transition: "background 0.2s",
                                            }}
                                            onMouseEnter={e => (e.currentTarget.style.background = "rgb(21,128,61)")}
                                            onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.38)")}
                                        >
                                            {btn.icon}
                                        </button>
                                    ))}

                                    {/* Dots */}
                                    <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5">
                                        {project.images.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setImgIndex(i)}
                                                style={{
                                                    width: i === imgIndex ? "22px" : "7px",
                                                    height: "7px",
                                                    borderRadius: "99px",
                                                    background: i === imgIndex ? "rgb(21,128,61)" : "rgba(255,255,255,0.5)",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    transition: "all 0.3s",
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Thumbnails */}
                                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 px-4">
                                        {project.images.map((img, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setImgIndex(i)}
                                                style={{
                                                    width: "48px", height: "34px",
                                                    borderRadius: "6px",
                                                    overflow: "hidden",
                                                    flexShrink: 0,
                                                    border: i === imgIndex ? "2px solid rgb(21,128,61)" : "2px solid rgba(255,255,255,0.35)",
                                                    opacity: i === imgIndex ? 1 : 0.55,
                                                    transition: "all 0.2s",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <img src={img} className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* ── Body ── */}
                        <div style={{ padding: "8px 32px 36px" }}>

                            {/* Date */}
                            <div style={{ marginBottom: "14px" }}>
                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "5px",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "11px",
                                        fontWeight: 600,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        color: "rgb(21,128,61)",
                                        background: "rgba(21,128,61,0.07)",
                                        border: "1px solid rgba(21,128,61,0.18)",
                                        borderRadius: "999px",
                                        padding: "4px 12px",
                                    }}
                                >
                                    <svg style={{ width: "10px", height: "10px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {project.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h2
                                style={{
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontSize: "24px",
                                    fontWeight: 700,
                                    lineHeight: "1.35",
                                    color: "#111a11",
                                    marginBottom: "14px",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {project.title}
                            </h2>

                            {/* Divider */}
                            <div style={{ width: "40px", height: "3px", borderRadius: "99px", background: "rgb(21,128,61)", marginBottom: "18px" }} />

                            {/* Description */}
                            <p
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "14.5px",
                                    fontWeight: 400,
                                    lineHeight: "1.85",
                                    color: "#4b5563",
                                    whiteSpace: "pre-line",
                                }}
                            >
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes modalIn {
                    from { opacity: 0; transform: scale(0.94) translateY(16px); }
                    to   { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes imgFade {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
            `}</style>
        </>
    );
}