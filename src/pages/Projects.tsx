import { useState } from "react";
import { projects, type Project } from "../data/projectsData";
import HeroSlider from "../components/project/HeroSlider.tsx";
import ProjectCard from "../components/project/ProjectCard.tsx";
import ProjectModal from "../components/project/ProjectModal.tsx";

const PAGE_SIZE = 3;

export default function ProjectsPage() {
    const [page, setPage] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const totalPages = Math.ceil(projects.length / PAGE_SIZE);
    const pageProjects = projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

    const goNext = () => { if (page < totalPages - 1) setPage(p => p + 1); };
    const goPrev = () => { if (page > 0) setPage(p => p - 1); };

    return (
        <div className="min-h-screen" style={{ background: "#f7faf8" }}>

            {/* Hero Slider */}
            <div className="pt-12">
                <HeroSlider />
            </div>

            {/* Cards Grid */}
            <div className="max-w-6xl mx-auto px-6 2md:px-12 pt-12 pb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pageProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Prev / Next */}
            {totalPages > 1 && (
                <div className="max-w-6xl mx-auto px-6 2md:px-12 py-10 flex items-center justify-between gap-4">

                    {/* Previous */}
                    <button
                        onClick={goPrev}
                        disabled={page === 0}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "10px 22px",
                            borderRadius: "999px",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "13px",
                            fontWeight: 600,
                            background: "white",
                            color: page === 0 ? "#9ca3af" : "rgb(21,128,61)",
                            border: page === 0 ? "1px solid #e5e7eb" : "1px solid rgba(21,128,61,0.3)",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                            cursor: page === 0 ? "not-allowed" : "pointer",
                            opacity: page === 0 ? 0.5 : 1,
                            transition: "all 0.2s",
                        }}
                        onMouseEnter={e => { if (page > 0) e.currentTarget.style.background = "rgba(21,128,61,0.06)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "white"; }}
                    >
                        <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>

                    </button>

                    {/* Page indicator */}
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                style={{
                                    width: i === page ? "28px" : "8px",
                                    height: "8px",
                                    borderRadius: "99px",
                                    background: i === page ? "rgb(21,128,61)" : "rgba(21,128,61,0.2)",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.3s",
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>

                    {/* Next */}
                    <button
                        onClick={goNext}
                        disabled={page === totalPages - 1}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "10px 22px",
                            borderRadius: "999px",
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "13px",
                            fontWeight: 600,
                            background: page === totalPages - 1 ? "white" : "rgb(21,128,61)",
                            color: page === totalPages - 1 ? "#9ca3af" : "white",
                            border: page === totalPages - 1 ? "1px solid #e5e7eb" : "1px solid rgb(21,128,61)",
                            boxShadow: page === totalPages - 1 ? "none" : "0 4px 16px rgba(21,128,61,0.25)",
                            cursor: page === totalPages - 1 ? "not-allowed" : "pointer",
                            opacity: page === totalPages - 1 ? 0.5 : 1,
                            transition: "all 0.2s",
                        }}
                        onMouseEnter={e => { if (page < totalPages - 1) e.currentTarget.style.background = "rgb(15,100,50)"; }}
                        onMouseLeave={e => { if (page < totalPages - 1) e.currentTarget.style.background = "rgb(21,128,61)"; }}
                    >

                        <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}

            {/* Modal */}
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    );
}