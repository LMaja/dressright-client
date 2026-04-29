import { useState, useEffect } from "react";

const testimonials = [
  { name: "Amara Osei", role: "Marketing Manager", city: "Cape Town", text: "With-Confidence completely transformed how I get dressed for work. As a pear shape, I never knew what to wear. Now I walk in with total confidence every single day.", initial: "A" },
  { name: "Priya Naidoo", role: "Creative Director", city: "Johannesburg", text: "I used to spend 30 minutes every morning stressing about outfits. With-Confidence gave me three perfect looks in seconds. It actually understands my body and my workplace.", initial: "P" },
  { name: "Sipho Dlamini", role: "Financial Analyst", city: "Pretoria", text: "As a guy working in corporate finance I always struggled with what to wear. With-Confidence nailed my style perfectly — sharp, professional and effortless.", initial: "S" },
  { name: "Nomvula Khumalo", role: "HR Director", city: "Durban", text: "The outfit cards with real photos make it so easy to visualise. I screenshot them and shop directly. Best investment for my wardrobe and confidence.", initial: "N" },
  { name: "Thandeka Mokoena", role: "Software Engineer", city: "Sandton", text: "I work in tech and always struggled between looking too casual or too formal. With-Confidence nailed the balance perfectly for my body type.", initial: "T" },
  { name: "Lethabo Sithole", role: "Lawyer", city: "Bloemfontein", text: "Elegant, intelligent, and incredibly personalised. With-Confidence is the personal stylist I always wanted but could never afford.", initial: "L" },
];

const steps = [
  { number: "01", title: "Choose Your Body Shape", desc: "Select from 5 body shapes with helpful descriptions." },
  { number: "02", title: "Set Your Preferences", desc: "Tell us your style and what kind of workplace you dress for." },
  { number: "03", title: "Pick Your Season", desc: "Get advice that matches the weather — fabrics, layers and all." },
  { number: "04", title: "Get Your Looks", desc: "Receive 3 complete outfit ideas with photos, tips and colour palettes." },
];

export default function LandingPage({ onGetStarted, onShop }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#080706", color: "#e8e0d0", fontFamily: "Georgia, serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Montserrat:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        @keyframes shimmer { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse2 { 0%,100%{opacity:0.4} 50%{opacity:1} }
      `}</style>

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.2rem 2rem",
        background: scrolled ? "rgba(8,7,6,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid #1e1c18" : "none",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.3s",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: "300", letterSpacing: "0.1em" }}>
          With-<span style={{ color: "#c8a96e" }}>Confidence</span>
        </div>
        <button onClick={onGetStarted} style={{
            background: "linear-gradient(135deg, #c8a96e, #e8d4a0, #c8a96e)",
            
            backgroundSize: "200%", animation: "shimmer 3s ease infinite",
            border: "none", color: "#0a0907", padding: "0.5rem 1.5rem",
            fontFamily: "'Montserrat', sans-serif", fontWeight: "500",
            fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase",
            cursor: "pointer", borderRadius: "25px",
          }}>
            Get Started
          </button>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "8rem 2rem 4rem",
        position: "relative",
      }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ color: "#c8a96e", letterSpacing: "0.5em", marginBottom: "1.5rem", animation: "fadeUp 0.8s ease forwards" }}>✦ ✦ ✦</div>
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "'Montserrat', sans-serif", marginBottom: "0.6rem", animation: "fadeUp 0.8s 0.1s ease both" }}>
          Your Personal AI Stylist
        </div>
        <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "'Montserrat', sans-serif", marginBottom: "1.2rem", opacity: 0.8, animation: "fadeUp 0.8s 0.15s ease both", lineHeight: 2 }}>
          Powered by:<br/>
          Gemini AI<br/>
          and<br/>
          Pollinations AI
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: "300", lineHeight: 1.1, color: "#f0e8d8", animation: "fadeUp 0.8s 0.2s ease both" }}>
          Dress for the Job<br />
          <em style={{ color: "#c8a96e" }}>You Deserve</em>
        </h1>
        <p style={{ fontSize: "1rem", color: "#9a8f7e", lineHeight: 1.8, fontStyle: "italic", maxWidth: "480px", margin: "1.5rem auto 0", animation: "fadeUp 0.8s 0.3s ease both" }}>
          Personalised work outfit recommendations tailored to your body shape, workplace, and season — for everyone.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "2.5rem", animation: "fadeUp 0.8s 0.4s ease both" }}>
          <button onClick={onGetStarted} style={{
            background: "linear-gradient(135deg, #c8a96e, #e8d4a0, #c8a96e)", backgroundSize: "200%",
            animation: "shimmer 3s ease infinite", border: "none", color: "#0a0907",
            padding: "1rem 3rem", fontFamily: "'Montserrat', sans-serif", fontWeight: "500",
            fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", borderRadius: "25px",
          }}>
            Discover Your Style
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", justifyContent: "center", marginTop: "5rem", animation: "fadeUp 0.8s 0.5s ease both" }}>
          {[["10K+", "People Styled"], ["4.9★", "Average Rating"], ["3 Min", "To Your Look"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: "300", color: "#c8a96e" }}>{num}</div>
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4a4540", fontFamily: "'Montserrat', sans-serif", marginTop: "0.3rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ display: "flex", alignItems: "center", padding: "0 2rem", gap: "1rem" }}>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #2a2520)" }} />
        <span style={{ color: "#c8a96e", fontSize: "0.8rem" }}>✦</span>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #2a2520)" }} />
      </div>

      {/* How It Works */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "'Montserrat', sans-serif", marginBottom: "0.8rem" }}>The Process</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "300", color: "#f0e8d8" }}>Four Steps to Your Perfect Look</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
          {steps.map((s, i) => (
            <div key={i} style={{ padding: "1.8rem 1.5rem", border: "1px solid #1e1c18", borderRadius: "2px", background: "#0e0d0b", position: "relative", transition: "border-color 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#c8a96e"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#1e1c18"}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: "300", color: "#c8a96e", position: "absolute", top: "1rem", right: "1rem", lineHeight: 1 }}>{s.number}</div>
              <div style={{ width: "28px", height: "1px", background: "#c8a96e", marginBottom: "1rem" }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: "400", color: "#f0e8d8", marginBottom: "0.6rem" }}>{s.title}</h3>
              <p style={{ fontSize: "0.8rem", color: "#6a6058", lineHeight: 1.7, fontFamily: "'Montserrat', sans-serif", fontWeight: "300" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ display: "flex", alignItems: "center", padding: "0 2rem", gap: "1rem" }}>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #2a2520)" }} />
        <span style={{ color: "#c8a96e", fontSize: "0.8rem" }}>✦</span>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #2a2520)" }} />
      </div>

      {/* Testimonials */}
      <section style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "'Montserrat', sans-serif", marginBottom: "0.8rem" }}>Real People, Real Results</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "300", color: "#f0e8d8" }}>What Our Community Says</h2>
        </div>

        {/* Featured */}
        <div style={{ background: "#0e0d0b", border: "1px solid #2a2520", borderLeft: "3px solid #c8a96e", borderRadius: "2px", padding: "2.5rem", textAlign: "center", marginBottom: "1.5rem", minHeight: "200px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ color: "#c8a96e", fontSize: "1.2rem", marginBottom: "1rem" }}>★★★★★</div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic", color: "#d0c8b8", lineHeight: 1.8, maxWidth: "560px", marginBottom: "1.5rem" }}>
            "{testimonials[active].text}"
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #c8a96e, #e8d4a0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: "600", color: "#0a0907", fontFamily: "'Montserrat', sans-serif" }}>
              {testimonials[active].initial}
            </div>
            <div>
              <div style={{ fontSize: "0.85rem", color: "#f0e8d8", fontFamily: "'Montserrat', sans-serif" }}>{testimonials[active].name}</div>
              <div style={{ fontSize: "0.7rem", color: "#6a6058", fontFamily: "'Montserrat', sans-serif" }}>{testimonials[active].role} · {testimonials[active].city}</div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ width: i === active ? "24px" : "6px", height: "6px", borderRadius: "3px", background: i === active ? "#c8a96e" : "#2a2520", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
          ))}
        </div>

        {/* Mini cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
          {testimonials.filter((_, i) => i !== active).slice(0, 3).map((t, i) => (
            <div key={i} style={{ background: "#0e0d0b", border: "1px solid #1e1c18", borderRadius: "2px", padding: "1.2rem", cursor: "pointer", transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#3a3530"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#1e1c18"}
            >
              <div style={{ color: "#c8a96e", fontSize: "0.8rem", marginBottom: "0.5rem" }}>★★★★★</div>
              <p style={{ fontSize: "0.78rem", color: "#7a7068", lineHeight: 1.6, fontStyle: "italic", marginBottom: "0.7rem", fontFamily: "'Cormorant Garamond', serif" }}>"{t.text.substring(0, 80)}..."</p>
              <div style={{ fontSize: "0.7rem", color: "#5a5248", fontFamily: "'Montserrat', sans-serif" }}>— {t.name}, {t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", textAlign: "center", background: "linear-gradient(180deg, #080706, #0e0d0b)", borderTop: "1px solid #1e1c18" }}>
        <div style={{ color: "#c8a96e", letterSpacing: "0.5em", marginBottom: "1.5rem" }}>✦ ✦ ✦</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "300", color: "#f0e8d8", marginBottom: "1rem", lineHeight: 1.2 }}>
          Ready to Transform<br /><em style={{ color: "#c8a96e" }}>Your Work Wardrobe?</em>
        </h2>
        <p style={{ color: "#6a6058", fontSize: "0.9rem", fontStyle: "italic", marginBottom: "2.5rem" }}>Join thousands of professionals who dress with confidence every morning.</p>
        <button onClick={onGetStarted} style={{
          background: "linear-gradient(135deg, #c8a96e, #e8d4a0, #c8a96e)", backgroundSize: "200%",
          animation: "shimmer 3s ease infinite", border: "none", color: "#0a0907",
          padding: "1.1rem 3.5rem", fontFamily: "'Montserrat', sans-serif", fontWeight: "500",
          fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", borderRadius: "25px",
        }}>
          Start Styling Now — It's Free
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem", borderTop: "1px solid #1e1c18", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: "300", color: "#3a3530" }}>With-<span style={{ color: "#c8a96e" }}>Confidence</span></div>
        <div style={{ fontSize: "0.7rem", color: "#c8a96e", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.1em" }}>© 2026 With-Confidence · All Rights Reserved</div>
      </footer>
    </div>
  );
}
