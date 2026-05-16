import { type Project } from "../../data/projectsData";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

interface Props { project: Project; onClick: () => void; }

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <>
      <style>{`
        .proj-card {
          position: relative; border-radius: 20px; overflow: hidden;
          cursor: pointer; display: flex; flex-direction: column;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s ease, border-color 0.4s ease;
          font-family: 'Outfit', sans-serif;
        }
        .proj-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(52,211,153,0.22);
          border-color: rgba(52,211,153,0.22);
        }

        /* Image */
        .proj-card-img {
          position: relative; height: 220px; overflow: hidden; flex-shrink: 0;
        }
        .proj-card-img img {
          width: 100%; height: 100%; object-fit: cover; object-position: center;
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .proj-card:hover .proj-card-img img { transform: scale(1.06); }
        .proj-card-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(6,13,7,0.1) 0%, rgba(6,13,7,0.7) 100%);
          transition: opacity 0.35s ease;
        }
        .proj-card:hover .proj-card-img-overlay { opacity: 0.85; }

        /* Top shimmer on hover */
        .proj-card-shimmer {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #34d399, transparent);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .proj-card:hover .proj-card-shimmer { opacity: 1; }

        /* Image badge */
        .proj-card-img-badge {
          position: absolute; bottom: 12px; left: 12px;
          display: flex; align-items: center; gap: 5px;
          padding: 4px 10px; border-radius: 999px;
          background: rgba(6,13,7,0.75); backdrop-filter: blur(10px);
          border: 1px solid rgba(52,211,153,0.25);
          font-size: 10px; font-weight: 600;
          color: #6ee7b7; letter-spacing: 0.08em;
        }

        /* Info panel */
        .proj-card-body {
          padding: 20px; display: flex; flex-direction: column;
          gap: 10px; flex: 1;
        }
        .proj-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px; font-weight: 600; color: #fff;
          line-height: 1.35; display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .proj-card-preview {
          font-size: 12.5px; font-weight: 300; color: rgba(255,255,255,0.42);
          line-height: 1.6; display: -webkit-box;
          -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
          flex: 1;
        }

        /* CTA row */
        .proj-card-cta {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: auto;
        }
        .proj-card-cta-btn {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600; color: #34d399;
          letter-spacing: 0.05em;
          transition: gap 0.22s ease;
        }
        .proj-card:hover .proj-card-cta-btn { gap: 10px; }
        .proj-card-cta-arrow {
          width: 26px; height: 26px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(52,211,153,0.1); border: 1px solid rgba(52,211,153,0.25);
          color: #34d399; font-size: 10px;
          transition: all 0.25s ease;
        }
        .proj-card:hover .proj-card-cta-arrow {
          background: rgba(52,211,153,0.2);
          transform: rotate(-45deg);
        }
      `}</style>

      <div className="proj-card" onClick={onClick} data-cursor-hover>
        <div className="proj-card-shimmer" />

        {/* Image */}
        <div className="proj-card-img">
          <img src={project.images[0]} alt={project.title} />
          <div className="proj-card-img-overlay" />
          <div className="proj-card-img-badge">
            <FaCalendarAlt size={8} /> {project.date}
          </div>
        </div>

        {/* Body */}
        <div className="proj-card-body">
          <h3 className="proj-card-title">{project.title}</h3>
          <p className="proj-card-preview">{project.preview}</p>

          <div className="proj-card-cta">
            <div className="proj-card-cta-btn">
              Read More
              <div className="proj-card-cta-arrow">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}