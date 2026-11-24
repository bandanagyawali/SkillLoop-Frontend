
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  Mail,
  Sparkles,
} from "lucide-react";
import "../styles/auth.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!formData.email.trim() || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    setError(
      "Your login form is ready. Backend authentication will be connected next."
    );
  }

  return (
    <main className="auth-page">
      <div className="auth-topbar">
        <Link to="/" className="auth-brand">
          <span className="brand-mark">
            <GraduationCap size={22} />
          </span>
          <span>skill<span>loop</span></span>
        </Link>

        <Link to="/" className="back-home">
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>

      <div className="auth-layout">
        <section className="auth-visual login-visual">
          <div className="visual-decoration decoration-one" />
          <div className="visual-decoration decoration-two" />

          <div className="visual-content">
            <span className="eyebrow">
              <Sparkles size={15} />
              YOUR LEARNING COMMUNITY
            </span>

            <h1>
              Great things
              <br />
              happen when
              <br />
              <em>students connect.</em>
            </h1>

            <p>
              Find your people, exchange knowledge, and make
              learning a shared experience.
            </p>

            <div className="visual-note">
              <div className="avatar-stack">
                <span>AS</span>
                <span>RK</span>
                <span>SM</span>
                <span>+</span>
              </div>
              <div>
                <strong>Learn together.</strong>
                <small>Grow beyond the classroom.</small>
              </div>
            </div>
          </div>

          <div className="visual-bottom">
            <span>LEARN · SHARE · GROW</span>
            <span>01 / SKILLLOOP</span>
          </div>
        </section>

        <section className="auth-form-section">
          <div className="auth-form-wrapper">
            <div className="auth-mobile-brand">
              <span className="brand-mark">
                <GraduationCap size={21} />
              </span>
              <strong>skill<span>loop</span></strong>
            </div>

            <span className="form-kicker">WELCOME BACK</span>
            <h2>Good to see you again.</h2>
            <p className="form-description">
              Sign in to continue learning and sharing.
            </p>

            <form onSubmit={handleSubmit} className="auth-form">
              <label htmlFor="login-email">University email</label>
              <div className="input-wrap">
                <Mail size={18} />
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  placeholder="you@university.edu"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>

              <div className="label-row">
                <label htmlFor="login-password">Password</label>
                <a href="mailto:support@skillloop.example?subject=Password%20reset">
                  Forgot password?
                </a>
              </div>

              <div className="input-wrap">
                <LockKeyhole size={18} />
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <label className="remember-option">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span>Remember me</span>
              </label>

              {error && <p className="form-message">{error}</p>}

              <button type="submit" className="auth-submit">
                Sign in
                <ArrowRight size={18} />
              </button>
            </form>

            <p className="auth-switch">
              New to SkillLoop?
              <Link to="/register"> Create an account</Link>
            </p>

            <div className="auth-footer">
              By continuing, you agree to SkillLoop's
              <span> Terms of Service </span> and
              <span> Privacy Policy.</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
