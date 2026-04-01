import "./Marquee.css";

export default function Marquee() {
  const items = [
    "AI AGENTS", "BOT DEVELOPMENT", "VIDEO EDITING", "GRAPHIC DESIGN",
    "SOCIAL MEDIA", "THUMBNAIL DESIGN", "WEB DEV", "AUTOMATION",
    "CONTENT CREATION", "MOTION DESIGN", "BRAND IDENTITY", "CODING",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="marquee-strip">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
