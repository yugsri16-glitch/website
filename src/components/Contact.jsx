import "./Contact.css";

const socials = [
  { label: "Instagram", handle: "@yugsri3", icon: "📸", url: "https://instagram.com/yugsri3", color: "#E1306C" },
  { label: "Telegram", handle: "@roch3003", icon: "✈️", url: "https://t.me/roch3003", color: "#2CA5E0" },
  { label: "Discord", handle: "flameses456", icon: "🎮", url: "#", color: "#7289DA" },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-inner reveal">
          <div className="contact-left">
            <div className="section-label">Get In Touch</div>
            <h2 className="big-heading">
              LET'S<br /><span className="highlight">WORK</span><br />TOGETHER
            </h2>
            <p className="contact-body">
              Got a project? Need a thumbnail? Want an AI agent built? Want fire social media content? Hit me up — I respond fast and deliver faster.
            </p>
            <div className="contact-socials">
              {socials.map(s => (
                <a key={s.label} href={s.url} className="social-card" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">{s.icon}</span>
                  <div className="social-info">
                    <span className="social-label">{s.label}</span>
                    <span className="social-handle">{s.handle}</span>
                  </div>
                  <svg className="social-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <div className="hire-card">
              <div className="hire-header">
                <span className="hire-badge">OPEN TO WORK</span>
                <span className="hire-status-dot" />
              </div>
              <h3 className="hire-title">Hire Me for</h3>
              <ul className="hire-list">
                {[
                  "YouTube Thumbnail Design",
                  "Discord / Telegram Bots",
                  "AI Agent Development",
                  "Video Editing & Reels",
                  "Social Media Growth",
                  "Graphic Design & Branding",
                  "Web Development",
                  "Automation Scripts",
                ].map(item => (
                  <li key={item} className="hire-item">
                    <span className="hire-check">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://instagram.com/yugsri3" className="btn-primary hire-btn" target="_blank" rel="noopener noreferrer">
                <span>DM on Instagram</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
