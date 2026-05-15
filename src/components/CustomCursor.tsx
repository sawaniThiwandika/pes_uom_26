import { useEffect, useRef } from "react";

/**
 * Replaces native cursor on desktop with an emerald energy-orb.
 * Falls back to native cursor on touch devices.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);
  const clicking = useRef(false);

  useEffect(() => {
    // Only activate on non-touch screens
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const down = () => {
      clicking.current = true;
    };
    const up = () => {
      clicking.current = false;
    };

    // Highlight interactive elements
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a,button,[data-cursor-hover]");
      if (ringRef.current)
        ringRef.current.classList.toggle("cursor-hover", !!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", over);

    const tick = () => {
      const dot = dotRef.current;
      const r = ringRef.current;
      if (dot && r) {
        // Dot snaps instantly
        dot.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
        // Ring lerps (lag for trailing effect)
        ring.current.x += (pos.current.x - ring.current.x) * 0.14;
        ring.current.y += (pos.current.y - ring.current.y) * 0.14;
        r.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px) scale(${clicking.current ? 0.75 : 1})`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf.current);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <style>{`
        .custom-cursor-dot {
          position: fixed; top: 0; left: 0; z-index: 99999;
          width: 8px; height: 8px; border-radius: 50%;
          background: #34d399;
          pointer-events: none;
          will-change: transform;
          box-shadow: 0 0 8px #34d399, 0 0 18px rgba(52,211,153,0.5);
        }
        .custom-cursor-ring {
          position: fixed; top: 0; left: 0; z-index: 99998;
          width: 36px; height: 36px; border-radius: 50%;
          border: 1.5px solid rgba(52,211,153,0.5);
          pointer-events: none;
          will-change: transform;
          transition: transform 0.08s linear, width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }
        .custom-cursor-ring.cursor-hover {
          width: 52px; height: 52px;
          border-color: rgba(52,211,153,0.9);
          background: rgba(52,211,153,0.06);
          margin: -8px 0 0 -8px;
        }
      `}</style>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
