import { useState } from "react";
import HeroSlider from "../components/project/HeroSlider.tsx";
import ProjectCard from "../components/project/ProjectCard.tsx";
import ProjectModal from "../components/project/ProjectModal.tsx";
import useCSVDataLoader from "../hooks/useCSVDataLoader.ts";
import type { Project } from "../data/projectsData.ts";
import { useMemo } from "react";



const PAGE_SIZE = 3;

export default function ProjectsPage() {
  const [page, setPage] = useState(0);
  const csvURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJc6eWMxIUG2kFqHig6dPE4ikhxDyQLaeE_ho-hIzWOpaPXwFontlzv0R6QAkWY8tylpO61nf_XMkG/pub?gid=0&single=true&output=csv";
  const { csvData: projects, loading } = useCSVDataLoader(csvURL);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const heroImages = useMemo(() => {
  return projects
    .map(p => {
      const imgs = p.images || [];
      if (imgs.length === 0) return [];

      const shuffled = [...imgs].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 2);
    })
    .flat()
    .filter(Boolean);
}, [projects]);

  if (loading) {
    return (
      <div
        className="proj-root"
        style={{
          background: "#060d07",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div className="loading-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="loading-card" />
            ))}
          </div>

          <div
            style={{
              marginTop: "18px",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#6ee7b7",
              opacity: 0.7,
            }}
          >
            Loading Projects
          </div>
        </div>

        <style>{`
        .loading-grid {
          display: grid;
          grid-template-columns: repeat(3, 64px);
          gap: 10px;
          justify-content: center;
        }

        .loading-card {
          width: 64px;
          height: 64px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(52, 211, 153, 0.10);
          position: relative;
          overflow: hidden;
        }

        .loading-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(52, 211, 153, 0.12),
            transparent
          );
          animation: shimmer 1.2s infinite;
        }

        @keyframes shimmer {
          0% {
            left: -60%;
          }
          100% {
            left: 120%;
          }
        }
      `}</style>
      </div>
    );
  }

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
        .proj-root { font-family: var(--font-body); }

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
          <HeroSlider images={heroImages} />
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
