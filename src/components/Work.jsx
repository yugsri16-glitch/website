import "./Work.css";

const projects = [
  {
    num: "01",
    title: "AI Automation Agent",
    category: "AI / Coding",
    desc: "Custom AI agent built with LLM APIs for automated task execution and workflow management.",
    tags: ["Python", "OpenAI API", "Automation"],
    accent: "#FFE000",
  },
  {
    num: "02",
    title: "Telegram Bot Suite",
    category: "Bot Development",
    desc: "Full-featured Telegram bot with inline keyboards, payment integration, and admin panel.",
    tags: ["Python", "Telegram API", "SQL"],
    accent: "#ffffff",
  },
  {
    num: "03",
    title: "Viral Thumbnail Pack",
    category: "Thumbnail Design",
    desc: "High-CTR YouTube thumbnail series. Delivered results — higher click rates from day one.",
    tags: ["Photoshop", "Typography", "Color"],
    accent: "#FFE000",
  },
  {
    num: "04",
    title: "Brand Identity Kit",
    category: "Graphic Design",
    desc: "Complete brand identity — logo, color palette, typography, social templates, and guidelines.",
    tags: ["Illustrator", "Figma", "Branding"],
    accent: "#ffffff",
  },
  {
    num: "05",
    title: "YouTube Growth Campaign",
    category: "Social Media Marketing",
    desc: "Content strategy + consistent posting that grew a channel from 0 to real engagement.",
    tags: ["SEO", "Analytics", "Content Strategy"],
    accent: "#FFE000",
  },
  {
    num: "06",
    title: "Cinematic Reel Edit",
    category: "Video Design",
    desc: "Short-form video with motion graphics, color grading, and energy-filled cuts for max retention.",
    tags: ["Premiere Pro", "After Effects", "Motion"],
    accent: "#ffffff",
  },
];

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Portfolio</div>
          <h2 className="big-heading">
            SELECTED<br /><span className="highlight">WORK</span>
          </h2>
        </div>

        <div className="projects-list">
          {projects.map((p, i) => (
            <div
              key={p.num}
              className="project-row reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <span className="proj-num" style={{ color: p.accent }}>{p.num}</span>
              <div className="proj-main">
                <div className="proj-top">
                  <h3 className="proj-title">{p.title}</h3>
                  <span className="proj-cat">{p.category}</span>
                </div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                </div>
              </div>
              <div className="proj-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
