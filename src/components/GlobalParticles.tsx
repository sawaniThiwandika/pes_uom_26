import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseAlpha: number;
  phase: number;
  isHub: boolean;
  pulseT: number;
  mass: number;
  glowR: number; // animated halo radius multiplier
}
interface Pulse {
  fromIdx: number;
  toIdx: number;
  t: number;
  speed: number;
}
interface EdgeFlash {
  i: number;
  j: number;
  alpha: number;
}

export default function GlobalParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const HUB_COUNT = 8;
    const NODE_COUNT = 72;
    const MAX_DIST = 165;
    const HUB_DIST = 260;
    const MOUSE_RADIUS = 160;
    const MOUSE_FORCE = 3.2;
    const PULSE_RATE = 0.65; // seconds between spawns
    const FLASH_RATE = 1.8;

    let W = 0,
      H = 0,
      animId = 0,
      time = 0;
    const particles: Particle[] = [];
    const pulses: Pulse[] = [];
    const flashes: EdgeFlash[] = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    // Spawn — hubs first, then regular nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      const isHub = i < HUB_COUNT;
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * (isHub ? 0.15 : 0.3),
        vy: (Math.random() - 0.5) * (isHub ? 0.15 : 0.3),
        r: isHub ? Math.random() * 3 + 4 : Math.random() * 1.6 + 0.9,
        baseAlpha: isHub ? 0.82 : Math.random() * 0.55 + 0.22,
        phase: Math.random() * Math.PI * 2,
        isHub,
        pulseT: 0,
        mass: isHub ? 4 : 1,
        glowR: isHub ? Math.random() * 1 + 4 : 1,
      });
    }

    const spawnPulse = () => {
      for (let a = 0; a < 30; a++) {
        const i = Math.floor(Math.random() * NODE_COUNT);
        const j = Math.floor(Math.random() * NODE_COUNT);
        if (i === j) continue;
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const range =
          particles[i].isHub || particles[j].isHub ? HUB_DIST : MAX_DIST;
        if (dist < range) {
          pulses.push({
            fromIdx: i,
            toIdx: j,
            t: 0,
            speed: 0.007 + Math.random() * 0.007,
          });
          return;
        }
      }
    };

    const spawnFlash = () => {
      // Only flash hub-to-hub or hub-to-regular for dramatic effect
      const hubIdxs = particles.slice(0, HUB_COUNT).map((_, i) => i);
      const i = hubIdxs[Math.floor(Math.random() * HUB_COUNT)];
      const j = Math.floor(Math.random() * NODE_COUNT);
      if (i !== j) flashes.push({ i, j, alpha: 1.0 });
    };

    let lastPulse = 0,
      lastFlash = 0;

    const draw = () => {
      time += 0.011;
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x,
        my = mouseRef.current.y;

      // ── Update ──
      for (const p of particles) {
        const dxm = p.x - mx,
          dym = p.y - my;
        const distM = Math.sqrt(dxm * dxm + dym * dym);
        if (distM < MOUSE_RADIUS && distM > 0.5) {
          const force = ((1 - distM / MOUSE_RADIUS) * MOUSE_FORCE) / p.mass;
          p.vx += (dxm / distM) * force * 0.055;
          p.vy += (dym / distM) * force * 0.055;
        }
        p.vx *= 0.984;
        p.vy *= 0.984;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;
        if (p.pulseT > 0) p.pulseT = Math.max(0, p.pulseT - 0.022);
      }

      // ── Edges ──
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const a = particles[i],
            b = particles[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const range = a.isHub || b.isHub ? HUB_DIST : MAX_DIST;
          if (dist >= range) continue;

          const prox = 1 - dist / range;
          const isHH = a.isHub && b.isHub;
          const isMix = a.isHub || b.isHub;
          const edgeAlpha = isHH
            ? prox * 0.65
            : isMix
              ? prox * 0.4
              : prox * 0.2;
          const lw = isHH ? 1.3 : isMix ? 0.85 : 0.55;

          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          if (isHH) {
            grad.addColorStop(0, `rgba(52,211,153,${edgeAlpha})`);
            grad.addColorStop(0.5, `rgba(180,255,220,${edgeAlpha * 0.8})`);
            grad.addColorStop(1, `rgba(52,211,153,${edgeAlpha})`);
          } else {
            const hAlpha = isMix ? edgeAlpha : edgeAlpha * 0.5;
            const nAlpha = isMix ? edgeAlpha * 0.4 : edgeAlpha;
            grad.addColorStop(
              0,
              `rgba(52,211,153,${a.isHub ? hAlpha : nAlpha})`,
            );
            grad.addColorStop(
              1,
              `rgba(52,211,153,${b.isHub ? hAlpha : nAlpha})`,
            );
          }
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = lw;
          ctx.stroke();
        }
      }

      // ── Flash edges ──
      for (let k = flashes.length - 1; k >= 0; k--) {
        const f = flashes[k];
        const a = particles[f.i],
          b = particles[f.j];
        const dx = a.x - b.x,
          dy = a.y - b.y;
        if (Math.sqrt(dx * dx + dy * dy) < HUB_DIST) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(200,255,230,${f.alpha})`;
          ctx.lineWidth = 2;
          ctx.stroke();
          // glow pass
          ctx.strokeStyle = `rgba(52,211,153,${f.alpha * 0.5})`;
          ctx.lineWidth = 6;
          ctx.stroke();
        }
        f.alpha -= 0.04;
        if (f.alpha <= 0) flashes.splice(k, 1);
      }

      // ── Nodes ──
      for (const p of particles) {
        const breathe = Math.sin(time * 1.2 + p.phase) * 0.2;
        const alpha = Math.min(1, p.baseAlpha + breathe + p.pulseT * 0.7);

        if (p.isHub) {
          // Outer corona — wide soft bloom
          const coronaR = p.r * (5 + Math.sin(time * 1.1 + p.phase) * 0.8);
          const corona = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            coronaR,
          );
          corona.addColorStop(0, `rgba(52,211,153,${alpha * 0.45})`);
          corona.addColorStop(0.35, `rgba(52,211,153,${alpha * 0.18})`);
          corona.addColorStop(1, `rgba(52,211,153,0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, coronaR, 0, Math.PI * 2);
          ctx.fillStyle = corona;
          ctx.fill();

          // Second inner glow ring
          const innerR = p.r * 2.8;
          const innerGl = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            innerR,
          );
          innerGl.addColorStop(0, `rgba(180,255,220,${alpha * 0.75})`);
          innerGl.addColorStop(1, `rgba(52,211,153,0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, innerR, 0, Math.PI * 2);
          ctx.fillStyle = innerGl;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220,255,235,${alpha})`;
          ctx.fill();

          // Cross spark (only on hubs — "substation" indicator)
          const sparkLen =
            p.r * 2.5 * (0.8 + Math.sin(time * 2.5 + p.phase) * 0.2);
          ctx.strokeStyle = `rgba(200,255,220,${alpha * 0.55})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x - sparkLen, p.y);
          ctx.lineTo(p.x + sparkLen, p.y);
          ctx.moveTo(p.x, p.y - sparkLen);
          ctx.lineTo(p.x, p.y + sparkLen);
          ctx.stroke();

          // Pulse-hit ring
          if (p.pulseT > 0) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r + 10 * p.pulseT, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(255,255,255,${p.pulseT * 0.9})`;
            ctx.lineWidth = 1.8 * p.pulseT;
            ctx.stroke();
          }
        } else {
          // Regular: soft glow + dot
          const gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.5);
          gr.addColorStop(0, `rgba(52,211,153,${alpha * 0.3})`);
          gr.addColorStop(1, `rgba(52,211,153,0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = gr;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(52,211,153,${alpha})`;
          ctx.fill();
        }
      }

      // ── Pulses (energy-flow dots travelling along edges) ──
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pulse = pulses[k];
        pulse.t += pulse.speed;
        const a = particles[pulse.fromIdx],
          b = particles[pulse.toIdx];
        const px = a.x + (b.x - a.x) * pulse.t;
        const py = a.y + (b.y - a.y) * pulse.t;
        const ease = Math.sin(pulse.t * Math.PI); // fade in + out

        // Outer trail
        const trG = ctx.createRadialGradient(px, py, 0, px, py, 14);
        trG.addColorStop(0, `rgba(220,255,235,${ease * 0.95})`);
        trG.addColorStop(0.3, `rgba(52,211,153,${ease * 0.6})`);
        trG.addColorStop(1, `rgba(52,211,153,0)`);
        ctx.beginPath();
        ctx.arc(px, py, 14, 0, Math.PI * 2);
        ctx.fillStyle = trG;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,255,250,${ease})`;
        ctx.fill();

        if (pulse.t >= 1) {
          particles[pulse.toIdx].pulseT = 1;
          pulses.splice(k, 1);
        }
      }

      // ── Timers ──
      if (time - lastPulse > PULSE_RATE) {
        spawnPulse();
        spawnPulse();
        if (Math.random() < 0.35) spawnPulse(); // triple burst
        lastPulse = time;
      }
      if (time - lastFlash > FLASH_RATE + Math.random()) {
        spawnFlash();
        lastFlash = time;
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.62, // noticeably brighter
      }}
      aria-hidden="true"
    />
  );
}
