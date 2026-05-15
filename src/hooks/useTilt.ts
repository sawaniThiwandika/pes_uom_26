import { useRef, useCallback } from "react";

/** Returns {ref, onMouseMove, onMouseLeave} — attach to any card. */
export function useTilt(maxDeg = 12) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5; // -0.5 … 0.5
    const y = (e.clientY - top)  / height - 0.5;
    const rotY =  x * maxDeg;
    const rotX = -y * maxDeg;
    el.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`;
    el.style.transition = "transform 0.08s linear";
    // Dynamic shine
    const shine = el.querySelector<HTMLElement>(".tilt-shine");
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${(x+0.5)*100}% ${(y+0.5)*100}%, rgba(255,255,255,0.12) 0%, transparent 65%)`;
    }
  }, [maxDeg]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    el.style.transition = "transform 0.5s cubic-bezier(0.23,1,0.32,1)";
    const shine = el.querySelector<HTMLElement>(".tilt-shine");
    if (shine) shine.style.background = "transparent";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}