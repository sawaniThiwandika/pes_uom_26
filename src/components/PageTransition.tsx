import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Mounts a thin emerald flash-line + page fade on every route change.
 * No external library needed — pure CSS + useLocation.
 */
export default function PageTransition() {
  const location = useLocation();
  const barRef   = useRef<HTMLDivElement>(null);
  const pageRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar  = barRef.current;
    const page = pageRef.current;
    if (!bar || !page) return;

    // Reset
    bar.style.transition  = "none";
    bar.style.width       = "0%";
    bar.style.opacity     = "1";
    page.style.transition = "none";
    page.style.opacity    = "0";
    page.style.transform  = "translateY(10px)";

    // Trigger reflow
    void bar.offsetWidth;

    // Run: bar sweeps across, page fades in
    bar.style.transition  = "width 0.55s cubic-bezier(0.22,1,0.36,1)";
    bar.style.width       = "100%";
    page.style.transition = "opacity 0.45s ease 0.1s, transform 0.45s cubic-bezier(0.22,1,0.36,1) 0.1s";
    page.style.opacity    = "1";
    page.style.transform  = "translateY(0)";

    // Fade bar out
    const t = setTimeout(() => {
      bar.style.transition = "opacity 0.3s ease";
      bar.style.opacity    = "0";
    }, 600);

    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      {/* Progress bar */}
      <div ref={barRef} style={{
        position: "fixed", top: 0, left: 0, zIndex: 99999,
        height: "2px", width: "0%",
        background: "linear-gradient(90deg, #34d399, rgba(180,255,220,0.8), #34d399)",
        boxShadow: "0 0 12px rgba(52,211,153,0.7), 0 0 28px rgba(52,211,153,0.4)",
        pointerEvents: "none",
      }} />

      {/* Page fade overlay (invisible by default) */}
      <div ref={pageRef} style={{
        position: "fixed", inset: 0, zIndex: -1,
        pointerEvents: "none", opacity: 1,
      }} />
    </>
  );
}