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
  const pageProjects = projects.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE,
  );

  const goNext = () => {
    if (page < totalPages - 1) setPage((p) => p + 1);
  };
  const goPrev = () => {
    if (page > 0) setPage((p) => p - 1);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
        .proj-root { font-family: 'Outfit', sans-serif; }

        .proj-nav-btn {
          transition: all 0.25s ease;
        }
        .proj-nav-btn:not(:disabled):hover {
          transform: translateY(-2px);
        }
        .proj-dot {
          transition: all 0.35s cubic-bezier(.77,0,.18,1);
          border: none;
          padding: 0;
          cursor: pointer;
        }
      `}</style>

      <div
        className="proj-root"
        style={{ background: "#060d07", minHeight: "100vh" }}
      >
        {/* Hero Slider */}
        <div className="pt-12 lg:pt-0">
          <HeroSlider />
        </div>

        {/* ── Section header ── */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pt-14 pb-6">
          <div className="flex items-center gap-4">
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border"
              style={{
                background: "rgba(52,211,153,0.08)",
                borderColor: "rgba(52,211,153,0.25)",
                color: "#6ee7b7",
              }}
            >
              Projects &amp; Events
            </span>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pageProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 flex items-center justify-between gap-6">
            {/* Prev */}
            <button
              onClick={goPrev}
              disabled={page === 0}
              className="proj-nav-btn flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor:
                  page === 0
                    ? "rgba(255,255,255,0.07)"
                    : "rgba(52,211,153,0.28)",
                color: page === 0 ? "rgba(255,255,255,0.25)" : "#6ee7b7",
                backdropFilter: "blur(10px)",
              }}
            >
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Previous</span>
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className="proj-dot rounded-full"
                  style={{
                    width: i === page ? "28px" : "8px",
                    height: "8px",
                    background: i === page ? "#34d399" : "rgba(52,211,153,0.2)",
                  }}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={goNext}
              disabled={page === totalPages - 1}
              className="proj-nav-btn flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background:
                  page === totalPages - 1
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(52,211,153,0.12)",
                borderColor:
                  page === totalPages - 1
                    ? "rgba(255,255,255,0.07)"
                    : "rgba(52,211,153,0.4)",
                color:
                  page === totalPages - 1
                    ? "rgba(255,255,255,0.25)"
                    : "#34d399",
                backdropFilter: "blur(10px)",
                boxShadow:
                  page === totalPages - 1
                    ? "none"
                    : "0 0 20px rgba(52,211,153,0.10)",
              }}
            >
              <span>Next</span>
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </>
  );
}
