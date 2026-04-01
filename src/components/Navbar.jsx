import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Services", "Work", "Contact"];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">[</span>
          YUG
          <span className="logo-dot">_</span>
          <span className="logo-yellow">SRI</span>
          <span className="logo-bracket">]</span>
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((l, i) => (
            <li key={l} style={{ animationDelay: `${i * 0.07}s` }}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                <span className="nav-num">0{i + 1}.</span> {l}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </li>
        </ul>

        <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
