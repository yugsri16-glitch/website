import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let particles = [];
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,224,0,${p.opacity})`;
        ctx.fill();
      });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,224,0,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-scanline" />

      <div className="hero-content container">
        <div className="hero-tag reveal visible">
          <span className="blink-dot" />
          <span>Available for hire — 2026</span>
        </div>

        <div className="hero-name-wrap">
          <div className="glitch-wrapper reveal visible">
            <h1 className="hero-name" data-text="YUG">YUG</h1>
          </div>
          <div className="glitch-wrapper reveal visible" style={{ animationDelay: "0.1s" }}>
            <h1 className="hero-name yellow-stroke" data-text="SRIVASTAVA">SRIVASTAVA</h1>
          </div>
        </div>

        <div className="hero-tagline reveal visible">
          <span className="type-text">Coder · AI Builder · Bot Dev · Motion Designer · Growth Hacker</span>
        </div>

        <p className="hero-desc reveal visible">
          18 y/o creative technologist from <span className="highlight">Kanpur, India</span> — turning ideas into digital experiences that actually hit different.
        </p>

        <div className="hero-ctas reveal visible">
          <a href="#work" className="btn-primary">
            <span>View Work</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn-outline">Let's Talk</a>
        </div>

        <div className="hero-stats reveal visible">
          {[
            { num: "18", label: "Years Old" },
            { num: "7+", label: "Skills Mastered" },
            { num: "∞", label: "Passion Level" },
            { num: "₹", label: "Revenue Earned" },
          ].map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>SCROLL</span>
      </div>

      <div className="hero-bg-text">CREATOR</div>
    </section>
  );
}
