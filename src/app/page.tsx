"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const navRef = useRef<HTMLElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    alert(
      `Thank you for joining the beta! We'll contact you at ${email} when Genie launches.`
    );
    setEmail("");
  };

  useEffect(() => {
    const nav = navRef.current;
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 50) {
        (nav.style as CSSStyleDeclaration).background = "rgba(10, 14, 39, 0.95)";
        (nav.style as CSSStyleDeclaration).padding = "15px 5%";
      } else {
        (nav.style as CSSStyleDeclaration).background = "rgba(10, 14, 39, 0.8)";
        (nav.style as CSSStyleDeclaration).padding = "20px 5%";
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    const anchors = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[];
    const onClick = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!targetId) return;
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    anchors.forEach((a) => a.addEventListener("click", onClick));

    return () => {
      window.removeEventListener("scroll", onScroll);
      anchors.forEach((a) => a.removeEventListener("click", onClick));
    };
  }, []);

  return (
    <>
      <div className="bg-animation" />

      <nav ref={navRef}>
        <div className="nav-container">
          <div className="logo">Genie ✨</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">🌙 Trusted by Muslims Worldwide</div>
            <h1>
              Hi, I'm <span className="gradient-text">Genie</span>, the first AI-powered
              matchmaker for Muslims globally.
            </h1>
            <p className="hero-description">
              The future of matchmaking is here. Genie uses Voice AI in 10 major
              languages, validated psychological frameworks, and advanced
              algorithmic matching to create meaningful values-based connections
              for Muslims globally.
            </p>
            <form className="email-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="cta-button">
                Join Beta
              </button>
            </form>
          </div>

          <div className="hero-visual">
            <div className="floating-card">
              <div className="match-animation">
                <div className="profile-circle">👤</div>
                <div className="heart-icon">💝</div>
                <div className="profile-circle">👤</div>
              </div>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Languages</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">AI</div>
                  <div className="stat-label">Powered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Halal</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Revolutionary Features</h2>
            <p className="section-subtitle">
              Experience matchmaking reimagined with cutting-edge AI technology
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎙️</div>
              <h3 className="feature-title">Voice AI Technology</h3>
              <p className="feature-description">
                Communicate naturally in your preferred language. Our Voice AI
                understands context, emotion, and cultural nuances across 10
                major languages.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3 className="feature-title">Psychological Matching</h3>
              <p className="feature-description">
                Built on validated psychological frameworks to ensure
                compatibility beyond surface-level preferences, creating lasting
                connections.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">Global Muslim Network</h3>
              <p className="feature-description">
                Connect with compatible Muslims worldwide while respecting
                Islamic values and cultural traditions in the matchmaking
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="app-availability">
            <p className="availability-text">
              Available on Android and iOS starting 2026
            </p>
            <div className="app-badges">
              <div className="app-badge">
                <span className="app-badge-icon">📱</span>
                <span>App Store</span>
              </div>
              <div className="app-badge">
                <span className="app-badge-icon">🤖</span>
                <span>Google Play</span>
              </div>
            </div>
          </div>
          <p className="copyright">© 2025 Genie. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --dark-bg: #0a0e27;
          --light-text: #ffffff;
          --muted-text: #a0a9c9;
          --accent: #667eea;
          --card-bg: rgba(255, 255, 255, 0.03);
          --border-color: rgba(255, 255, 255, 0.1);
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: var(--dark-bg);
          color: var(--light-text);
          overflow-x: hidden;
          line-height: 1.6;
        }

        .bg-animation {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
          background: linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%);
          overflow: hidden;
        }

        .bg-animation::before,
        .bg-animation::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 20s infinite ease-in-out;
        }

        .bg-animation::before {
          background: var(--primary-gradient);
          top: -200px;
          right: -200px;
          animation-delay: 0s;
        }

        .bg-animation::after {
          background: var(--secondary-gradient);
          bottom: -200px;
          left: -200px;
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, -50px) scale(1.1); }
          50% { transform: translate(-50px, 100px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        nav {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 20px 5%;
          background: rgba(10, 14, 39, 0.8);
          backdrop-filter: blur(20px);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 28px;
          font-weight: 800;
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }

        .nav-links a {
          color: var(--muted-text);
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: var(--light-text);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-gradient);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .hero {
          padding: 180px 5% 100px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-content {
          animation: slideInLeft 1s ease;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 50px;
          font-size: 14px;
          color: #a8b8ff;
          margin-bottom: 30px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .hero h1 {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 30px;
          background: linear-gradient(135deg, #ffffff 0%, #a8b8ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text {
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 20px;
          color: var(--muted-text);
          margin-bottom: 50px;
          line-height: 1.8;
        }

        .email-form {
          display: flex;
          gap: 16px;
          max-width: 500px;
          position: relative;
        }

        .email-input {
          flex: 1;
          padding: 18px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: var(--light-text);
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .email-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .email-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .cta-button {
          padding: 18px 36px;
          background: var(--primary-gradient);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }

        .cta-button:hover::before { transform: translateX(0); }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
        }

        .hero-visual { position: relative; animation: slideInRight 1s ease; }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px);} to { opacity: 1; transform: translateX(0);} }

        .floating-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
        }

        .floating-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }

        .match-animation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin-bottom: 30px;
        }

        .profile-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--primary-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          animation: bounce 2s infinite;
        }

        .profile-circle:nth-child(2) { animation-delay: 0.2s; }
        @keyframes bounce { 0%, 100% { transform: translateY(0);} 50% { transform: translateY(-10px);} }

        .heart-icon { font-size: 32px; color: #f5576c; animation: heartbeat 1.5s infinite; }
        @keyframes heartbeat { 0%, 100% { transform: scale(1);} 50% { transform: scale(1.2);} }

        .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }

        .stat-item {
          text-align: center;
          padding: 20px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .stat-number {
          font-size: 32px;
          font-weight: 700;
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label { color: var(--muted-text); font-size: 14px; margin-top: 5px; }

        .features { padding: 100px 5%; position: relative; }
        .features-container { max-width: 1400px; margin: 0 auto; }
        .section-header { text-align: center; margin-bottom: 80px; }
        .section-title { font-size: clamp(32px, 4vw, 48px); font-weight: 800; margin-bottom: 20px; background: linear-gradient(135deg, #ffffff 0%, #a8b8ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .section-subtitle { font-size: 18px; color: var(--muted-text); max-width: 600px; margin: 0 auto; }

        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; }

        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: var(--primary-gradient); transform: scaleX(0); transition: transform 0.3s ease; }
        .feature-card:hover::before { transform: scaleX(1); }
        .feature-card:hover { transform: translateY(-5px); background: rgba(255, 255, 255, 0.05); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2); }

        .feature-icon { width: 60px; height: 60px; background: var(--primary-gradient); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 24px; }
        .feature-title { font-size: 24px; font-weight: 700; margin-bottom: 16px; }
        .feature-description { color: var(--muted-text); line-height: 1.8; }

        .footer { padding: 60px 5% 40px; border-top: 1px solid rgba(255, 255, 255, 0.1); text-align: center; }
        .footer-container { max-width: 1400px; margin: 0 auto; }
        .app-availability { margin-bottom: 30px; }
        .availability-text { font-size: 18px; color: var(--muted-text); margin-bottom: 20px; }
        .app-badges { display: flex; gap: 20px; justify-content: center; align-items: center; }
        .app-badge { padding: 12px 24px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; display: flex; align-items: center; gap: 10px; color: var(--muted-text); transition: all 0.3s ease; cursor: not-allowed; opacity: 0.6; }
        .app-badge-icon { font-size: 24px; }
        .copyright { color: var(--muted-text); font-size: 14px; margin-top: 30px; }

        @media (max-width: 1024px) {
          .hero-container { grid-template-columns: 1fr; text-align: center; }
          .email-form { margin: 0 auto; }
          .hero-visual { max-width: 500px; margin: 0 auto; }
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hero { padding: 140px 5% 80px; }
          .features-grid { grid-template-columns: 1fr; }
          .email-form { flex-direction: column; }
          .email-input, .cta-button { width: 100%; }
          .app-badges { flex-direction: column; }
          .app-badge { width: 100%; justify-content: center; }
        }
      `}</style>
    </>
  );
}
