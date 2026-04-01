import "./Skills.css";

const skills = [
  {
    icon: "⚙️", title: "Coding & Dev",
    desc: "Full-stack web, automation scripts, and custom tools that work flawlessly.",
    tags: ["HTML/CSS", "JavaScript", "Python", "React"],
    level: 88,
  },
  {
    icon: "🤖", title: "AI Agents",
    desc: "Building intelligent agents and pipelines with modern AI models that solve real problems.",
    tags: ["LLMs", "Automation", "APIs", "Prompt Eng"],
    level: 92,
  },
  {
    icon: "🔧", title: "Bot Development",
    desc: "Discord, Telegram, WhatsApp bots — from moderation to full automation.",
    tags: ["Discord.js", "Telegram API", "Webhooks"],
    level: 90,
  },
  {
    icon: "🎬", title: "Video Design",
    desc: "YouTube edits, reels, short-form content — high-energy cuts with motion effects.",
    tags: ["Premiere Pro", "After Effects", "CapCut"],
    level: 85,
  },
  {
    icon: "📢", title: "Social Media Marketing",
    desc: "Strategy, content, and growth hacking across Instagram, YouTube, and Telegram.",
    tags: ["Growth Hacking", "Content", "Analytics"],
    level: 82,
  },
  {
    icon: "🎨", title: "Graphic Design",
    desc: "Logos, banners, posters, brand kits — clean and bold visuals that convert.",
    tags: ["Photoshop", "Illustrator", "Figma", "Canva"],
    level: 87,
  },
  {
    icon: "🖼️", title: "Thumbnail Design",
    desc: "CTR-optimized thumbnails for YouTube that stop the scroll and get the click.",
    tags: ["Photoshop", "Typography", "Color Theory"],
    level: 94,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">What I Do</div>
          <h2 className="big-heading">
            MY <span className="highlight">SKILL</span><br />ARSENAL
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div
              key={s.title}
              className="skill-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-top">
                <h3 className="skill-title">{s.title}</h3>
                <span className="skill-percent">{s.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ "--w": `${s.level}%` }} />
              </div>
              <p className="skill-desc">{s.desc}</p>
              <div className="skill-tags">
                {s.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
              <div className="card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
