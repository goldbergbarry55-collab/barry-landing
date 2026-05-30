"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Successfully subscribed!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div style={{ background: "#0A0A0A", color: "#FFFFFF", fontFamily: "var(--font-montserrat), Arial, sans-serif" }}>

      {/* NAV */}
      <nav style={{ borderBottom: "1px solid #1a1a1a", padding: "1.25rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1100px", margin: "0 auto" }}>
        <span style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "1.5rem", color: "#CCFF00", letterSpacing: "0.08em" }}>
          BARRY PSYCHOLOGY
        </span>
        <a
          href="https://www.instagram.com/barry.psychology"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "#CCFF00", color: "#0A0A0A", padding: "0.5rem 1.25rem", borderRadius: "100px", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", letterSpacing: "0.05em" }}
        >
          FOLLOW ON INSTAGRAM
        </a>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem 4rem" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.5rem" }}>
          <p style={{ color: "#CCFF00", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Psychology · Instagram · @barry.psychology
          </p>
          <h1
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              lineHeight: 1,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              maxWidth: "800px",
            }}
          >
            Understand Why You Feel{" "}
            <span style={{ color: "#CCFF00" }}>The Way You Feel</span>
          </h1>
          <p style={{ color: "#888", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "560px" }}>
            Psychology-based content for people aged 25–35 navigating anxiety,
            overthinking, burnout, toxic relationships, and more.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
            <a
              href="https://www.instagram.com/barry.psychology"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#CCFF00", color: "#0A0A0A", padding: "0.875rem 2rem", borderRadius: "100px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}
            >
              Follow on Instagram
            </a>
            <a
              href="#guides"
              style={{ border: "1px solid #333", color: "#fff", padding: "0.875rem 2rem", borderRadius: "100px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}
            >
              Get Free Guides
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "0 0 auto", position: "relative" }}>
            <Image
              src="/images/about-me-portrait.png"
              alt="Barry — Psychology Expert"
              width={420}
              height={480}
              style={{ borderRadius: "16px", objectFit: "cover", display: "block" }}
              loading="lazy"
            />
          </div>

          <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ color: "#CCFF00", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              About Me
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              I Help You Make Sense of{" "}
              <span style={{ color: "#CCFF00" }}>Your Own Mind</span>
            </h2>
            <p style={{ color: "#888", lineHeight: 1.8, fontSize: "1rem" }}>
              I&apos;m Barry — a psychology content creator on a mission to help people
              understand their emotional patterns. Every reel I post is built around
              one question: <em style={{ color: "#ccc" }}>why do I feel this way?</em>
            </p>
            <p style={{ color: "#888", lineHeight: 1.8, fontSize: "1rem" }}>
              Whether you&apos;re stuck in anxiety loops, people-pleasing, burnout, or
              toxic relationship cycles — there&apos;s always a reason. And when you
              understand the reason, you can change it.
            </p>
            <a
              href="https://www.instagram.com/barry.psychology"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#CCFF00", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
            >
              @barry.psychology →
            </a>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "#1a1a1a", maxWidth: "1100px", margin: "0 auto 0" }} />

      {/* NUMBERS DON'T LIE */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ color: "#CCFF00", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Social Proof
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            The Numbers{" "}
            <span style={{ color: "#CCFF00" }}>Don&apos;t Lie</span>
          </h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              { number: "7", label: "Reels Posted Per Week" },
              { number: "25-35", label: "Target Age Range" },
              { number: "11", label: "Psychology Pillars Covered" },
              { number: "100K+", label: "People Helped" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#111",
                  border: "1px solid #222",
                  borderRadius: "12px",
                  padding: "1.75rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-bebas), sans-serif",
                    fontSize: "2.75rem",
                    color: "#CCFF00",
                    lineHeight: 1,
                    letterSpacing: "0.04em",
                  }}
                >
                  {stat.number}
                </span>
                <span style={{ color: "#888", fontSize: "0.8rem", fontWeight: 600, lineHeight: 1.4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div style={{ flex: "0 0 auto" }}>
            <Image
              src="/images/numbers-growth-graphic.png"
              alt="Growth graphic"
              width={300}
              height={400}
              style={{ objectFit: "contain", display: "block" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "#1a1a1a", maxWidth: "1100px", margin: "0 auto" }} />

      {/* FREE GUIDES / NEWSLETTER */}
      <section id="guides" style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 auto" }}>
            <Image
              src="/images/newsletter-mockup.png"
              alt="Free Psychology Guides Newsletter"
              width={480}
              height={360}
              style={{ objectFit: "contain", borderRadius: "12px", display: "block", boxShadow: "0 20px 60px rgba(204,255,0,0.08)" }}
              loading="lazy"
            />
          </div>

          <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ color: "#CCFF00", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Free Resource
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Get Free{" "}
              <span style={{ color: "#CCFF00" }}>Psychology Guides</span>
            </h2>
            <p style={{ color: "#888", lineHeight: 1.8, fontSize: "1rem" }}>
              Join thousands of people getting psychology-backed strategies delivered
              monthly — practical tools for anxiety, boundaries, burnout, and
              emotional resilience. No fluff, no jargon.
            </p>
            {status === "success" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "0.5rem" }}>
                <div style={{ background: "#111", border: "1px solid #CCFF00", borderRadius: "12px", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.25rem" }}>✓</span>
                  <p style={{ color: "#CCFF00", fontWeight: 700, fontSize: "0.9rem", margin: 0 }}>
                    You&apos;re in. Here are your 3 free guides:
                  </p>
                </div>
                {[
                  {
                    num: "01",
                    title: "The Anxiety Loop Breakdown",
                    desc: "Why your brain keeps looping — and how to stop it.",
                    href: "https://drive.google.com/file/d/1FAn0yccGDcyGhCghTHVLcmEvwbf4Ng3Z/view?usp=sharing",
                  },
                  {
                    num: "02",
                    title: "Running on Empty",
                    desc: "The burnout guide — recognise the signs before it's too late.",
                    href: "https://drive.google.com/file/d/10f5vhpXjHBhRanmygWTouwlAPv2Yz6Xn/view?usp=sharing",
                  },
                  {
                    num: "03",
                    title: "Stop Saying Yes",
                    desc: "How to set boundaries without guilt or losing people you love.",
                    href: "https://drive.google.com/file/d/1r-6Fi7OA4YYAuqdm5qTZit2DXC32Q_FC/view?usp=sharing",
                  },
                ].map((guide) => (
                  <a
                    key={guide.num}
                    href={guide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      background: "#111",
                      border: "1px solid #222",
                      borderLeft: "3px solid #CCFF00",
                      borderRadius: "8px",
                      padding: "1rem 1.25rem",
                      textDecoration: "none",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "1.5rem", color: "#CCFF00", lineHeight: 1, minWidth: "2rem" }}>{guide.num}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", margin: "0 0 0.2rem 0" }}>{guide.title}</p>
                      <p style={{ color: "#666", fontSize: "0.8rem", margin: 0 }}>{guide.desc}</p>
                    </div>
                    <span style={{ color: "#CCFF00", fontSize: "1.1rem", fontWeight: 700 }}>↓</span>
                  </a>
                ))}
                <p style={{ color: "#555", fontSize: "0.75rem", textAlign: "center" }}>
                  Bookmark this page — links are always available here.
                </p>
              </div>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.5rem" }}
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    style={{
                      background: "#111",
                      border: `1px solid ${status === "error" ? "#ff6b6b" : "#333"}`,
                      borderRadius: "8px",
                      padding: "0.875rem 1.25rem",
                      color: "#fff",
                      fontSize: "0.95rem",
                      outline: "none",
                      width: "100%",
                      opacity: status === "loading" ? 0.6 : 1,
                      cursor: status === "loading" ? "not-allowed" : "text",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      background: "#CCFF00",
                      color: "#0A0A0A",
                      border: "none",
                      borderRadius: "8px",
                      padding: "0.875rem 1.5rem",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      opacity: status === "loading" ? 0.8 : 1,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {status === "loading" ? "Subscribing..." : "Send Me the Guides"}
                  </button>
                </form>
                {message && (
                  <p style={{ color: "#ff6b6b", fontSize: "0.85rem", marginTop: "0.5rem", textAlign: "center" }}>
                    {message}
                  </p>
                )}
                <p style={{ color: "#555", fontSize: "0.75rem" }}>
                  No spam. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "2rem", textAlign: "center" }}>
        <p style={{ color: "#444", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Barry Psychology ·{" "}
          <a href="https://www.instagram.com/barry.psychology" target="_blank" rel="noopener noreferrer" style={{ color: "#CCFF00", textDecoration: "none" }}>
            @barry.psychology
          </a>
        </p>
      </footer>

    </div>
  );
}
