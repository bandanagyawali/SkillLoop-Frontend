
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  Mail,
  UserRound,
  Sparkles,
  BookOpen,
  School,
  X,
} from "lucide-react";
import "../styles/auth.css";

const universityData = {
  "School of Engineering": [
    "Architecture",
    "Artificial Intelligence",
    "Chemical Science and Engineering",
    "Civil Engineering",
    "Computer Science and Engineering",
    "Electrical and Electronics Engineering",
    "Environmental Engineering",
    "Geomatics Engineering",
    "Health Informatics",
    "Mechanical Engineering",
  ],
  "School of Management": [
    "Finance, Economics and Accounting",
    "Human Resource and General Management",
    "Management Informatics and Communication",
    "Management Science and Information",
    "Marketing and Entrepreneurship",
    "Public Policy and Management",
  ],
  "School of Science": [
    "Agriculture",
    "Biotechnology",
    "Environmental Science",
    "Mathematics",
    "Pharmacy",
    "Physics",
  ],
  "School of Arts": [
    "Arts and Design",
    "Development Studies",
    "Economics",
    "Languages and Mass Communication",
    "Music",
  ],
};

const semesterOptions = [
  "First Semester",
  "Second Semester",
  "Third Semester",
  "Fourth Semester",
  "Fifth Semester",
  "Sixth Semester",
  "Seventh Semester",
  "Eighth Semester",
];

const skillSuggestions = [
  "JavaScript",
  "Python",
  "C Programming",
  "Java",
  "Web Development",
  "UI/UX Design",
  "Mathematics",
  "Database Management",
  "Graphic Design",
  "Public Speaking",
  "English",
  "Data Structures",
];

function RegisterPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [teachingInput, setTeachingInput] = useState("");
  const [learningInput, setLearningInput] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    university: "Bright Future University",
    school: "",
    department: "",
    semester: "",
    teachingSkills: [],
    learningInterests: [],
  });

  function updateField(name, value) {
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSchoolChange(event) {
    setFormData((previous) => ({
      ...previous,
      school: event.target.value,
      department: "",
    }));
  }

  function addTag(type, value, clearInput) {
    const cleanValue = value.trim();

    if (!cleanValue) return;

    const field = type === "teach" ? "teachingSkills" : "learningInterests";

    if (
      formData[field].some(
        (item) => item.toLowerCase() === cleanValue.toLowerCase()
      )
    ) {
      clearInput("");
      return;
    }

    updateField(field, [...formData[field], cleanValue]);
    clearInput("");
  }

  function removeTag(type, value) {
    const field = type === "teach" ? "teachingSkills" : "learningInterests";

    updateField(
      field,
      formData[field].filter((item) => item !== value)
    );
  }

  function toggleSuggestion(skill) {
    const alreadyTeaching = formData.teachingSkills.includes(skill);

    updateField(
      "teachingSkills",
      alreadyTeaching
        ? formData.teachingSkills.filter((item) => item !== skill)
        : [...formData.teachingSkills, skill]
    );
  }

  function validateStep() {
    setError("");

    if (step === 1) {
      if (
        !formData.fullName.trim() ||
        !formData.email.trim() ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setError("Please complete all account details.");
        return false;
      }

      if (formData.password.length < 8) {
        setError("Your password must contain at least 8 characters.");
        return false;
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Your passwords do not match.");
        return false;
      }
    }

    if (step === 2) {
      if (!formData.school || !formData.department || !formData.semester) {
        setError("Please complete your university details.");
        return false;
      }
    }

    return true;
  }

  function goNext() {
    if (!validateStep()) return;
    setStep((previous) => Math.min(previous + 1, 3));
  }

  function goBack() {
    setError("");
    setStep((previous) => Math.max(previous - 1, 1));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateStep()) return;

    const registrationData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      password: formData.password,
      university: formData.university,
      school: formData.school,
      department: formData.department,
      semester: formData.semester,
      teachingSkills: formData.teachingSkills,
      learningInterests: formData.learningInterests,
    };

    console.log("SkillLoop registration data:", registrationData);
    setError(
      "Your registration details are ready. Account creation will be connected to the backend next."
    );
  }

  return (
    <main className="auth-page register-page">
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

      <div className="register-layout">
        <section className="register-intro">
          <span className="eyebrow">
            <Sparkles size={15} />
            A COMMUNITY THAT GROWS TOGETHER
          </span>

          <h1>
            Your skills have
            <br />
            a place <em>here.</em>
          </h1>

          <p>
            Teach what you know. Learn what you love.
            Meet students who make your learning journey better.
          </p>

          <div className="intro-points">
            <div>
              <span className="intro-icon"><BookOpen size={19} /></span>
              <div>
                <strong>Share your knowledge</strong>
                <small>Help someone understand what you know.</small>
              </div>
            </div>

            <div>
              <span className="intro-icon"><School size={19} /></span>
              <div>
                <strong>Find your learning circle</strong>
                <small>Connect with students on a similar journey.</small>
              </div>
            </div>

            <div>
              <span className="intro-icon"><Sparkles size={19} /></span>
              <div>
                <strong>Grow together</strong>
                <small>Make learning more collaborative.</small>
              </div>
            </div>
          </div>

          <div className="intro-bottom">
            <span>YOUR NEXT CHAPTER STARTS HERE.</span>
            <span>SKILLLOOP</span>
          </div>
        </section>

        <section className="register-form-section">
          <div className="register-card">
            <div className="auth-mobile-brand">
              <span className="brand-mark">
                <GraduationCap size={21} />
              </span>
              <strong>skill<span>loop</span></strong>
            </div>

            <div className="register-heading">
              <span className="form-kicker">CREATE YOUR ACCOUNT</span>
              <h2>Let's get you started.</h2>
              <p>Set up your student profile in three simple steps.</p>
            </div>

            <div className="step-progress">
              {[1, 2, 3].map((number) => (
                <div className="progress-item" key={number}>
                  <div
                    className={`progress-circle ${
                      step >= number ? "active" : ""
                    }`}
                  >
                    {step > number ? <Check size={16} /> : number}
                  </div>
                  <span className={step >= number ? "active-label" : ""}>
                    {number === 1
                      ? "Account"
                      : number === 2
                        ? "University"
                        : "Interests"}
                  </span>
                </div>
              ))}
              <div className="progress-line">
                <span style={{ width: `${((step - 1) / 2) * 100}%` }} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="register-form">
              {step === 1 && (
                <div className="step-content">
                  <h3>First, the basics.</h3>
                  <p className="step-description">
                    Tell us a little about yourself.
                  </p>

                  <label htmlFor="fullName">Full name</label>
                  <div className="input-wrap">
                    <UserRound size={18} />
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(event) =>
                        updateField("fullName", event.target.value)
                      }
                      autoComplete="name"
                    />
                  </div>

                  <label htmlFor="register-email">University email</label>
                  <div className="input-wrap">
                    <Mail size={18} />
                    <input
                      id="register-email"
                      type="email"
                      placeholder="you@university.edu"
                      value={formData.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      autoComplete="email"
                    />
                  </div>

                  <label htmlFor="register-password">Create password</label>
                  <div className="input-wrap">
                    <LockKeyhole size={18} />
                    <input
                      id="register-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 8 characters"
                      value={formData.password}
                      onChange={(event) =>
                        updateField("password", event.target.value)
                      }
                      autoComplete="new-password"
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

                  <label htmlFor="confirm-password">Confirm password</label>
                  <div className="input-wrap">
                    <LockKeyhole size={18} />
                    <input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Enter your password again"
                      value={formData.confirmPassword}
                      onChange={(event) =>
                        updateField("confirmPassword", event.target.value)
                      }
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="step-content">
                  <h3>Where do you study?</h3>
                  <p className="step-description">
                    Help us connect you with students from your academic circle.
                  </p>

                  <label htmlFor="university">University</label>
                  <div className="input-wrap select-wrap">
                    <School size={18} />
                    <select
                      id="university"
                      value={formData.university}
                      onChange={(event) =>
                        updateField("university", event.target.value)
                      }
                    >
                      <option value="Bright Future University">
                        Bright Future University
                      </option>
                    </select>
                  </div>

                  <label htmlFor="school">School / Faculty</label>
                  <div className="input-wrap select-wrap">
                    <BookOpen size={18} />
                    <select
                      id="school"
                      value={formData.school}
                      onChange={handleSchoolChange}
                    >
                      <option value="">Select your school</option>
                      {Object.keys(universityData).map((school) => (
                        <option value={school} key={school}>
                          {school}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label htmlFor="department">Department / Program</label>
                  <div className="input-wrap select-wrap">
                    <GraduationCap size={18} />
                    <select
                      id="department"
                      value={formData.department}
                      onChange={(event) =>
                        updateField("department", event.target.value)
                      }
                      disabled={!formData.school}
                    >
                      <option value="">Select your department</option>
                      {(universityData[formData.school] || []).map(
                        (department) => (
                          <option value={department} key={department}>
                            {department}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <label htmlFor="semester">Current semester</label>
                  <div className="input-wrap select-wrap">
                    <BookOpen size={18} />
                    <select
                      id="semester"
                      value={formData.semester}
                      onChange={(event) =>
                        updateField("semester", event.target.value)
                      }
                    >
                      <option value="">Select your semester</option>
                      {semesterOptions.map((semester) => (
                        <option value={semester} key={semester}>
                          {semester}
                        </option>
                      ))}
                    </select>
                  </div>

                  <p className="field-hint">
                    You can update your academic information later.
                  </p>
                </div>
              )}

              {step === 3 && (
                <div className="step-content">
                  <h3>What brings you here?</h3>
                  <p className="step-description">
                    Tell the community what you can teach and what you want to learn.
                  </p>

                  <div className="skill-section">
                    <label htmlFor="teaching-skills">
                      <span>Skills I can teach</span>
                      <small>Optional</small>
                    </label>

                    <div className="tag-input-wrap">
                      <input
                        id="teaching-skills"
                        value={teachingInput}
                        placeholder="e.g. Python, Mathematics"
                        onChange={(event) =>
                          setTeachingInput(event.target.value)
                        }
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            event.preventDefault();
                            addTag("teach", teachingInput, setTeachingInput);
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          addTag("teach", teachingInput, setTeachingInput)
                        }
                      >
                        Add
                      </button>
                    </div>

                    <div className="selected-tags">
                      {formData.teachingSkills.map((skill) => (
                        <span className="skill-tag" key={skill}>
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeTag("teach", skill)}
                            aria-label={`Remove ${skill}`}
                          >
                            <X size={13} />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="skill-section">
                    <label htmlFor="learning-interests">
                      <span>Topics I want to learn</span>
                      <small>Optional</small>
                    </label>

                    <div className="tag-input-wrap">
                      <input
                        id="learning-interests"
                        value={learningInput}
                        placeholder="e.g. UI/UX, Data Structures"
                        onChange={(event) =>
                          setLearningInput(event.target.value)
                        }
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            event.preventDefault();
                            addTag("learn", learningInput, setLearningInput);
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          addTag("learn", learningInput, setLearningInput)
                        }
                      >
                        Add
                      </button>
                    </div>

                    <div className="selected-tags">
                      {formData.learningInterests.map((skill) => (
                        <span className="skill-tag learning-tag" key={skill}>
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeTag("learn", skill)}
                            aria-label={`Remove ${skill}`}
                          >
                            <X size={13} />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="suggestions">
                    <span>Some ideas to get started</span>
                    <div className="suggestion-list">
                      {skillSuggestions.map((skill) => (
                        <button
                          type="button"
                          key={skill}
                          className={
                            formData.teachingSkills.includes(skill)
                              ? "suggestion selected"
                              : "suggestion"
                          }
                          onClick={() => toggleSuggestion(skill)}
                        >
                          {formData.teachingSkills.includes(skill) ? (
                            <Check size={13} />
                          ) : (
                            "+"
                          )}
                          {skill}
                        </button>
                      ))}
                    </div>
                    <small>
                      Suggestions add to your teaching skills. You can also type
                      your own interests above.
                    </small>
                  </div>
                </div>
              )}

              {error && <p className="form-message">{error}</p>}

              <div className="step-actions">
                {step > 1 && (
                  <button
                    type="button"
                    className="auth-back-button"
                    onClick={goBack}
                  >
                    <ArrowLeft size={17} />
                    Back
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    className="auth-submit"
                    onClick={goNext}
                  >
                    Continue
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button type="submit" className="auth-submit">
                    Create account
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </form>

            <p className="auth-switch">
              Already have an account?
              <Link to="/login"> Sign in</Link>
            </p>

            <div className="auth-footer">
              By creating an account, you agree to SkillLoop's
              <span> Terms of Service </span> and
              <span> Privacy Policy.</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default RegisterPage;
