import { useState } from "react";
import LandingPage from "./Landingpage";

const BODY_SHAPES_FEMININE = [
  { id: "hourglass", label: "Hourglass", desc: "Balanced bust & hips, defined waist", icon: "⧗" },
  { id: "pear", label: "Pear", desc: "Hips wider than shoulders", icon: "🍐" },
  { id: "apple", label: "Apple", desc: "Fuller midsection, slimmer legs", icon: "🍎" },
  { id: "rectangle", label: "Rectangle", desc: "Similar bust, waist & hip width", icon: "▭" },
  { id: "inverted_triangle", label: "Inverted Triangle", desc: "Broader shoulders, narrower hips", icon: "▽" },
  { id: "plus_size", label: "Plus Size", desc: "Fuller figure, size 16 and above", icon: "🌸" },
  { id: "custom", label: "None of these fit me", desc: "Describe your body shape in your own words", icon: "✏️" },
];

const BODY_SHAPES_MASCULINE = [
  { id: "trapezoid", label: "Trapezoid", desc: "Broad shoulders, slight waist, medium hips — ideal male shape", icon: "📐" },
  { id: "rectangle", label: "Rectangle", desc: "Shoulders, waist and hips similar width, athletic build", icon: "▭" },
  { id: "inverted_triangle", label: "Inverted Triangle", desc: "Very broad shoulders, narrow waist and hips", icon: "▽" },
  { id: "triangle", label: "Triangle", desc: "Narrower shoulders, wider hips and thighs", icon: "△" },
  { id: "oval", label: "Oval", desc: "Fuller midsection, broader waist, rounder belly", icon: "⬭" },
  { id: "plus_size", label: "Plus Size", desc: "Fuller figure, larger build overall", icon: "🌸" },
  { id: "custom", label: "None of these fit me", desc: "Describe your body shape in your own words", icon: "✏️" },
];

const BODY_SHAPES_ANDROGYNOUS = [
  { id: "rectangle", label: "Straight / Rectangle", desc: "Similar width throughout, minimal curves", icon: "▭" },
  { id: "hourglass", label: "Hourglass", desc: "Defined waist with balanced upper and lower body", icon: "⧗" },
  { id: "inverted_triangle", label: "Inverted Triangle", desc: "Broader shoulders, narrower hips", icon: "▽" },
  { id: "pear", label: "Pear", desc: "Narrower shoulders, wider hips", icon: "🍐" },
  { id: "plus_size", label: "Plus Size", desc: "Fuller figure, larger build overall", icon: "🌸" },
  { id: "custom", label: "None of these fit me", desc: "Describe your body shape in your own words", icon: "✏️" },
];

const getBodyShapes = (gender) => {
  if (gender === "masculine") return BODY_SHAPES_MASCULINE;
  if (gender === "androgynous") return BODY_SHAPES_ANDROGYNOUS;
  return BODY_SHAPES_FEMININE;
};

const WORKPLACES = [
  { id: "corporate", label: "Corporate", icon: "🏦" },
  { id: "business_casual", label: "Business Casual", icon: "💼" },
  { id: "creative", label: "Creative / Media", icon: "🎨" },
  { id: "tech", label: "Tech / Startup", icon: "💻" },
  { id: "education", label: "Education / Teaching", icon: "🎓" },
  { id: "government", label: "Government / Public Sector", icon: "🏛️" },
];


const SEASONS = [
  { id: "spring", label: "Spring", icon: "🌸" },
  { id: "summer", label: "Summer", icon: "☀️" },
  { id: "autumn", label: "Autumn", icon: "🍂" },
  { id: "winter", label: "Winter", icon: "❄️" },
];

const GENDERS = [
  { id: "feminine", label: "Feminine styles", icon: "👗" },
  { id: "masculine", label: "Masculine styles", icon: "👔" },
  { id: "androgynous", label: "Androgynous / Neutral", icon: "🎭" },
];

const API_URL = "http://localhost:5000";

const STORES = [
  { name: "SHEIN", logo: "S", color: "#000", commission: "10% commission", url: "https://www.shein.com/search?q=" },
  { name: "ASOS", logo: "A", color: "#000", commission: "7% commission", url: "https://www.asos.com/search/?q=" },
  { name: "H&M", logo: "H&M", color: "#e50010", commission: "10.5% commission", url: "https://www.hm.com/search?q=" },
  { name: "Boohoo", logo: "B", color: "#ff006e", commission: "7% commission", url: "https://www.boohoo.com/search?q=" },
  { name: "Zando", logo: "Z", color: "#ff6600", commission: "6% commission", url: "https://www.zando.co.za/search?q=" },
  { name: "Takealot", logo: "T", color: "#0072ce", commission: "7% commission", url: "https://www.takealot.com/all?search=" },
];

function ShopModal({ outfit, onClose }) {
  if (!outfit) return null;
  const query = encodeURIComponent(outfit.top + " " + outfit.bottom);
  return (
    <div onClick={e => e.target === e.currentTarget && onClose()} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", backdropFilter: "blur(4px)" }}>
      <div style={{ background: "#0e0d0b", border: "1px solid #2a2520", borderRadius: "4px", width: "100%", maxWidth: "620px", maxHeight: "90vh", overflowY: "auto" }}>
        
        {/* Header */}
        <div style={{ padding: "1.5rem", borderBottom: "1px solid #1e1c18", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
          <div>
            <div style={{ fontSize: "1.4rem", fontWeight: "300", color: "#f0e8d8", marginBottom: "0.3rem" }}>{outfit.title}</div>
            <div style={{ fontSize: "0.72rem", color: "#6a6058", fontFamily: "Georgia, serif", fontStyle: "italic" }}>Choose your favourite store to shop this outfit</div>
          </div>
          <button onClick={onClose} style={{ background: "transparent", border: "1px solid #2a2520", color: "#6a6058", width: "32px", height: "32px", borderRadius: "25px", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>✕</button>
        </div>

        {/* Outfit pills */}
        <div style={{ padding: "1rem 1.5rem", borderBottom: "1px solid #1e1c18", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {[["👚", outfit.top], ["👖", outfit.bottom], ["👠", outfit.shoes], ["✨", outfit.accessory]].map(([icon, val]) => (
            <span key={val} style={{ background: "#141210", border: "1px solid #2a2520", borderRadius: "20px", padding: "0.3rem 0.8rem", fontSize: "0.68rem", color: "#9a8f7e", fontFamily: "Georgia, serif" }}>{icon} {val}</span>
          ))}
        </div>

        {/* Store buttons */}
        <div style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "Georgia, serif", marginBottom: "1rem" }}>Choose Your Store</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", marginBottom: "1.5rem" }}>
            {STORES.map(store => (
              <a key={store.name} href={`${store.url}${query}`} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.8rem", padding: "0.9rem 1rem", background: "#141210", border: "1px solid #1e1c18", borderRadius: "3px", textDecoration: "none", color: "inherit", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8a96e"; e.currentTarget.style.background = "#1a1814"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1c18"; e.currentTarget.style.background = "#141210"; }}
              >
                <div style={{ width: "36px", height: "36px", borderRadius: "3px", background: store.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: "700", color: "#fff", fontFamily: "Georgia, serif", flexShrink: 0 }}>{store.logo}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.85rem", color: "#f0e8d8", fontFamily: "Georgia, serif", marginBottom: "0.15rem" }}>{store.name}</div>
                  <div style={{ fontSize: "0.6rem", color: "#c8a96e", fontFamily: "Georgia, serif", letterSpacing: "0.05em" }}>{store.commission}</div>
                </div>
                <span style={{ color: "#3a3530", fontSize: "0.8rem" }}>→</span>
              </a>
            ))}
          </div>

          {/* Deals */}
          <div style={{ background: "#080706", border: "1px solid #1e1c18", borderLeft: "2px solid #c8a96e", borderRadius: "25px", padding: "1rem", marginBottom: "1rem" }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "Georgia, serif", marginBottom: "0.6rem" }}>🎁 Current Deals</div>
            {[["⚡", "SHEIN — Up to 80% off sale items"], ["🚚", "ASOS — Free delivery on orders over R800"], ["✨", "H&M — New arrivals every week"], ["💥", "Boohoo — Up to 70% off selected styles"]].map(([icon, deal]) => (
              <div key={deal} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.72rem", color: "#7a7068", fontFamily: "Georgia, serif", marginBottom: "0.3rem" }}>{icon} {deal}</div>
            ))}
          </div>

          <p style={{ fontSize: "0.6rem", color: "#3a3530", fontFamily: "Georgia, serif", textAlign: "center", borderTop: "1px solid #1e1c18", paddingTop: "0.8rem" }}>Shopping through our links supports DressRight at no extra cost to you</p>
        </div>
      </div>
    </div>
  );
}

function OutfitCard({ outfit, index, gender, bodyShape }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [showShop, setShowShop] = useState(false);

  useState(() => {
    const genderWord = gender === "masculine" ? "man" : gender === "androgynous" ? "person" : "woman";
    const bodyDesc = bodyShape === "hourglass" ? "curvy hourglass body shape, large bust, small defined waist, wide hips, full figure"
      : bodyShape === "pear" ? "pear body shape, narrow shoulders, very wide hips and thighs, plus size lower body"
      : bodyShape === "apple" ? "apple body shape, round full belly, fuller midsection, broad waist, plus size"
      : bodyShape === "rectangle" ? "rectangle body shape, straight figure, athletic build, no defined waist"
      : bodyShape === "inverted_triangle" ? "inverted triangle body shape, very broad wide shoulders, narrow hips"
      : bodyShape === "plus_size" ? "plus size full figured body, size 16 and above, curvy and full all over, larger arms, fuller bust, round belly, wide hips"
      : `body shape: ${bodyShape}`;
    const prompt = `realistic fashion illustration of a plus size ${genderWord} model with ${bodyDesc}, body shape is clearly visible and realistic, wearing ${outfit.top} and ${outfit.bottom} with ${outfit.shoes}, ${outfit.colors} color palette, professional work outfit, full body shot, white background, body positive fashion illustration, diverse body representation, the model's body shape must be clearly shown`;
    fetch(`${API_URL}/api/image`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, seed: index * 37 + 11 }),
    })
      .then(r => r.json())
      .then(data => { if (data.imageUrl) setImageUrl(data.imageUrl); else setImgError(true); })
      .catch(() => setImgError(true));
  }, []);

  return (
    <div style={{ background: "#080706", border: "1px solid #2a2520", borderRadius: "4px", overflow: "hidden", transition: "border-color 0.2s" }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "#c8a96e"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "#2a2520"}
    >
      <div style={{ position: "relative", height: "340px", background: "#1a1815", overflow: "hidden" }}>

        {!imgLoaded && !imgError && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#1a1815", zIndex: 1 }}>
            <div style={{ fontSize: "2rem", color: "#c8a96e", animation: "spin 2s linear infinite" }}>✦</div>
            <p style={{ color: "#6a6058", fontSize: "0.72rem", marginTop: "0.8rem", fontStyle: "italic", fontFamily: "Georgia, serif" }}>Loading...</p>
          </div>
        )}

        {!imgError && imageUrl && (
          <img
            src={imageUrl}
            alt={outfit.title}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              display: imgLoaded ? "block" : "none",
              transition: "transform 0.5s",
            }}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            onMouseEnter={e => e.target.style.transform = "scale(1.03)"}
            onMouseLeave={e => e.target.style.transform = "scale(1)"}
          />
        )}

        {imgError && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "0.5rem" }}>
            <span style={{ fontSize: "3rem" }}>👗</span>
            <span style={{ fontSize: "0.72rem", color: "#6a6058", fontFamily: "Georgia, serif" }}>Style inspiration</span>
          </div>
        )}

        <div style={{ position: "absolute", top: "0.7rem", left: "0.7rem", background: "rgba(14,13,11,0.92)", border: "1px solid #c8a96e", borderRadius: "25px", padding: "0.2rem 0.6rem", fontSize: "0.62rem", letterSpacing: "0.2em", color: "#c8a96e", textTransform: "uppercase", zIndex: 2 }}>
          Look {index + 1}
        </div>
      </div>

      <div style={{ padding: "1.1rem" }}>
        <h3 style={{ margin: "0 0 0.8rem", fontSize: "0.95rem", color: "#f0e8d8", fontWeight: "400" }}>{outfit.title}</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.78rem" }}>
          {[["👚", "Top", outfit.top], ["👖", "Bottom", outfit.bottom], ["👠", "Shoes", outfit.shoes], ["✨", "Accessory", outfit.accessory]].map(([icon, label, val]) => (
            <div key={label} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
              <span style={{ flexShrink: 0 }}>{icon}</span>
              <div>
                <span style={{ color: "#6a6058", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}: </span>
                <span style={{ color: "#c8c0b0" }}>{val}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "0.9rem", padding: "0.45rem 0.7rem", background: "#141210", border: "1px solid #2a2520", borderRadius: "25px", fontSize: "0.72rem", color: "#9a8f7e" }}>
          🎨 <span style={{ color: "#c8a96e" }}>Colours:</span> {outfit.colors}
        </div>

        {/* Shop Button */}
        <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
          <hr style={{ border: "none", borderTop: "1px solid #1e1c18", margin: "0.8rem 0" }} />
          <button onClick={() => setShowShop(true)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", width: "100%", padding: "0.75rem 1rem", background: "linear-gradient(135deg, #c8a96e, #e0c888)", borderRadius: "3px", color: "#0e0d0b", fontFamily: "Georgia, serif", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer" }}>
            🛍️ Shop This Look →
          </button>
        </div>
        {showShop && <ShopModal outfit={outfit} onClose={() => setShowShop(false)} />}
      </div>
    </div>
  );
}

function OutfitAdvisor({ onBack }) {
  const [step, setStep] = useState(0);
  const [bodyShape, setBodyShape] = useState(null);
  const [customBody, setCustomBody] = useState("");
  const [workplace, setWorkplace] = useState(null);
  const [season, setSeason] = useState(null);
  const [gender, setGender] = useState(null);
  const [outfits, setOutfits] = useState([]);
  const [tips, setTips] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canProceed = () => {
    if (step === 0) return !!gender;
    if (step === 1) return !!bodyShape && (bodyShape !== "custom" || customBody.trim().length > 10);
    if (step === 2) return !!workplace;
    if (step === 3) return !!season;
    return false;
  };

  const getAdvice = async () => {
    setLoading(true);
    setError("");
    setOutfits([]);
    setTips("");
    try {
      const bodyDesc = bodyShape === "custom" ? customBody : bodyShape;
      const response = await fetch(`${API_URL}/api/outfits`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bodyShape: bodyDesc, gender, workplace, season }),
      });
      const parsed = await response.json();
      if (!response.ok) throw new Error(parsed.error || "Something went wrong");
      setOutfits(parsed.outfits || []);
      setTips((parsed.tips || "") + (parsed.avoid ? " " + parsed.avoid : ""));
    } catch (e) {
      setError(e.message || "Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const handleNext = () => {
    if (step === 3) { setStep(4); getAdvice(); }
    else setStep(step + 1);
  };

  const reset = () => {
    setStep(0); setBodyShape(null); setCustomBody(""); setWorkplace(null);
    setSeason(null); setGender(null); setOutfits([]); setTips(""); setError("");
  };

  const pct = step === 4 ? 100 : (step / 4) * 100;

  return (
    <div style={{ minHeight: "100vh", background: "#0e0d0b", fontFamily: "Georgia, serif", color: "#e8e0d0", display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem 1rem" }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.3} 50%{opacity:1} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: "2rem", width: "100%", maxWidth: "560px" }}>
        <button onClick={onBack} style={{ background: "linear-gradient(135deg, #c8a96e, #e0c888)", border: "none", color: "#0e0d0b", cursor: "pointer", fontSize: "0.75rem", fontFamily: "Georgia, serif", marginBottom: "1.5rem", display: "block", padding: "0.5rem 1.2rem", borderRadius: "25px", letterSpacing: "0.08em", marginTop: "-1rem" }}>
          ← Back to Home
        </button>
        <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", color: "#c8a96e", textTransform: "uppercase", marginBottom: "0.4rem" }}>Personal Style Studio</div>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "400", margin: 0, color: "#f0e8d8" }}>With-<span style={{ color: "#c8a96e" }}>Confidence</span></h1>
        <p style={{ color: "#9a8f7e", fontSize: "0.88rem", marginTop: "0.4rem", fontStyle: "italic" }}>Personalised work outfit advice, tailored to you</p>
      </div>

      {step < 4 && (
        <div style={{ width: "100%", maxWidth: "520px", marginBottom: "2rem" }}>
          <div style={{ background: "#1e1c18", borderRadius: "25px", height: "3px" }}>
            <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg, #c8a96e, #e8d4a0)", borderRadius: "25px", transition: "width 0.4s ease" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.4rem" }}>
            {["Style", "Body", "Work", "Season"].map((l, i) => (
              <span key={i} style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: i <= step ? "#c8a96e" : "#4a4540" }}>{l}</span>
            ))}
          </div>
        </div>
      )}

      <div style={{ width: "100%", maxWidth: step === 4 ? "1100px" : "540px", background: "#141210", border: "1px solid #2a2520", borderRadius: "4px", padding: "2rem", transition: "max-width 0.4s ease" }}>

        {step === 1 && (
          <div>
            <h2 style={{ fontSize: "1.05rem", fontWeight: "400", marginBottom: "0.3rem", color: "#f0e8d8" }}>What is your body shape?</h2>
            <p style={{ color: "#6a6058", fontSize: "0.8rem", marginBottom: "1.4rem", fontStyle: "italic" }}>Choose the one that feels most like you</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {getBodyShapes(gender).map(s => (
                <button key={s.id} onClick={() => setBodyShape(s.id)} style={{ background: bodyShape === s.id ? "#1e1a14" : "transparent", border: bodyShape === s.id ? "1px solid #c8a96e" : "1px solid #2a2520", borderRadius: "3px", padding: "0.85rem 1rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "1rem", color: "#e8e0d0", textAlign: "left", transition: "all 0.2s" }}>
                  <span style={{ fontSize: "1.3rem", width: "2rem", textAlign: "center" }}>{s.icon}</span>
                  <div>
                    <div style={{ fontWeight: "600", fontSize: "0.92rem", color: bodyShape === s.id ? "#c8a96e" : "#e8e0d0" }}>{s.label}</div>
                    <div style={{ fontSize: "0.75rem", color: "#6a6058", marginTop: "0.1rem" }}>{s.desc}</div>
                  </div>
                </button>
              ))}
              {bodyShape === "custom" && (
                <div style={{ marginTop: "0.5rem" }}>
                  <p style={{ color: "#9a8f7e", fontSize: "0.78rem", marginBottom: "0.6rem", fontStyle: "italic" }}>Describe your body shape below:</p>
                  <textarea placeholder="e.g. I carry most of my weight in my hips and thighs, with a smaller bust and defined waist..." value={customBody} onChange={e => setCustomBody(e.target.value)} style={{ width: "100%", background: "#1e1a14", border: "1px solid #c8a96e", borderRadius: "3px", padding: "0.9rem", color: "#e8e0d0", fontSize: "0.85rem", fontFamily: "Georgia, serif", lineHeight: 1.6, resize: "vertical", minHeight: "100px", outline: "none" }} />
                  {customBody.trim().length > 0 && customBody.trim().length <= 10 && (
                    <p style={{ color: "#e07070", fontSize: "0.72rem", marginTop: "0.4rem" }}>Please describe a little more so we can help you better.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {step === 0 && (
          <div>
            <h2 style={{ fontSize: "1.05rem", fontWeight: "400", marginBottom: "0.3rem", color: "#f0e8d8" }}>What's your style preference?</h2>
            <p style={{ color: "#6a6058", fontSize: "0.8rem", marginBottom: "1.4rem", fontStyle: "italic" }}>This helps tailor garment suggestions</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {GENDERS.map(g => (
                <button key={g.id} onClick={() => setGender(g.id)} style={{ background: gender === g.id ? "#1e1a14" : "transparent", border: gender === g.id ? "1px solid #c8a96e" : "1px solid #2a2520", borderRadius: "3px", padding: "0.85rem 1rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "1rem", color: "#e8e0d0", textAlign: "left", transition: "all 0.2s", width: "100%" }}>
                  <span style={{ fontSize: "1.5rem", width: "2rem", textAlign: "center" }}>{g.icon}</span>
                  <span style={{ fontWeight: "600", fontSize: "0.92rem", color: gender === g.id ? "#c8a96e" : "#e8e0d0" }}>{g.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: "1.05rem", fontWeight: "400", marginBottom: "0.3rem", color: "#f0e8d8" }}>What kind of workplace?</h2>
            <p style={{ color: "#6a6058", fontSize: "0.8rem", marginBottom: "1.4rem", fontStyle: "italic" }}>Dress codes vary a lot — let's get it right</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
              {WORKPLACES.map(w => (
                <button key={w.id} onClick={() => setWorkplace(w.id)} style={{ background: workplace === w.id ? "#1e1a14" : "transparent", border: workplace === w.id ? "1px solid #c8a96e" : "1px solid #2a2520", borderRadius: "3px", padding: "1rem 0.8rem", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", color: "#e8e0d0", transition: "all 0.2s" }}>
                  <span style={{ fontSize: "1.4rem" }}>{w.icon}</span>
                  <span style={{ fontSize: "0.75rem", textAlign: "center", color: workplace === w.id ? "#c8a96e" : "#a09080" }}>{w.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontSize: "1.05rem", fontWeight: "400", marginBottom: "0.3rem", color: "#f0e8d8" }}>What season is it?</h2>
            <p style={{ color: "#6a6058", fontSize: "0.8rem", marginBottom: "1.4rem", fontStyle: "italic" }}>Fabric and layering depend on the weather</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
              {SEASONS.map(s => (
                <button key={s.id} onClick={() => setSeason(s.id)} style={{ background: season === s.id ? "#1e1a14" : "transparent", border: season === s.id ? "1px solid #c8a96e" : "1px solid #2a2520", borderRadius: "3px", padding: "1.2rem 0.8rem", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", color: "#e8e0d0", transition: "all 0.2s" }}>
                  <span style={{ fontSize: "1.7rem" }}>{s.icon}</span>
                  <span style={{ fontSize: "0.82rem", color: season === s.id ? "#c8a96e" : "#a09080" }}>{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            {loading && (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem", animation: "pulse 1.5s infinite" }}>✦</div>
                <p style={{ color: "#9a8f7e", fontStyle: "italic" }}>Your stylist is curating your outfits...</p>
              </div>
            )}
            {error && <p style={{ color: "#e07070", textAlign: "center" }}>{error}</p>}
            {outfits.length > 0 && (
              <div>
                <div style={{ marginBottom: "1.5rem", borderBottom: "1px solid #2a2520", paddingBottom: "1rem" }}>
                  <div style={{ fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c8a96e" }}>Your Style Report</div>
                  <div style={{ fontSize: "0.78rem", color: "#5a5248", marginTop: "0.3rem" }}>
                    {bodyShape === "custom" ? "Custom Shape" : getBodyShapes(gender).find(b => b.id === bodyShape)?.label} · {WORKPLACES.find(w => w.id === workplace)?.label} · {SEASONS.find(s => s.id === season)?.label}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem", marginBottom: "2rem" }}>
                  {outfits.map((outfit, i) => (
                    <OutfitCard key={i} outfit={outfit} index={i} gender={gender} bodyShape={bodyShape} />
                  ))}
                </div>

                {tips && (
                  <div style={{ background: "#0e0d0b", border: "1px solid #2a2520", borderLeft: "3px solid #c8a96e", borderRadius: "25px", padding: "1.2rem 1.4rem", marginBottom: "1.5rem" }}>
                    <div style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c8a96e", marginBottom: "0.5rem" }}>Stylist Tips</div>
                    <p style={{ margin: 0, fontSize: "0.83rem", color: "#b0a898", lineHeight: 1.7 }}>{tips}</p>
                  </div>
                )}

                <button onClick={reset} style={{ background: "linear-gradient(135deg, #c8a96e, #e0c888)", border: "none", color: "#0e0d0b", padding: "0.6rem 1.4rem", borderRadius: "25px", cursor: "pointer", fontSize: "0.78rem", letterSpacing: "0.1em", fontFamily: "Georgia, serif", fontWeight: "600" }}>
                  ← Start Over
                </button>
              </div>
            )}
          </div>
        )}

        {step < 4 && (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem" }}>
            {step > 0
              ? <button onClick={() => setStep(step - 1)} style={{ background: "linear-gradient(135deg, #c8a96e, #e0c888)", border: "none", color: "#0e0d0b", cursor: "pointer", fontSize: "0.75rem", padding: "0.5rem 1.2rem", borderRadius: "25px", letterSpacing: "0.08em", fontFamily: "Georgia, serif" }}>← Back</button>
              : <div />
            }
            <button onClick={handleNext} disabled={!canProceed()} style={{
              background: canProceed() ? "linear-gradient(135deg, #c8a96e, #e0c888)" : "#2a2520",
              border: "none", color: canProceed() ? "#0e0d0b" : "#4a4540",
              padding: "0.65rem 1.8rem", borderRadius: "25px",
              cursor: canProceed() ? "pointer" : "default",
              fontSize: "0.82rem", letterSpacing: "0.08em",
              fontFamily: "Georgia, serif", transition: "all 0.2s",
            }}>
              {step === 3 ? "Show My Outfits →" : "Continue →"}
            </button>
          </div>
        )}
      </div>


      <p style={{ marginTop: "2rem", fontSize: "0.68rem", color: "#3a3530", letterSpacing: "0.1em" }}>POWERED BY GEMINI AI · POLLINATIONS AI · DRESSRIGHT</p>
    </div>
  );
}

export default function App() {
  const [showAdvisor, setShowAdvisor] = useState(false);
  return showAdvisor
    ? <OutfitAdvisor onBack={() => setShowAdvisor(false)} />
    : <LandingPage onGetStarted={() => setShowAdvisor(true)} />;
}
