
import {
  Search,
  Bell,
  LayoutDashboard,
  Users,
  HandHelping,
  MessageCircle,
  BookOpen,
  UserRound,
  Settings,
  Plus,
  ArrowRight,
  Clock,
  CalendarDays,
  GraduationCap,
  ChevronRight,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Find Partners", icon: Users, path: "/find-partners" },
  { label: "Help Requests", icon: HandHelping, path: "/help-requests" },
  { label: "Messages", icon: MessageCircle, path: "/messages" },
  { label: "Study Groups", icon: BookOpen, path: "/study-groups" },
];

const partners = [
  {
    name: "Aarav Sharma",
    initials: "AS",
    subject: "Database Management",
    detail: "Can help with SQL and ER diagrams",
    semester: "4th Semester",
    color: "partner-green",
  },
  {
    name: "Sanjana Rai",
    initials: "SR",
    subject: "Web Development",
    detail: "Interested in React and JavaScript",
    semester: "3rd Semester",
    color: "partner-peach",
  },
  {
    name: "Nischal Karki",
    initials: "NK",
    subject: "Data Structures",
    detail: "Can teach algorithms and C++",
    semester: "4th Semester",
    color: "partner-lavender",
  },
];

const activities = [
  {
    icon: HandHelping,
    title: "New help request posted",
    description: "Someone needs help with SQL joins.",
    time: "20 minutes ago",
  },
  {
    icon: Users,
    title: "New learning partner suggestion",
    description: "A student with similar interests was found.",
    time: "2 hours ago",
  },
  {
    icon: MessageCircle,
    title: "New message received",
    description: "You have a new conversation waiting.",
    time: "Yesterday",
  },
];

function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">

      {sidebarOpen && (
        <div
          className="dashboard-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`dashboard-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>

        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">
            <GraduationCap size={25} />
          </div>
          <span>SkillLoop</span>
          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={21} />
          </button>
        </div>

        <div className="sidebar-section">
          <p className="sidebar-heading">WORKSPACE</p>

          <nav className="sidebar-navigation">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`sidebar-link ${
                    item.label === "Dashboard" ? "active" : ""
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon size={19} />
                  <span>{item.label}</span>

                  {item.label === "Messages" && (
                    <span className="message-count">2</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-help-card">
            <div className="help-card-icon">
              <Sparkles size={20} />
            </div>
            <h4>Learning is better together!</h4>
            <p>Share what you know and learn something new.</p>
            <Link to="/find-partners">
              Find a partner <ArrowRight size={15} />
            </Link>
          </div>

          <Link to="/profile" className="sidebar-link">
            <UserRound size={19} />
            <span>My Profile</span>
          </Link>

          <Link to="/settings" className="sidebar-link">
            <Settings size={19} />
            <span>Settings</span>
          </Link>

          <div className="sidebar-user">
            <div className="user-avatar">BG</div>
            <div className="sidebar-user-info">
              <strong>Student Name</strong>
              <span>Computer Engineering</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="dashboard-main">

        <header className="dashboard-topbar">
          <button
            className="mobile-menu-button"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={23} />
          </button>

          <div className="dashboard-search">
            <Search size={19} />
            <input
              type="text"
              placeholder="Search people, subjects, or topics..."
            />
            <span className="search-shortcut">⌘ K</span>
          </div>

          <div className="topbar-actions">
            <button className="notification-button" aria-label="Notifications">
              <Bell size={20} />
              <span />
            </button>

            <div className="topbar-profile">
              <div className="user-avatar">BG</div>
              <div>
                <strong>Student Name</strong>
                <span>Student</span>
              </div>
            </div>
          </div>
        </header>

        <div className="dashboard-content">

          <section className="dashboard-welcome">
            <div>
              <p className="welcome-date">SUNDAY, NOVEMBER 22, 2026</p>
              <h1>Good morning, Student! <span>✦</span></h1>
              <p>
                Ready to learn something new or share what you know today?
              </p>
            </div>

            <Link to="/help-requests/create" className="create-request-button">
              <Plus size={19} />
              Create a Help Request
            </Link>
          </section>

          <section className="dashboard-stats">

            <div className="stat-card">
              <div className="stat-top">
                <span>My Help Requests</span>
                <div className="stat-icon sage-icon">
                  <HandHelping size={21} />
                </div>
              </div>
              <h2>03</h2>
              <p>Requests you've created</p>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Learning Partners</span>
                <div className="stat-icon olive-icon">
                  <Users size={21} />
                </div>
              </div>
              <h2>08</h2>
              <p>Students connected with you</p>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Unread Messages</span>
                <div className="stat-icon peach-icon">
                  <MessageCircle size={21} />
                </div>
              </div>
              <h2>02</h2>
              <p>Conversations waiting</p>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span>Study Groups</span>
                <div className="stat-icon purple-icon">
                  <BookOpen size={21} />
                </div>
              </div>
              <h2>04</h2>
              <p>Groups you're participating in</p>
            </div>

          </section>

          <section className="dashboard-section">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">YOUR LEARNING NETWORK</p>
                <h2>Suggested partners</h2>
                <p>Students who might be a great match for you.</p>
              </div>

              <Link to="/find-partners" className="section-link">
                Explore all <ArrowRight size={17} />
              </Link>
            </div>

            <div className="partner-grid">
              {partners.map((partner) => (
                <article className="partner-card" key={partner.name}>
                  <div className="partner-card-top">
                    <div className={`partner-avatar ${partner.color}`}>
                      {partner.initials}
                    </div>
                    <span className="match-label">Suggested</span>
                  </div>

                  <h3>{partner.name}</h3>
                  <p className="partner-semester">{partner.semester}</p>

                  <div className="partner-subject">
                    <GraduationCap size={16} />
                    <strong>{partner.subject}</strong>
                  </div>

                  <p className="partner-description">{partner.detail}</p>

                  <Link to="/find-partners" className="partner-connect">
                    View profile <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="dashboard-lower-grid">

            <div className="dashboard-panel activity-panel">
              <div className="panel-heading">
                <div>
                  <h2>Recent activity</h2>
                  <p>Stay updated with what's happening.</p>
                </div>
                <button aria-label="More activity">
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="activity-list">
                {activities.map((activity, index) => {
                  const Icon = activity.icon;

                  return (
                    <div className="activity-item" key={index}>
                      <div className="activity-icon">
                        <Icon size={19} />
                      </div>

                      <div className="activity-details">
                        <strong>{activity.title}</strong>
                        <p>{activity.description}</p>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="dashboard-panel groups-panel">
              <div className="panel-heading">
                <div>
                  <h2>Your study space</h2>
                  <p>Learn and grow together.</p>
                </div>
                <BookOpen size={21} />
              </div>

              <div className="study-group-card">
                <div className="group-decoration">
                  <BookOpen size={25} />
                </div>
                <div className="group-info">
                  <span>STUDY GROUP</span>
                  <h3>Database Study Circle</h3>
                  <p>12 members · Database Management</p>
                </div>
                <Link to="/study-groups">
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="upcoming-session">
                <div className="session-icon">
                  <CalendarDays size={19} />
                </div>
                <div>
                  <strong>Next study session</strong>
                  <p><Clock size={14} /> Schedule to be announced</p>
                </div>
              </div>

              <Link to="/study-groups" className="all-groups-link">
                Explore study groups <ArrowRight size={16} />
              </Link>
            </div>

          </section>

          <footer className="dashboard-footer">
            <span>© 2026 SkillLoop</span>
            <span>Learn together. Grow together.</span>
          </footer>

        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
