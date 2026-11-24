
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Menu,
  MessageCircle,
  Sparkles,
  Users,
  X,
  CheckCircle2,
} from "lucide-react";
import "../App.css";

const features = [
  {
    number: "01",
    icon: Users,
    tag: "SMART MATCHING",
    title: "Find your kind of people.",
    description:
      "Meet students with skills you want to learn and interests that match what you can teach.",
    color: "feature-sage",
  },
  {
    number: "02",
    icon: MessageCircle,
    tag: "PRIVATE MESSAGING",
    title: "Turn questions into conversations.",
    description:
      "Connect directly, exchange ideas, and get help from fellow students in a friendly space.",
    color: "feature-cream",
  },
  {
    number: "03",
    icon: BookOpen,
    tag: "STUDY GROUPS",
    title: "Make learning a team sport.",
    description:
      "Find your study circle, explore shared interests, and make progress together.",
    color: "feature-lime",
  },
];

const steps = [
  {
    number: "01",
    title: "Show what you know",
    description:
      "Build your student profile and add the subjects, skills, and topics you can teach.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Find what you need",
    description:
      "Discover students who can help you learn and who are looking for your knowledge.",
    icon: Users,
  },
  {
    number: "03",
    title: "Start your loop",
    description:
      "Connect, exchange knowledge, and grow through shared learning experiences.",
    icon: Sparkles,
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our idea", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
];

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? "footer-brand" : ""}`} href="#home">
      <span className="brand-icon">
        <GraduationCap size={23} strokeWidth={1.8} />
      </span>
      <span className="brand-name">
        skill<span>loop</span>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Brand />

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}

          <div className="nav-actions">
            <a className="nav-login" href="/login" onClick={closeMenu}>
              Log in
            </a>
            <a
              className="button button-dark nav-signup"
              href="/register"
              onClick={closeMenu}
            >
              Join SkillLoop <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              THE STUDENT LEARNING COMMUNITY
            </div>

            <h1>
              Learn something.
              <br />
              <em>Share something.</em>
              <br />
              Grow together<span className="hero-period">.</span>
            </h1>

            <p className="hero-description">
              Everyone has something to teach and something to learn.
              Find your people, exchange knowledge, and make your
              student journey a little more connected.
            </p>

            <div className="hero-actions">
              <a href="/register" className="button button-dark">
                Find your learning partner
                <ArrowUpRight size={17} />
              </a>
              <a href="#how-it-works" className="button button-outline">
                Discover how it works
                <ArrowDown size={15} />
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars" aria-hidden="true">
                <span>B</span>
                <span>A</span>
                <span>S</span>
                <span>+</span>
              </div>
              <p>
                Built around students.
                <strong> Better through sharing.</strong>
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-art-card">
              <div className="art-topline">
                <span>LEARN · SHARE · REPEAT</span>
                <Sparkles size={17} />
              </div>

              <div className="art-scene">
                <div className="scene-sun" />
                <div className="scene-circle scene-circle-one" />
                <div className="scene-circle scene-circle-two" />

                <div className="scene-book book-one" />
                <div className="scene-book book-two" />

                <div className="student student-one">
                  <div className="student-head">
                    <div className="student-hair" />
                    <div className="student-face" />
                  </div>
                  <div className="student-body body-one">
                    <span className="body-arm arm-one" />
                  </div>
                </div>

                <div className="student student-two">
                  <div className="student-head">
                    <div className="student-hair hair-two" />
                    <div className="student-face" />
                  </div>
                  <div className="student-body body-two">
                    <span className="body-arm arm-two" />
                  </div>
                </div>

                <div className="study-table">
                  <div className="table-top" />
                  <div className="table-leg table-leg-one" />
                  <div className="table-leg table-leg-two" />
                </div>

                <div className="art-sparkle sparkle-one">✳</div>
                <div className="art-sparkle sparkle-two">✦</div>
                <div className="art-sparkle sparkle-three">✳</div>
              </div>

              <div className="art-bottomline">
                <span>A COMMUNITY OF SHARED KNOWLEDGE</span>
                <span>01 — 03</span>
              </div>
            </div>

            <div className="floating-note floating-note-top">
              <span className="floating-note-icon">
                <BookOpen size={17} />
              </span>
              <span>
                <strong>What can you teach?</strong>
                <small>Your knowledge matters.</small>
              </span>
            </div>

            <div className="floating-note floating-note-bottom">
              <span className="floating-note-icon note-icon-olive">
                <Users size={17} />
              </span>
              <span>
                <strong>Find your study circle</strong>
                <small>Better, together.</small>
              </span>
            </div>

            <div className="hero-decoration hero-decoration-one" />
            <div className="hero-decoration hero-decoration-two" />
          </div>

          <div className="hero-bottom-label">
            <span>YOUR SKILLS HAVE A PLACE HERE</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section section-pad" id="about">
          <div className="section-kicker">
            <span>01</span>
            <span className="kicker-line" />
            THE IDEA BEHIND SKILLLOOP
          </div>

          <div className="about-grid">
            <div className="about-heading">
              <p className="eyebrow">A LITTLE HELP GOES A LONG WAY</p>
              <h2>
                The best lessons
                <br />
                can come from
                <br />
                <em>each other.</em>
              </h2>
            </div>

            <div className="about-copy">
              <p className="about-lead">
                What if finding academic help was as easy as finding a
                fellow student?
              </p>
              <p>
                SkillLoop is a student peer-to-peer learning platform
                where knowledge moves both ways. Students can share
                what they know, discover what they want to learn, and
                connect with people who can help them grow.
              </p>
              <a href="#features" className="inline-link">
                Explore what you can do <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="about-highlight">
            <div className="highlight-symbol">
              <Sparkles size={29} />
            </div>
            <div>
              <span>OUR BELIEF</span>
              <p>
                You don't need to know everything.
                <strong> You just need something worth sharing.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="steps-section section-pad" id="how-it-works">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR JOURNEY STARTS HERE</p>
              <h2>
                Three little steps.
                <br />
                <em>A whole lot of growth.</em>
              </h2>
            </div>
            <p className="section-side-copy">
              Learning together doesn't have to be complicated.
              Start with what you know and discover where it takes you.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="step-card" key={step.number}>
                  <div className="step-card-top">
                    <span className="step-number">{step.number}</span>
                    <span className="step-icon">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span className="step-bottom-line" />
                </article>
              );
            })}
          </div>
        </section>

        {/* FEATURES */}
        <section className="features-section section-pad" id="features">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE SKILLLOOP EXPERIENCE</p>
              <h2>
                Learning looks
                <br />
                <em>better together.</em>
              </h2>
            </div>
            
          </div>

          <div className="features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className={`feature-card ${feature.color}`}
                  key={feature.number}
                >
                  <div className="feature-top">
                    <span>{feature.number} / 03</span>
                    <ArrowUpRight size={20} />
                  </div>

                  <div className="feature-icon">
                    <Icon size={29} strokeWidth={1.6} />
                  </div>

                  <span className="feature-tag">{feature.tag}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <div className="feature-decoration">
                    <Icon size={84} strokeWidth={0.8} />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="feature-footer">
            <span>ONE COMMUNITY. MANY WAYS TO GROW.</span>
            <span>MADE FOR STUDENTS, BY STUDENTS.</span>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="quote-section">
          <div className="quote-inner">
            <span className="quote-mark">“</span>
            <p className="eyebrow">A THOUGHT WORTH SHARING</p>
            <blockquote>
              The more we share
              <br />
              what we know, the more
              <br />
              <em>we all grow.</em>
            </blockquote>
            <div className="quote-bottom">
              <span />
              THE SKILLLOOP PHILOSOPHY
              <span />
            </div>
          </div>
          <div className="quote-orbit orbit-one" />
          <div className="quote-orbit orbit-two" />
        </section>

        {/* JOIN */}
        <section className="join-section section-pad" id="join">
          <div className="join-card">
            <div className="join-content">
              <p className="eyebrow">YOUR PEOPLE ARE OUT THERE</p>
              <h2>
                Come for the
                <br />
                learning. Stay for
                <br />
                <em>the connections.</em>
              </h2>
              <p>
                Your next learning partner could be just one
                conversation away. Make that first conversation.
              </p>
              <a href="/register" className="button button-light">
                Be part of SkillLoop <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="join-visual">
              <div className="join-circle join-circle-one" />
              <div className="join-circle join-circle-two" />
              <div className="join-icon">
                <GraduationCap size={65} strokeWidth={1.2} />
              </div>
              <span className="join-word">LEARN</span>
              <span className="join-word join-word-accent">TOGETHER.</span>
              <CheckCircle2 className="join-check" size={25} />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <Brand footer />
            <p className="footer-tagline">
              Learn together. Grow together.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>EXPLORE</span>
              <a href="#about">Our idea</a>
              <a href="#how-it-works">How it works</a>
              <a href="#features">Features</a>
            </div>
            <div>
              <span>GET STARTED</span>
              <a href="/register">Join SkillLoop</a>
              <a href="#home">Back to top ↑</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SkillLoop. All rights reserved.</span>
          <span>MADE FOR STUDENTS, BY STUDENTS.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
