export default function App() {
  const accent = "#1f7a4a";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fbf9",
        display: "flex",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          padding: "0 24px",
          lineHeight: 1.6,
          color: "#111",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        {/* Header */}
        <header
          style={{
            borderBottom: `2px solid ${accent}`,
            paddingBottom: "18px",
            marginBottom: "28px",
          }}
        >
          {/* Name + GitHub */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "2.5rem" }}>
              Austin Nguyen
            </h1>

            <a
              href="https://github.com/AustynN15"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: "10px",
                border: `1px solid ${accent}`,
                background: "#eef8f2",
                fontWeight: "bold",
                color: accent,
              }}
            >
              <img
                src="/portfolio/github.png"
                alt="GitHub"
                style={{ width: "20px", height: "20px" }}
              />
              GitHub
            </a>
          </div>

          <p style={{ margin: "6px 0", fontWeight: 500 }}>
            Computer Science Student | Software Engineering
          </p>

          <p style={{ maxWidth: "720px", marginTop: "14px", color: "#333" }}>
            I am a Computer Science student at Louisiana State University with
            strong interests in data analytics, product design, and
            technology-driven marketing. I enjoy building user-focused
            applications and exploring how data and design work together to
            improve digital experiences.
          </p>

          <p style={{ marginTop: "10px", color: accent, fontWeight: 600 }}>
            Seeking opportunities in Data Analytics, UX/Product Design, and
            Technical Marketing.
          </p>
        </header>

        {/* Education */}
        <section
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            background: "white",
            border: "1px solid #e6efe9",
            borderRadius: "14px",
            padding: "16px",
            marginBottom: "28px",
          }}
        >
          <img
            src="/portfolio/lsu.png"
            alt="LSU Logo"
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
          />

          <div>
            <h2 style={{ margin: 0, color: accent }}>Education</h2>
            <p style={{ margin: "6px 0 0 0" }}>
              Louisiana State University — Expected Graduation: Fall 2026
            </p>
          </div>
        </section>

        {/* Current Project */}
        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ color: accent }}>Current Project</h2>

          <div
            style={{
              border: "1px solid #e6efe9",
              borderRadius: "14px",
              padding: "16px",
              background: "white",
              marginTop: "10px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>FocusFeed</h3>
            <p>
              A swipe-based learning platform designed to reduce digital
              distraction and encourage focused, interactive learning.
            </p>
            <p>
              <b>Highlights:</b> user-centered interface design,
              engagement-driven interaction model, interactive content structure
            </p>
          </div>
        </section>

        {/* Past Projects */}
        <section>
          <h2 style={{ color: accent }}>Past Projects</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
              marginTop: "12px",
            }}
          >
            <div
              style={{
                border: "1px solid #e6efe9",
                borderRadius: "14px",
                padding: "16px",
                background: "white",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Finance Tracker</h3>
              <p>
                A budgeting application that tracks income and expenses while
                generating summaries and financial insights.
              </p>
              <p>
                <b>Highlights:</b> data categorization, monthly analytics,
                budgeting recommendations
              </p>
            </div>

            <div
              style={{
                border: "1px solid #e6efe9",
                borderRadius: "14px",
                padding: "16px",
                background: "white",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Study Planner (Calendar + Timer)</h3>
              <p>
                An interactive planner combining scheduling and timer tools to
                improve productivity and task management.
              </p>
              <p>
                <b>Highlights:</b> task tracking, reminders, timed study sessions
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section style={{ marginTop: "32px" }}>
          <h2 style={{ color: accent }}>Skills & Involvement</h2>
          <ul>
            <li>
              <b>Technical Skills:</b> JavaScript, Python, Java, GitHub,
              Flutter, Figma
            </li>
            <li>
              <b>Coursework:</b> Data Structures, Software Systems, Operating
              Systems, Computer Organization & Design
            </li>
            <li>
              <b>Professional Experience:</b> Part-time Server/Bartender
              (2022–Present)
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer
          style={{
            marginTop: "40px",
            paddingTop: "12px",
            borderTop: `1px solid ${accent}`,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div>© {new Date().getFullYear()} Austin Nguyen</div>
          <div>Last updated: 2026-02-24</div>
        </footer>
      </div>
    </div>
  );
}