import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="logo-bracket">[</span>YUG<span className="logo-dot">_</span>
            <span className="logo-yellow">SRI</span><span className="logo-bracket">]</span>
          </div>
          <p className="footer-copy">
            © 2025 Yug Srivastava · Kanpur, India · Built with 🔥
          </p>
          <div className="footer-links">
            <a href="https://instagram.com/yugsri3" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://t.me/roch3003" target="_blank" rel="noopener noreferrer">TG</a>
            <a href="#" target="_blank" rel="noopener noreferrer">DC</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
