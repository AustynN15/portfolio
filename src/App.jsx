import { useEffect } from "react";

export default function App() {
  const accent = "#1f7a4a";
  const base = import.meta.env.BASE_URL;

  const year = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  useEffect(() => {
    document.title = "Austin Nguyen | Portfolio";
    const desc =
      "Austin Nguyen — Computer Science student portfolio featuring education, projects, and skills.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.topBar}>
          <div style={styles.brandLeft}>
            <div style={{ ...styles.dot, backgroundColor: accent }} />
            <div style={styles.brandText}>
              <div style={styles.brandName}>Austin Nguyen</div>
              <div style={styles.brandTag}>
                Computer Science • Software Engineering
              </div>
            </div>
          </div>

          <nav style={styles.nav}>
            <button
              onClick={() => scrollTo("education")}
              style={{ ...styles.navBtn, borderColor: accent }}
            >
              Education
            </button>
            <button
              onClick={() => scrollTo("projects")}
              style={{ ...styles.navBtn, borderColor: accent }}
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo("skills")}
              style={{ ...styles.navBtn, borderColor: accent }}
            >
              Skills
            </button>
          </nav>

          <div style={styles.linksRow}>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.iconBtn, borderColor: accent }}
            >
              <img
                src={`${base}github.png`}
                alt="GitHub"
                style={styles.iconImg}
              />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/austin-nguyen-67917a3b4/"
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.iconBtn, borderColor: accent }}
            >
              <img
                src={`${base}linkedin.jpeg`}
                alt="LinkedIn"
                style={styles.iconImg}
              />
              LinkedIn
            </a>
          </div>
        </header>

        <section style={styles.hero}>
          <div style={styles.heroLeft}>
            <div style={styles.welcomeWrap}>
              <div style={styles.welcomeText}>Welcome</div>
              <div style={{ ...styles.welcomeAccent, backgroundColor: accent }} />
            </div>

            <h1 style={styles.heroTitle}>
              Hi, I’m <span style={{ color: accent }}>Austin Nguyen</span>
            </h1>

            <p style={styles.heroText}>
              I’m a Computer Science student focused on <b>Software Engineering</b>{" "}
              with interests in <b>data analytics</b>, <b>UX/product design</b>, and{" "}
              <b>technology-driven marketing</b>. I enjoy building user-focused
              applications and learning how strong design and clean code work
              together to create great experiences.
            </p>

            <div style={styles.heroMetaRow}>
              <div style={styles.pill}>Major: Computer Science</div>
              <div style={styles.pill}>Concentration: Software Engineering</div>
              <div style={styles.pill}>Expected Graduation: Fall 2026</div>
            </div>
          </div>

          <div style={styles.heroRight}>
            <div style={styles.photoWrap}>
              <img
                src={`${base}PORT%20PHOTO.png`}
                alt="Austin Nguyen"
                style={styles.photo}
              />
              <div style={{ ...styles.photoRing, borderColor: accent }} />
            </div>

            <div style={styles.heroCardStack}>
              <div style={styles.miniCard}>
                <div style={styles.miniTitle}>What I’m looking for</div>
                <div style={styles.miniText}>
                  Internships and entry-level roles in <b>Software Engineering</b>,{" "}
                  <b>Data Analytics</b>, and <b>UX/Product Design</b>.
                </div>
              </div>

              <div style={styles.miniCard}>
                <div style={styles.miniTitle}>Strengths</div>
                <div style={styles.miniText}>
                  Team collaboration, clean UI thinking, and building projects
                  end-to-end from idea → design → implementation.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={{ ...styles.sectionTitle, color: accent }}>Education</h2>
            <div style={styles.sectionSub}>
              A clear timeline showing my academic path from McNeese to LSU.
            </div>
          </div>

          <div style={styles.cardsGrid}>
            <div style={styles.card}>
              <div style={styles.eduRow}>
                <div style={styles.logoBox}>
                  <img
                    src={`${base}Mcneese.png`}
                    alt="McNeese State University"
                    style={styles.logoImg}
                  />
                </div>

                <div style={styles.eduText}>
                  <div style={styles.eduSchool}>McNeese State University</div>
                  <div style={styles.eduDates}>2022 – 2024</div>
                  <div style={styles.eduDesc}>
                    Built my foundation in computer science and developed early
                    technical confidence through coursework, problem-solving, and
                    consistent practice with programming fundamentals.
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.eduRow}>
                <div style={styles.logoBox}>
                  <img
                    src={`${base}lsu.png`}
                    alt="Louisiana State University"
                    style={styles.logoImg}
                  />
                </div>

                <div style={styles.eduText}>
                  <div style={styles.eduSchool}>Louisiana State University</div>
                  <div style={styles.eduDates}>
                    2024 – 2026 (Expected Graduation: Fall 2026)
                  </div>
                  <div style={styles.eduDesc}>
                    Continuing my degree with a focus on software engineering,
                    systems thinking, and collaborative development. I enjoy applying
                    what I learn through projects that blend design, code quality,
                    and usability.
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.highlightRow}>
                <div
                  style={{ ...styles.badge, borderColor: accent, color: accent }}
                >
                  Achievements
                </div>
                <div style={styles.highlightText}>
                  <b>Dean’s List Appearance</b> — McNeese State University,
                  Louisiana State University
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={{ ...styles.sectionTitle, color: accent }}>Projects</h2>
            <div style={styles.sectionSub}>
              These projects show how I think through design, implementation, and
              collaboration.
            </div>
          </div>

          <div style={styles.cardsGrid}>
            <div style={{ ...styles.card, ...styles.featureCard }}>
              <div style={styles.cardTop}>
                <div
                  style={{
                    ...styles.tag,
                    backgroundColor: "rgba(31,122,74,0.10)",
                    color: accent,
                  }}
                >
                  Current Project
                </div>
              </div>

              <div style={styles.cardTitle}>FocusFeed</div>
              <div style={styles.cardBody}>
                FocusFeed is a swipe-based learning platform designed to reduce
                digital distraction and encourage focused, interactive learning. The
                goal is to make studying easier to start and easier to maintain by
                breaking content into quick, digestible “cards” that users can review
                consistently.
              </div>
              <div style={styles.cardBody}>
                The long-term vision is for FocusFeed to support saved study sets,
                progress tracking, and personalized review sessions so users can stay
                accountable and build stronger study habits over time. This project
                has helped me strengthen my front-end decision making and focus on
                usability and clean design.
              </div>

              <div style={styles.cardFooter}>
                <div style={styles.chip}>UX / Flow</div>
                <div style={styles.chip}>Front-end Thinking</div>
                <div style={styles.chip}>Iteration</div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTop}>
                <div
                  style={{
                    ...styles.tag,
                    backgroundColor: "rgba(17,17,17,0.06)",
                    color: "#111",
                  }}
                >
                  Past Project
                </div>
              </div>

              <div style={styles.cardTitle}>Finance Tracker</div>
              <div style={styles.cardBody}>
                A budgeting application that tracks income and expenses to help users
                manage spending. This project taught me how to translate an idea into
                a clear interface by working through design decisions in <b>Figma</b>{" "}
                and implementing them in <b>Flutter</b>. It was one of my first
                projects that really kicked off my front-end design work.
              </div>
              <div style={styles.cardBody}>
                It also improved my team collaboration through shared planning, task
                division, and merging everyone’s work into one consistent final
                product.
              </div>

              <div style={styles.cardFooter}>
                <div style={styles.chip}>Figma</div>
                <div style={styles.chip}>Flutter</div>
                <div style={styles.chip}>Collaboration</div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTop}>
                <div
                  style={{
                    ...styles.tag,
                    backgroundColor: "rgba(17,17,17,0.06)",
                    color: "#111",
                  }}
                >
                  Past Project
                </div>
              </div>

              <div style={styles.cardTitle}>Study Planner (Calendar / Timer)</div>
              <div style={styles.cardBody}>
                An interactive planner combining scheduling and time management tools
                for students. This project introduced me to core web fundamentals
                using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, and it helped me
                understand how structure, styling, and interactivity work together.
              </div>
              <div style={styles.cardBody}>
                It also introduced me to <b>Java</b> through logic-focused development
                and problem solving. Like my other projects, it strengthened team
                collaboration through communication, shared goals, and iterative
                improvement.
              </div>

              <div style={styles.cardFooter}>
                <div style={styles.chip}>HTML/CSS/JS</div>
                <div style={styles.chip}>Java</div>
                <div style={styles.chip}>Teamwork</div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.fillRow}>
                <div style={styles.fillLeft}>
                  <div style={styles.fillTitle}>More projects coming</div>
                  <div style={styles.fillText}>
                    I’m actively building and improving projects — adding polish,
                    documenting features, and expanding functionality so the portfolio
                    stays current and complete.
                  </div>
                </div>
                <div
                  style={{ ...styles.fillBadge, borderColor: accent, color: accent }}
                >
                  In Progress
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={{ ...styles.sectionTitle, color: accent }}>Skills</h2>
            <div style={styles.sectionSub}>
              A filled-out layout so the section doesn’t feel plain.
            </div>
          </div>

          <div style={styles.skillGrid}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Technical Skills</div>
              <div style={styles.skillList}>
                <div style={styles.skillItem}>
                  <span style={styles.bullet} /> JavaScript
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.bullet} /> Python
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.bullet} /> Java
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.bullet} /> Git / GitHub
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.bullet} /> Flutter
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.bullet} /> Figma
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Coursework</div>
              <div style={styles.skillList}>
                <div style={styles.skillItem}>
                  <span style={styles.bullet} /> Data Structures
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.bullet} /> Software Systems
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.bullet} /> Operating Systems
                </div>
                <div style={styles.skillItem}>
                  <span style={styles.bullet} /> Computer Organization &amp; Design
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Collaboration & Work Style</div>
              <div style={styles.cardBody}>
                I’m comfortable working in team environments where tasks are split,
                progress is communicated, and the final product needs consistency. I
                like writing clean, readable code and keeping UI decisions intentional.
              </div>
              <div style={styles.cardFooter}>
                <div style={styles.chip}>Team Collaboration</div>
                <div style={styles.chip}>UI Clarity</div>
                <div style={styles.chip}>Consistency</div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Experience</div>
              <div style={styles.cardBody}>
                <b>Past Experience:</b> Part-time Server/Bartender (2022–Present)
              </div>
              <div style={styles.cardBody}>
                Built communication skills, multitasking under pressure, and the
                ability to stay organized in fast-paced environments.
              </div>
            </div>
          </div>
        </section>

        <footer style={{ ...styles.footer, borderTopColor: accent }}>
          <div style={styles.footerRow}>
            <span>© {year} Austin Nguyen</span>
            <span>Last updated: {lastUpdated}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #fbfdfc 0%, #f6fbf8 100%)",
    padding: "22px 18px 40px",
    color: "#111",
  },
  container: {
    maxWidth: 1120,
    margin: "0 auto",
    width: "100%",
    fontFamily: "Times New Roman, Times, serif",
    lineHeight: 1.6,
  },
  topBar: {
    position: "sticky",
    top: 10,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
    padding: "12px 14px",
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.85)",
    border: "1px solid #e7efe9",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    backdropFilter: "blur(8px)",
  },
  brandLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    minWidth: 240,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 999,
  },
  brandText: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  brandName: {
    fontWeight: 800,
    fontSize: 16,
  },
  brandTag: {
    fontSize: 13,
    opacity: 0.85,
  },
  nav: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  navBtn: {
    appearance: "none",
    backgroundColor: "#fff",
    border: "1px solid",
    borderRadius: 999,
    padding: "8px 12px",
    fontWeight: 800,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  linksRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  iconBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid",
    backgroundColor: "#fff",
    textDecoration: "none",
    color: "#0b2b1b",
    fontWeight: 800,
    fontFamily: "inherit",
  },
  iconImg: {
    width: 18,
    height: 18,
    borderRadius: 4,
    objectFit: "cover",
  },

  hero: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "1.35fr 0.9fr",
    gap: 18,
    alignItems: "stretch",
  },
  heroLeft: {
    borderRadius: 22,
    backgroundColor: "#fff",
    border: "1px solid #e7efe9",
    boxShadow: "0 14px 38px rgba(0,0,0,0.06)",
    padding: "26px 22px",
    minHeight: 340,
  },
  heroRight: {
    borderRadius: 22,
    backgroundColor: "#fff",
    border: "1px solid #e7efe9",
    boxShadow: "0 14px 38px rgba(0,0,0,0.06)",
    padding: "22px",
    display: "grid",
    alignContent: "start",
    gap: 14,
  },

  welcomeWrap: {
    display: "inline-block",
    position: "relative",
    marginBottom: 10,
  },
  welcomeText: {
    fontFamily: "cursive",
    fontSize: 34,
    lineHeight: 1,
    letterSpacing: 0.5,
  },
  welcomeAccent: {
    position: "absolute",
    left: 0,
    bottom: -6,
    width: 86,
    height: 6,
    borderRadius: 999,
    opacity: 0.22,
  },

  heroTitle: {
    margin: "0 0 10px 0",
    fontSize: 50,
    lineHeight: 1.05,
  },
  heroText: {
    margin: "0 0 14px 0",
    fontSize: 16,
    maxWidth: 760,
  },
  heroMetaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  pill: {
    backgroundColor: "#f7fbf8",
    border: "1px solid #e7efe9",
    padding: "7px 10px",
    borderRadius: 999,
    fontWeight: 700,
    fontSize: 13,
  },

  photoWrap: {
    position: "relative",
    width: "100%",
    display: "grid",
    placeItems: "center",
    padding: "6px 0 2px",
  },
  photo: {
    width: 190,
    height: 190,
    borderRadius: 999,
    objectFit: "cover",
    objectPosition: "60% 18%",
    border: "8px solid #fff",
    boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
  },
  photoRing: {
    position: "absolute",
    width: 210,
    height: 210,
    borderRadius: 999,
    border: "2px solid",
    opacity: 0.55,
  },

  heroCardStack: {
    display: "grid",
    gap: 12,
  },
  miniCard: {
    borderRadius: 16,
    border: "1px solid #e7efe9",
    backgroundColor: "#fbfdfc",
    padding: "14px 14px",
  },
  miniTitle: {
    fontWeight: 900,
    marginBottom: 6,
  },
  miniText: {
    fontSize: 14,
    opacity: 0.92,
  },

  section: {
    marginTop: 26,
  },
  sectionHeader: {
    marginBottom: 12,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  sectionTitle: {
    margin: 0,
    fontSize: 34,
  },
  sectionSub: {
    fontSize: 14,
    opacity: 0.8,
    maxWidth: 520,
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 14,
  },
  card: {
    backgroundColor: "#fff",
    border: "1px solid #e7efe9",
    borderRadius: 18,
    padding: 18,
    boxShadow: "0 10px 26px rgba(0,0,0,0.05)",
  },
  featureCard: {
    gridColumn: "1 / -1",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  tag: {
    display: "inline-flex",
    alignItems: "center",
    padding: "5px 10px",
    borderRadius: 999,
    fontWeight: 900,
    fontSize: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 900,
    marginBottom: 6,
  },
  cardBody: {
    fontSize: 15,
    marginTop: 10,
  },
  cardFooter: {
    marginTop: 14,
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    border: "1px solid #e7efe9",
    backgroundColor: "#fbfdfc",
    borderRadius: 999,
    padding: "6px 10px",
    fontSize: 12,
    fontWeight: 800,
  },

  eduRow: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
  },
  logoBox: {
    width: 88,
    height: 66,
    borderRadius: 14,
    border: "1px solid #e7efe9",
    backgroundColor: "#fff",
    display: "grid",
    placeItems: "center",
    padding: 8,
    flex: "0 0 auto",
  },
  logoImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  eduText: {
    display: "grid",
    gap: 4,
  },
  eduSchool: {
    fontWeight: 900,
    fontSize: 18,
  },
  eduDates: {
    fontWeight: 800,
    opacity: 0.85,
  },
  eduDesc: {
    marginTop: 6,
    fontSize: 14,
    opacity: 0.92,
  },

  highlightRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  badge: {
    border: "2px solid",
    borderRadius: 999,
    padding: "7px 10px",
    fontWeight: 900,
    fontSize: 12,
    backgroundColor: "#fff",
  },
  highlightText: {
    fontSize: 15,
  },

  fillRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  fillLeft: {
    maxWidth: 640,
  },
  fillTitle: {
    fontWeight: 900,
    fontSize: 18,
    marginBottom: 6,
  },
  fillText: {
    fontSize: 14,
    opacity: 0.9,
  },
  fillBadge: {
    border: "2px solid",
    borderRadius: 999,
    padding: "8px 12px",
    fontWeight: 900,
    backgroundColor: "#fff",
    height: "fit-content",
  },

  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 14,
  },
  skillList: {
    marginTop: 10,
    display: "grid",
    gap: 8,
  },
  skillItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontWeight: 800,
    fontSize: 14,
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: "#1f7a4a",
    opacity: 0.9,
  },

  footer: {
    marginTop: 26,
    paddingTop: 14,
    borderTop: "2px solid",
    borderRadius: 12,
  },
  footerRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
    fontSize: 14,
    opacity: 0.9,
    paddingBottom: 6,
  },
};