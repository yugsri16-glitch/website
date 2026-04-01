import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left reveal">
            <div className="section-label">About Me</div>
            <h2 className="big-heading">
              THE KID<br />
              WHO <span className="highlight">BUILDS</span><br />
              THINGS
            </h2>
            <div className="about-card">
              <div className="about-card-inner">
                <div className="avatar-ring">
                  <div className="avatar-inner">
                    <span className="avatar-emoji">⚡</span>
                  </div>
                  <div className="ring ring-1" />
                  <div className="ring ring-2" />
                  <div className="ring ring-3" />
                </div>
                <div className="about-info">
                  <div className="info-row">
                    <span className="info-key">NAME</span>
                    <span className="info-val">Yug Srivastava</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">AGE</span>
                    <span className="info-val highlight">18 Years Old</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">BASED IN</span>
                    <span className="info-val">Kanpur, India 🇮🇳</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">STATUS</span>
                    <span className="info-val status-available">● Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right reveal">
            <p className="about-body">
              I'm a <span className="highlight">self-taught multi-skilled creator</span> who doesn't wait for permission to build things. At 18, I've already mastered coding, AI, bots, design, and marketing — and I'm just getting started.
            </p>
            <p className="about-body">
              I build <span className="highlight">AI agents</span> that actually work, bots that automate everything, videos that hit, and designs that stop the scroll. Every project I touch is built with the same obsession: <em>make it badass or don't make it at all.</em>
            </p>
            <p className="about-body">
              I've already earned real money doing what I love — and I'm not slowing down. Whether you need a coder, a designer, a marketer, or all three in one — <span className="highlight">I'm your guy.</span>
            </p>

            <div className="about-badges">
              {["Self-Taught", "Multi-Skilled", "Fast Deliveries", "Results-Driven", "18 y/o Beast"].map(b => (
                <span key={b} className="badge">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
