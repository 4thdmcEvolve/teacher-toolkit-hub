import { useState } from "react";

const NAVY = "#1B3A6B";
const GOLD = "#C9A84C";
const TEAL = "#0D9E82";
const DARK = "#0d1b2a";

// UPDATE THESE URLS when tools are deployed
const TOOLS = [
  {
    id: "lesson",
    emoji: "📝",
    name: "Lesson Plan Generator",
    tagline: "Complete lesson plans in 60 seconds",
    description: "Input your subject, grade, topic, and duration. Get objectives, materials, warm-up, instruction, practice, and assessment sections ready to use.",
    url: "[LESSON_PLAN_URL]", // Replace with actual Vercel URL
    tips: [
      "Be specific with your topic for better results",
      "Select learning style focus for differentiation",
      "Copy output to your planning doc and edit as needed"
    ],
    color: NAVY
  },
  {
    id: "grader",
    emoji: "📊",
    name: "Assignment Grader",
    tagline: "Grade and comment in one click",
    description: "Paste student work, select feedback type, get grades plus ready-to-use comments. Save your rubric once and reuse it for every student.",
    url: "[ASSIGNMENT_GRADER_URL]", // Replace with actual Vercel URL
    tips: [
      "Upload your rubric once to grade consistently",
      "Use 'Quick Comment' for report card language",
      "Use 'Full Feedback' for detailed guidance"
    ],
    color: GOLD
  },
  {
    id: "diff",
    emoji: "🎯",
    name: "Differentiation Helper",
    tagline: "One lesson, every learner",
    description: "Paste any lesson or assignment. Get versions for below grade level, above grade level, ELL students, and IEP accommodations.",
    url: "[DIFFERENTIATION_URL]", // Replace with actual Vercel URL
    tips: [
      "Works with lessons, worksheets, discussion prompts",
      "Select only the learner groups you need",
      "Choose which elements to differentiate"
    ],
    color: TEAL
  },
  {
    id: "burnout",
    emoji: "🔥",
    name: "Burnout Audit",
    tagline: "Check yourself before you wreck yourself",
    description: "Quick self-assessment to identify where you're spending energy and where burnout might be building. Not diagnostic — just reflection.",
    url: "https://burnout-audit.vercel.app",
    tips: [
      "Be honest — nobody sees results but you",
      "Use it to identify one thing to change this week",
      "Revisit monthly to track patterns"
    ],
    color: "#E85D4C"
  }
];

const ToolCard = ({ tool, index }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div 
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        overflow: "hidden",
        transition: "all 0.3s ease",
        animation: `fadeSlideIn 0.5s ease ${index * 0.1}s both`,
      }}
    >
      {/* Card Header */}
      <div style={{ 
        padding: "24px 20px 20px",
        borderBottom: expanded ? "1px solid rgba(255,255,255,0.06)" : "none"
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
          <div style={{
            fontSize: 32,
            lineHeight: 1,
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))"
          }}>
            {tool.emoji}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontSize: 18, 
              fontWeight: 800, 
              color: "#fff",
              letterSpacing: 0.5,
              marginBottom: 4
            }}>
              {tool.name}
            </div>
            <div style={{ 
              fontSize: 13, 
              color: tool.color,
              fontWeight: 600,
              fontStyle: "italic"
            }}>
              {tool.tagline}
            </div>
          </div>
        </div>
        
        <p style={{ 
          fontSize: 14, 
          color: "rgba(255,255,255,0.6)", 
          lineHeight: 1.6,
          margin: "0 0 16px"
        }}>
          {tool.description}
        </p>
        
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a 
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              background: tool.color,
              color: tool.color === GOLD ? DARK : "#fff",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: 1,
              textTransform: "uppercase",
              transition: "all 0.2s ease",
              boxShadow: `0 4px 20px ${tool.color}40`,
            }}
          >
            Open Tool →
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              padding: "12px 16px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.5)",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {expanded ? "Hide Tips ↑" : "Quick Tips ↓"}
          </button>
        </div>
      </div>
      
      {/* Expandable Tips */}
      {expanded && (
        <div style={{ 
          padding: "16px 20px 20px",
          background: "rgba(0,0,0,0.2)",
        }}>
          <div style={{ 
            fontSize: 11, 
            fontWeight: 700, 
            color: tool.color,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 12
          }}>
            Quick Tips
          </div>
          {tool.tips.map((tip, i) => (
            <div key={i} style={{ 
              display: "flex", 
              gap: 10, 
              marginBottom: 8,
              fontSize: 13,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.5
            }}>
              <span style={{ color: tool.color, fontWeight: 700 }}>→</span>
              <span>{tip}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: `linear-gradient(160deg, ${DARK} 0%, ${NAVY} 50%, ${DARK} 100%)`,
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        a:hover { transform: translateY(-2px); filter: brightness(1.1); }
        button:hover { background: rgba(255,255,255,0.05) !important; color: rgba(255,255,255,0.8) !important; }
      `}</style>

      {/* Header */}
      <header style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        background: `${DARK}ee`,
        backdropFilter: "blur(10px)",
        zIndex: 100,
      }}>
        <div style={{ 
          fontWeight: 900, 
          fontSize: 16, 
          color: "#fff", 
          letterSpacing: 1 
        }}>
          4THDMC <span style={{ color: GOLD }}>|</span> EVOLVE
        </div>
        <div style={{
          background: `${GOLD}20`,
          border: `1px solid ${GOLD}`,
          color: GOLD,
          fontSize: 10,
          fontWeight: 700,
          padding: "5px 12px",
          borderRadius: 20,
          letterSpacing: 2,
          textTransform: "uppercase",
          animation: "pulse 2s ease-in-out infinite"
        }}>
          Beta
        </div>
      </header>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "32px 16px 80px" }}>
        
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{
            display: "inline-block",
            border: `1px solid ${GOLD}`,
            color: GOLD,
            fontSize: 10,
            letterSpacing: 4,
            padding: "6px 16px",
            marginBottom: 16,
            fontWeight: 700,
            borderRadius: 2,
            textTransform: "uppercase",
          }}>
            Educate Beyond
          </div>
          
          <h1 style={{
            fontSize: "clamp(32px, 8vw, 48px)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.1,
            margin: "0 0 12px",
            letterSpacing: 1,
          }}>
            TEACHER<br />
            <span style={{ color: GOLD }}>TOOLKIT</span>
          </h1>
          
          <div style={{
            width: 50,
            height: 3,
            background: GOLD,
            margin: "0 auto 16px",
          }} />
          
          <p style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 15,
            fontStyle: "italic",
            margin: 0,
          }}>
            "Begin Anyway. Evolve Always. Repeat Forever."
          </p>
        </div>

        {/* Beta Notice */}
        <div style={{
          background: `linear-gradient(135deg, ${NAVY}40, ${GOLD}15)`,
          border: `1px solid ${GOLD}40`,
          borderRadius: 12,
          padding: "20px",
          marginBottom: 32,
          textAlign: "center",
        }}>
          <div style={{ 
            fontSize: 14, 
            fontWeight: 700, 
            color: "#fff",
            marginBottom: 8
          }}>
            Welcome, Beta Tester 👋
          </div>
          <p style={{ 
            fontSize: 13, 
            color: "rgba(255,255,255,0.6)", 
            margin: "0 0 12px",
            lineHeight: 1.6
          }}>
            You have 14 days to try these tools in your real work. Use what fits. Skip what doesn't. 
            Tell us everything — good and bad. Your feedback shapes what we build next.
          </p>
          <div style={{
            display: "inline-flex",
            gap: 16,
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
          }}>
            <span><strong style={{ color: GOLD }}>Day 7:</strong> Midpoint survey</span>
            <span><strong style={{ color: GOLD }}>Day 14:</strong> Final feedback</span>
          </div>
        </div>

        {/* Section Label */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 20,
        }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            color: GOLD,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}>
            ✦ Your Tools
          </div>
          <div style={{
            flex: 1,
            height: 1,
            background: "rgba(255,255,255,0.08)",
          }} />
        </div>

        {/* Tool Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
          {TOOLS.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {/* How It Works */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          padding: "24px 20px",
          marginBottom: 32,
        }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            color: GOLD,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            ✦ How It Works
          </div>
          
          {[
            "Open any tool — no login, no account",
            "Fill in your details",
            "Click generate",
            "Copy the output and use it",
            "Edit to fit your style — AI is the starting point"
          ].map((step, i) => (
            <div key={i} style={{
              display: "flex",
              gap: 12,
              marginBottom: 10,
              fontSize: 14,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.5,
            }}>
              <span style={{ 
                color: GOLD, 
                fontWeight: 800,
                minWidth: 20,
              }}>
                {i + 1}.
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        {/* Questions */}
        <div style={{
          textAlign: "center",
          padding: "24px 20px",
          background: `${NAVY}40`,
          borderRadius: 12,
          border: `1px solid ${NAVY}`,
        }}>
          <div style={{ 
            fontSize: 14, 
            fontWeight: 700, 
            color: "#fff",
            marginBottom: 8
          }}>
            Questions or Problems?
          </div>
          <p style={{ 
            fontSize: 13, 
            color: "rgba(255,255,255,0.5)", 
            margin: "0 0 12px" 
          }}>
            Email Brandon directly — include the tool name and what happened.
          </p>
          <a 
            href="mailto:cario333ccc@gmail.com"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              background: "transparent",
              border: `1px solid ${GOLD}`,
              color: GOLD,
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: 1,
            }}
          >
            cario333ccc@gmail.com
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "24px 16px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        color: "rgba(255,255,255,0.2)",
        fontSize: 11,
        letterSpacing: 2,
        textTransform: "uppercase",
      }}>
        <span style={{ color: `${GOLD}50` }}>4THDMC | EVOLVE</span>
        <span style={{ margin: "0 8px" }}>•</span>
        Brandon Russell
        <span style={{ margin: "0 8px" }}>•</span>
        Chattanooga, TN
      </footer>
    </div>
  );
}
