/*
import { useState, useEffect } from "react";
import type { Project } from "../../data/projectsData";
import { FaTimes, FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";

interface Props { project: Project | null; onClose: () => void; }

export default function ProjectModal({ project, onClose }: Props) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => { setImgIndex(0); }, [project]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!project) return;
      if (e.key === "ArrowRight") setImgIndex(i => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft")  setImgIndex(i => (i - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (project) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  if (!project) return null;

  const prevImg = () => setImgIndex(i => (i - 1 + project.images.length) % project.images.length);
  const nextImg = () => setImgIndex(i => (i + 1) % project.images.length);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700&family=Outfit:wght@300;400;500;600&display=swap');
        .modal-root { font-family: var(--font-body); }
        .modal-serif { font-family: 'Cormorant Garamond', serif; }

        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        @keyframes imgFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .modal-img-btn {
          transition: all 0.22s ease;
        }
        .modal-img-btn:hover {
          background: rgba(52,211,153,0.2) !important;
          border-color: rgba(52,211,153,0.5) !important;
          color: #34d399 !important;
        }

        .modal-thumb {
          transition: all 0.2s ease;
        }
        .modal-thumb:hover { opacity: 1 !important; }

        .modal-close-btn {
          transition: all 0.22s ease;
        }
        .modal-close-btn:hover {
          background: rgba(248,113,113,0.15) !important;
          border-color: rgba(248,113,113,0.4) !important;
          color: #f87171 !important;
        }

        .modal-scroll::-webkit-scrollbar { width: 4px; }
        .modal-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.03); }
        .modal-scroll::-webkit-scrollbar-thumb { background: rgba(52,211,153,0.25); border-radius: 2px; }
      `}</style>

      {/!* ── Backdrop ── *!/}
      <div
        className="modal-root fixed inset-0 z-[9500] flex items-center justify-center p-4 sm:p-6"
        style={{ background: "rgba(3,7,4,0.88)", backdropFilter: "blur(16px)" }}
        onClick={onClose}
      >
        {/!* ── Modal shell ── *!/}
        <div
          className="relative w-full flex flex-col"
          style={{
            maxWidth: "720px",
            maxHeight: "90vh",
            animation: "modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/!* Close button — floats outside top-right *!/}
          <button
            onClick={onClose}
            className="modal-close-btn absolute flex items-center justify-center z-20"
            style={{
              top: "-14px", right: "-14px",
              width: "38px", height: "38px", borderRadius: "12px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "rgba(255,255,255,0.6)",
              cursor: "pointer",
            }}
            aria-label="Close"
          >
            <FaTimes size={13} />
          </button>

          {/!* ── Card ── *!/}
          <div
            className="modal-scroll flex flex-col rounded-2xl overflow-y-auto"
            style={{
              background: "rgba(8,16,9,0.97)",
              border: "1px solid rgba(52,211,153,0.15)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(52,211,153,0.08)",
              maxHeight: "90vh",
            }}
          >
            {/!* ── Emerald top line ── *!/}
            <div style={{
              height: "2px", flexShrink: 0,
              background: "linear-gradient(90deg, transparent, #34d399, rgba(52,211,153,0.4), transparent)",
            }} />

            {/!* ── Image area ── *!/}
            <div className="relative flex-shrink-0 overflow-hidden" style={{ height: "clamp(200px,38vh,320px)" }}>
              <img
                key={imgIndex}
                src={project.images[imgIndex]}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{ animation: "imgFade 0.3s ease", objectPosition: "center" }}
              />

              {/!* Gradient to body *!/}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "linear-gradient(to bottom, rgba(8,16,9,0.05) 40%, rgba(8,16,9,0.95) 100%)",
              }} />

              {/!* Side nav arrows *!/}
              {project.images.length > 1 && (
                <>
                  <button onClick={prevImg}
                    className="modal-img-btn absolute top-1/2 left-3 -translate-y-1/2 flex items-center justify-center"
                    style={{
                      width: "36px", height: "36px", borderRadius: "10px",
                      background: "rgba(6,13,7,0.7)", backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.7)", cursor: "pointer",
                    }}>
                    <FaChevronLeft size={12} />
                  </button>
                  <button onClick={nextImg}
                    className="modal-img-btn absolute top-1/2 right-3 -translate-y-1/2 flex items-center justify-center"
                    style={{
                      width: "36px", height: "36px", borderRadius: "10px",
                      background: "rgba(6,13,7,0.7)", backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.7)", cursor: "pointer",
                    }}>
                    <FaChevronRight size={12} />
                  </button>

                  {/!* Dot indicators *!/}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {project.images.map((_, i) => (
                      <button key={i} onClick={() => setImgIndex(i)}
                        style={{
                          width: i === imgIndex ? "20px" : "6px", height: "6px",
                          borderRadius: "999px", border: "none", padding: 0, cursor: "pointer",
                          background: i === imgIndex ? "#34d399" : "rgba(255,255,255,0.3)",
                          transition: "all 0.3s ease",
                        }} />
                    ))}
                  </div>
                </>
              )}

              {/!* Thumbnail strip — only when multiple images *!/}
              {project.images.length > 1 && (
                <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 px-4">
                  {project.images.map((img, i) => (
                    <button key={i} onClick={() => setImgIndex(i)}
                      className="modal-thumb flex-shrink-0 rounded-lg overflow-hidden"
                      style={{
                        width: "44px", height: "30px",
                        border: `1.5px solid ${i === imgIndex ? "#34d399" : "rgba(255,255,255,0.2)"}`,
                        opacity: i === imgIndex ? 1 : 0.45,
                        cursor: "pointer", transition: "all 0.2s ease",
                        boxShadow: i === imgIndex ? "0 0 10px rgba(52,211,153,0.3)" : "none",
                      }}>
                      <img src={img} className="w-full h-full object-cover" alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/!* ── Body ── *!/}
            <div style={{ padding: "20px 28px 32px", flexShrink: 0 }}>
              {/!* Date badge *!/}
              <div style={{ marginBottom: "14px" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "5px",
                  fontFamily: "var(--font-body)", fontSize: "10px",
                  fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "#6ee7b7", background: "rgba(52,211,153,0.08)",
                  border: "1px solid rgba(52,211,153,0.22)", borderRadius: "999px",
                  padding: "4px 12px",
                }}>
                  <FaCalendarAlt size={8} /> {project.date}
                </span>
              </div>

              {/!* Title *!/}
              <h2 className="modal-serif text-white leading-tight"
                style={{ fontSize: "clamp(18px,2.5vw,26px)", fontWeight: 600, marginBottom: "12px" }}>
                {project.title}
              </h2>

              {/!* Emerald divider *!/}
              <div style={{
                width: "36px", height: "2px", borderRadius: "999px",
                background: "linear-gradient(90deg, #34d399, rgba(52,211,153,0.3))",
                marginBottom: "16px",
              }} />

              {/!* Description *!/}
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "13.5px",
                fontWeight: 300, lineHeight: "1.85",
                color: "rgba(255,255,255,0.55)", whiteSpace: "pre-line",
              }}>
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}*/


import { useState, useEffect, useRef } from "react";
import type { Project } from "../../data/projectsData";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaFacebookF,
} from "react-icons/fa";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [imgIndex, setImgIndex] = useState(0);
  const [prevProject, setPrevProject] = useState(project);
  const thumbsRef = useRef<HTMLDivElement>(null);

  // Reset to the first photo when a different project opens.
  // Done during render (not in an effect) to avoid cascading renders.
  if (project !== prevProject) {
    setPrevProject(project);
    setImgIndex(0);
  }

  // Keyboard controls
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!project || project.images.length < 2) return;
      if (e.key === "ArrowRight")
        setImgIndex((i) => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft")
        setImgIndex((i) => (i - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (!project) return;
    const html = document.documentElement;
    const body = document.body;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPaddingRight: body.style.paddingRight,
    };
    // Width of the page scrollbar, so the page doesn't jump when it disappears
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      body.style.paddingRight = prev.bodyPaddingRight;
    };
  }, [project]);

  // Keep the active thumbnail in view
  useEffect(() => {
    const el = thumbsRef.current?.children[imgIndex] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [imgIndex]);

  if (!project) return null;

  const total = project.images.length;
  const prevImg = () => setImgIndex((i) => (i - 1 + total) % total);
  const nextImg = () => setImgIndex((i) => (i + 1) % total);

  return (
      <>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700&family=Outfit:wght@300;400;500;600&display=swap');

        .pm-backdrop {
          position: fixed; inset: 0; z-index: 9500;
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
          background: rgba(3,7,4,0.82);
          backdrop-filter: blur(14px);
          font-family: var(--font-body);
          animation: pmFade 0.25s ease both;
          overscroll-behavior: contain;
        }
        .pm-shell {
          position: relative; width: 100%; max-width: 1040px;
          height: min(86vh, 660px);
          display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
          border-radius: 22px; overflow: hidden;
          background: #0a130b;
          border: 1px solid rgba(52,211,153,0.16);
          box-shadow: 0 50px 120px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.03);
          animation: pmIn 0.4s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes pmFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pmIn {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes pmImg { from { opacity: 0; } to { opacity: 1; } }

        /* ── Gallery ── */
        .pm-gallery {
          position: relative; display: flex; flex-direction: column;
          min-height: 0; background: #060d07;
        }
        .pm-stage {
          position: relative; flex: 1; min-height: 0; overflow: hidden;
          background: #060d07;
        }
        .pm-stage-img {
          position: absolute; inset: 0;
          display: block;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          animation: pmImg 0.3s ease both;
        }
        .pm-nav {
          position: absolute; top: 50%; z-index: 2; transform: translateY(-50%);
          width: 40px; height: 40px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(6,13,7,0.65); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.8); cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .pm-nav:hover {
          background: rgba(52,211,153,0.2);
          border-color: rgba(52,211,153,0.5);
          color: #34d399;
        }
        .pm-nav.prev { left: 14px; }
        .pm-nav.next { right: 14px; }
        .pm-counter {
          position: absolute; left: 14px; bottom: 14px; z-index: 2;
          padding: 4px 11px; border-radius: 999px;
          background: rgba(6,13,7,0.7); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.75);
          font-variant-numeric: tabular-nums;
        }

        .pm-thumbs {
          display: flex; gap: 8px; padding: 12px 14px;
          overflow-x: auto; flex-shrink: 0;
          overscroll-behavior: contain;
          background: #08100a;
          border-top: 1px solid rgba(255,255,255,0.06);
          scrollbar-width: thin; scrollbar-color: rgba(52,211,153,0.3) transparent;
        }
        .pm-thumb {
          flex: 0 0 auto; width: 64px; height: 46px; padding: 0;
          border-radius: 9px; overflow: hidden; cursor: pointer;
          border: 1.5px solid rgba(255,255,255,0.1);
          opacity: 0.5; background: none;
          transition: opacity 0.2s ease, border-color 0.2s ease;
        }
        .pm-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .pm-thumb:hover { opacity: 0.9; }
        .pm-thumb.active { opacity: 1; border-color: #34d399; }

        /* ── Content ── */
        .pm-content {
          display: flex; flex-direction: column; min-height: 0;
          border-left: 1px solid rgba(255,255,255,0.06);
        }
        .pm-content-head { padding: 30px 32px 0; flex-shrink: 0; }
        .pm-date {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 12px; border-radius: 999px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          color: #6ee7b7; background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.22);
        }
        .pm-title {
          margin: 16px 0 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 2.4vw, 30px); font-weight: 600;
          line-height: 1.2; color: #fff;
        }
        .pm-rule {
          width: 100%; height: 1px; margin-top: 20px;
          background: linear-gradient(90deg, rgba(52,211,153,0.45), rgba(255,255,255,0.06) 60%, transparent);
        }
        .pm-desc {
          flex: 1; min-height: 0; overflow-y: auto;
          overscroll-behavior: contain;
          padding: 20px 32px 24px;
          font-size: 14px; font-weight: 300; line-height: 1.85;
          color: rgba(255,255,255,0.62); white-space: pre-line;
          scrollbar-width: thin; scrollbar-color: rgba(52,211,153,0.3) transparent;
        }
        .pm-foot {
          flex-shrink: 0; padding: 16px 32px;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          border-top: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.015);
        }
        .pm-foot-note { font-size: 12px; color: rgba(255,255,255,0.35); }

        .pm-album {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 8px 8px 16px; border-radius: 12px;
          font-size: 13px; font-weight: 600; letter-spacing: 0.02em;
          color: #34d399; text-decoration: none; cursor: pointer;
          background: rgba(52,211,153,0.1);
          border: 1px solid rgba(52,211,153,0.28);
          transition: background 0.2s ease, border-color 0.2s ease, gap 0.2s ease;
        }
        .pm-album:hover {
          background: rgba(52,211,153,0.2);
          border-color: rgba(52,211,153,0.5);
          gap: 12px;
        }
        .pm-album-icon {
          width: 26px; height: 26px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(52,211,153,0.16); font-size: 11px;
        }

        .pm-close {
          position: absolute; top: 14px; right: 14px; z-index: 5;
          width: 38px; height: 38px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(6,13,7,0.7); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.7); cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .pm-close:hover {
          background: rgba(248,113,113,0.18);
          border-color: rgba(248,113,113,0.45);
          color: #f87171;
        }

        .pm-nav:focus-visible, .pm-thumb:focus-visible,
        .pm-album:focus-visible, .pm-close:focus-visible {
          outline: 2px solid #34d399; outline-offset: 2px;
        }

        /* ── Tablet / mobile: stack ── */
        @media (max-width: 820px) {
          .pm-backdrop { padding: 12px; }
          .pm-shell {
            grid-template-columns: 1fr;
            grid-template-rows: auto minmax(0, 1fr);
            height: min(92vh, 780px);
          }
          .pm-gallery { height: clamp(220px, 38vh, 320px); }
          .pm-content { border-left: none; border-top: 1px solid rgba(255,255,255,0.06); }
          .pm-content-head { padding: 22px 22px 0; }
          .pm-desc { padding: 16px 22px 20px; }
          .pm-foot { padding: 14px 22px; }
          .pm-thumb { width: 54px; height: 40px; }
        }
        @media (max-width: 480px) {
          .pm-gallery { height: clamp(200px, 34vh, 260px); }
          .pm-foot-note { display: none; }
          .pm-foot { justify-content: flex-end; }
        }

        @media (prefers-reduced-motion: reduce) {
          .pm-backdrop, .pm-shell, .pm-stage-img { animation: none; }
        }
      `}</style>

        <div className="pm-backdrop" onClick={onClose}>
          <div
              className="pm-shell"
              role="dialog"
              aria-modal="true"
              aria-label={project.title}
              onClick={(e) => e.stopPropagation()}
          >
            <button className="pm-close" onClick={onClose} aria-label="Close">
              <FaTimes size={13} />
            </button>

            {/* ── Gallery ── */}
            <div className="pm-gallery">
              <div className="pm-stage">
                <img
                    key={imgIndex}
                    className="pm-stage-img"
                    src={project.images[imgIndex]}
                    alt={`${project.title} (photo ${imgIndex + 1} of ${total})`}
                />

                {total > 1 && (
                    <>
                      <button className="pm-nav prev" onClick={prevImg} aria-label="Previous photo">
                        <FaChevronLeft size={12} />
                      </button>
                      <button className="pm-nav next" onClick={nextImg} aria-label="Next photo">
                        <FaChevronRight size={12} />
                      </button>
                      <div className="pm-counter">
                        {imgIndex + 1} / {total}
                      </div>
                    </>
                )}
              </div>

              {total > 1 && (
                  <div className="pm-thumbs" ref={thumbsRef}>
                    {project.images.map((img, i) => (
                        <button
                            key={i}
                            className={`pm-thumb${i === imgIndex ? " active" : ""}`}
                            onClick={() => setImgIndex(i)}
                            aria-label={`Show photo ${i + 1}`}
                            aria-current={i === imgIndex}
                        >
                          <img src={img} alt="" />
                        </button>
                    ))}
                  </div>
              )}
            </div>

            {/* ── Content ── */}
            <div className="pm-content">
              <div className="pm-content-head">
              <span className="pm-date">
                <FaCalendarAlt size={9} /> {project.date}
              </span>
                <h2 className="pm-title">{project.title}</h2>
                <div className="pm-rule" />
              </div>

              <div className="pm-desc">{project.description}</div>

              {project.album_link && (
                  <div className="pm-foot">
                    <span className="pm-foot-note">More photos on Facebook</span>
                    <a
                        className="pm-album"
                        href={project.album_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      View Album
                      <span className="pm-album-icon">
                    <FaFacebookF />
                  </span>
                    </a>
                  </div>
              )}
            </div>
          </div>
        </div>
      </>
  );
}