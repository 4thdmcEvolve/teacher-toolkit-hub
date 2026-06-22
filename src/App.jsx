import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const NAVY = "#1B3A6B";
const NAVY_DEEP = "#0d1f3c";
const NAVY_DARKER = "#08111e";
const GOLD = "#C9A84C";
const GOLD_LIGHT = "#e2c068";
const SUBSCRIBE_URL = "https://brrteachingsubscribe.lovable.app/";

const TOOLS = [
  {
    id: "burnout",
    icon: "🔥",
    name: "Teacher Burnout Audit",
    description: "10 honest questions. A real picture of where you are and what to do about it.",
    cta: "Take the Audit",
    url: "https://burnout-audit.vercel.app/",
    free: true,
  },
  {
    id: "grader",
    icon: "📊",
    name: "Assignment Grader",
    description: "Paste student work, set your rubric, get grades and feedback in four styles.",
    cta: "Grade Work",
    url: "https://assignmentgrader-nu.vercel.app/",
  },
  {
    id: "diff",
    icon: "🎯",
    name: "Differentiation Helper",
    description: "Modify any lesson for below-level, above-level, ELL, and IEP — all in one click.",
    cta: "Differentiate",
    url: "https://differentiation-helper.vercel.app/",
  },
  {
    id: "subplan",
    icon: "📋",
    name: "Sub Plan Generator",
    description: "A complete substitute teacher plan in under 60 seconds. Schedule, instructions, classroom tips, and a note template — done.",
    cta: "Build a Sub Plan",
    url: "https://sub-plan-generator.vercel.app/",
  },
  {
    id: "reportcard",
    icon: "📝",
    name: "Report Card Comment Writer",
    description: "Generate three unique, ready-to-use report card comments per student in seconds. Choose tone, length, and pronouns.",
    cta: "Write Comments",
    url: "https://report-card-comment-writer.vercel.app/",
  },
];

const COMING_SOON = [
  {
    id: "lesson",
    icon: "📚",
    name: "Lesson Plan Generator",
    teaser: "The most powerful tool in the toolkit. Full multi-stage AI verification across every subject and grade level. Complete lesson plans with objectives, warm-up, instruction, practice, and built-in differentiation — in under two minutes. Nothing else like it.",
  },
  {
    id: "activity",
    icon: "⚡",
    name: "Activity Generator",
    teaser: "Not a worksheet generator. A full AI-verified activity builder that catches its own errors before you see them — factual claims cross-checked, math independently verified by two methods. Built for teachers who can't afford to hand students wrong content.",
  },
  {
    id: "assignment",
    icon: "🏗️",
    name: "Assignment Generator",
    teaser: "Subject-aware, formatted, printable assignments built around your exact learning objectives. Separate answer key generated on demand. Built for the way teachers actually plan — not the way edtech companies think they do.",
  },
];

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredSoon, setHoveredSoon] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: NAVY_DARKER,
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Decorative background */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: `radial-gradient(ellipse at 70% 20%, rgba(27,58,107,0.6) 0%, transparent 60%), radial-gradient(ellipse at 10% 90%, rgba(201,168,76,0.06) 0%, transparent 50%), linear-gradient(160deg, ${NAVY_DARKER} 0%, ${NAVY_DEEP} 100%)`,
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* NAV */}
      <nav style={{
        position: "relative",
        zIndex: 10,
        padding: "18px 40px",
        background: "rgba(8,17,30,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 14,
          letterSpacing: 3,
          color: "#fff",
          fontWeight: 500,
        }}>
          4THDMC <span style={{ color: GOLD }}>|</span> EVOLVE LLC
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 11,
          color: "rgba(255,255,255,0.4)",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "#5ecf8a",
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#5ecf8a",
              boxShadow: "0 0 8px #5ecf8a",
            }} />
            Tools Active for Subscribers
          </span>
          <a href="mailto:brandon@4thdmc.com" style={{
            color: "rgba(255,255,255,0.5)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.target.style.color = GOLD}
          onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}>
            Support
          </a>
        </div>
      </nav>

      {/* SUBSCRIBER INFO BANNER */}
      <div style={{
        position: "relative",
        zIndex: 10,
        background: "rgba(201,168,76,0.08)",
        borderBottom: "1px solid rgba(201,168,76,0.2)",
        padding: "14px 40px",
        textAlign: "center",
        fontSize: 14,
        color: "rgba(255,255,255,0.75)",
        lineHeight: 1.6,
      }}>
        <strong style={{ color: GOLD }}>Just subscribed?</strong> Check your inbox for the access password to each tool. Don't see it? Check your spam folder — some email providers filter automated messages.{" "}
        <span style={{ color: "rgba(255,255,255,0.45)" }}>
          Not subscribed yet?{" "}
          <a
            href={SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GOLD, textDecoration: "underline", fontWeight: 600 }}
          >
            Get access here.
          </a>
        </span>
      </div>

      {/* HERO */}
      <section style={{
        position: "relative",
        zIndex: 1,
        padding: "80px 40px 40px",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: GOLD }} />
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            letterSpacing: 4,
            color: GOLD,
            textTransform: "uppercase",
          }}>
            Your Teacher Toolkit
          </div>
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(40px, 6vw, 64px)",
          fontWeight: 900,
          lineHeight: 1.05,
          marginBottom: 16,
          letterSpacing: "-1px",
        }}>
          Welcome back, <em style={{ color: GOLD, fontStyle: "italic" }}>Teacher.</em>
        </h1>

        <div style={{
          width: 60,
          height: 3,
          background: `linear-gradient(90deg, ${GOLD}, transparent)`,
          marginBottom: 24,
        }} />

        <p style={{
          fontSize: "clamp(15px, 2vw, 18px)",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.65)",
          maxWidth: 600,
          fontWeight: 300,
          margin: 0,
        }}>
          Five AI-powered tools, built by a teacher, ready when you are. One always free. Four for subscribers. Pick what you need today.
        </p>
      </section>

      {/* TOOLS GRID */}
      <section style={{
        position: "relative",
        zIndex: 1,
        padding: "20px 40px 60px",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}>
          {TOOLS.map(tool => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard(tool.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                display: "block",
                background: hoveredCard === tool.id
                  ? "linear-gradient(135deg, rgba(27,58,107,0.4) 0%, rgba(13,31,60,0.6) 100%)"
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${hoveredCard === tool.id ? GOLD : "rgba(255,255,255,0.1)"}`,
                borderRadius: 4,
                padding: "32px 28px",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.25s ease",
                position: "relative",
                overflow: "hidden",
                transform: hoveredCard === tool.id ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hoveredCard === tool.id
                  ? "0 20px 50px rgba(201,168,76,0.15)"
                  : "0 4px 16px rgba(0,0,0,0.2)",
              }}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${GOLD}, transparent)`,
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <span style={{ fontSize: 32 }}>{tool.icon}</span>
                <span style={{
                  background: tool.free ? "rgba(201,168,76,0.15)" : "rgba(42,157,92,0.15)",
                  border: `1px solid ${tool.free ? "rgba(201,168,76,0.4)" : "rgba(42,157,92,0.4)"}`,
                  color: tool.free ? GOLD : "#5ecf8a",
                  fontSize: 9, fontWeight: 700, letterSpacing: 2,
                  padding: "3px 8px", borderRadius: 2, textTransform: "uppercase",
                  display: "inline-flex", alignItems: "center", gap: 4,
                }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: tool.free ? GOLD : "#5ecf8a",
                  }} />
                  {tool.free ? "Always Free" : "Live"}
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 22, fontWeight: 700, lineHeight: 1.2, marginBottom: 10,
                color: hoveredCard === tool.id ? GOLD : "#fff",
                transition: "color 0.25s",
              }}>
                {tool.name}
              </h3>

              <p style={{
                fontSize: 14, lineHeight: 1.6,
                color: "rgba(255,255,255,0.55)", marginBottom: 24, fontWeight: 300,
              }}>
                {tool.description}
              </p>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: hoveredCard === tool.id ? GOLD : "transparent",
                color: hoveredCard === tool.id ? NAVY_DARKER : GOLD,
                border: `1px solid ${GOLD}`,
                fontFamily: "'DM Mono', monospace",
                fontSize: 11, fontWeight: 500, letterSpacing: 3,
                padding: "10px 18px", borderRadius: 2, textTransform: "uppercase",
                transition: "all 0.2s",
              }}>
                {tool.cta}
                <span style={{
                  transition: "transform 0.2s",
                  transform: hoveredCard === tool.id ? "translateX(4px)" : "translateX(0)",
                }}>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* COMING SOON SECTION */}
      <section style={{
        position: "relative",
        zIndex: 1,
        padding: "0 40px 80px",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {/* Section header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 32, height: 1, background: GOLD }} />
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              letterSpacing: 4, color: GOLD, textTransform: "uppercase",
            }}>
              Coming Soon · Tier 2
            </div>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900,
            lineHeight: 1.1, marginBottom: 12,
          }}>
            The next level is<br /><em style={{ color: GOLD }}>almost here.</em>
          </h2>
          <p style={{
            fontSize: 15, color: "rgba(255,255,255,0.5)",
            maxWidth: 560, lineHeight: 1.7, fontWeight: 300,
          }}>
            Three more tools are in development — the most powerful in the toolkit. Subscribe now and you'll be first in line when they launch.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}>
          {COMING_SOON.map(tool => (
            <a
              key={tool.id}
              href={SUBSCRIBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredSoon(tool.id)}
              onMouseLeave={() => setHoveredSoon(null)}
              style={{
                display: "block",
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${hoveredSoon === tool.id ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 4,
                padding: "32px 28px",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.25s ease",
                position: "relative",
                overflow: "hidden",
                transform: hoveredSoon === tool.id ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              {/* Dashed top border */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `repeating-linear-gradient(90deg, ${GOLD} 0px, ${GOLD} 8px, transparent 8px, transparent 16px)`,
                opacity: 0.4,
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <span style={{ fontSize: 32, opacity: 0.7 }}>{tool.icon}</span>
                <span style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "rgba(201,168,76,0.6)",
                  fontSize: 9, fontWeight: 700, letterSpacing: 2,
                  padding: "3px 8px", borderRadius: 2, textTransform: "uppercase",
                }}>
                  Coming Soon
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 22, fontWeight: 700, lineHeight: 1.2, marginBottom: 10,
                color: hoveredSoon === tool.id ? GOLD : "rgba(255,255,255,0.7)",
                transition: "color 0.25s",
              }}>
                {tool.name}
              </h3>

              <p style={{
                fontSize: 13, lineHeight: 1.65,
                color: "rgba(255,255,255,0.4)", marginBottom: 24, fontWeight: 300,
              }}>
                {tool.teaser}
              </p>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                color: hoveredSoon === tool.id ? GOLD : "rgba(201,168,76,0.5)",
                fontFamily: "'DM Mono', monospace",
                fontSize: 10, fontWeight: 500, letterSpacing: 3,
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}>
                Subscribe to get early access →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY BLOCK */}
      <section style={{
        position: "relative", zIndex: 1,
        padding: "20px 40px 60px", maxWidth: 1100, margin: "0 auto",
      }}>
        <div style={{
          background: "rgba(201,168,76,0.06)",
          border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: 4, padding: "28px 32px",
          display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap",
        }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              letterSpacing: 4, color: GOLD, textTransform: "uppercase", marginBottom: 8,
            }}>
              The 4D Philosophy
            </div>
            <div style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 22, fontWeight: 700, fontStyle: "italic",
              color: "#fff", lineHeight: 1.3,
            }}>
              Begin Anyway. Evolve Always. Repeat Forever.
            </div>
            <div style={{
              fontSize: 13, color: "rgba(255,255,255,0.5)",
              marginTop: 12, fontWeight: 300, lineHeight: 1.6,
            }}>
              Every tool here is built on this principle. Use them to get started faster, grow stronger, and keep showing up for your students.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        position: "relative", zIndex: 1,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 40px 24px", textAlign: "center",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 12,
            letterSpacing: 3, color: "rgba(255,255,255,0.4)", marginBottom: 4,
          }}>
            4THDMC <span style={{ color: GOLD }}>|</span> EVOLVE LLC
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: 1 }}>
            © 2026 4THDMC | EVOLVE LLC. All Rights Reserved. · Brandon Russell · The Multiplier · Chattanooga, TN
          </div>
          <div style={{
            fontSize: 10, color: "rgba(255,255,255,0.2)",
            letterSpacing: 2, textTransform: "uppercase", marginTop: 6,
          }}>
            {[
              { label: "brrteaching.com", href: "https://brrteaching.com" },
              { label: "4thdmc.com", href: "https://4thdmc.com" },
              { label: "Support", href: "mailto:brandon@4thdmc.com" },
            ].map((link, i) => (
              <span key={i}>
                {i > 0 && <span style={{ margin: "0 12px", color: "rgba(255,255,255,0.15)" }}>·</span>}
                <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = GOLD}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}>
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
