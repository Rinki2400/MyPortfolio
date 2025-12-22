import { NavLink } from "react-router-dom";

const linkStyle = {
  padding: "0.6rem 0.9rem",
  borderRadius: "0.5rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.85rem",
  color: "#4b5563",           // grey text (dark mode se light)
  textDecoration: "none",
};

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      style={{
        gridArea: "sidebar",
        background: "#f3f4f6",                    // light grey bg
        borderRight: "1px solid #e5e7eb",
        padding: "0.75rem 0.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        color: "#111827",                        // default text black-ish
        transition: "background 0.2s ease, color 0.2s ease",
      }}
    >
      {/* Logo / collapse button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isOpen ? "space-between" : "center",
          marginBottom: "0.5rem",
        }}
      >
        {isOpen && (
          <span
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            M PORTFOLIO
          </span>
        )}
        <button
          onClick={toggleSidebar}
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "999px",
            border: "1px solid #d1d5db",
            background: "#ffffff",
            color: "#111827",
            cursor: "pointer",
            fontSize: "0.8rem",
          }}
        >
          {isOpen ? "<" : ">"}
        </button>
      </div>

      {/* Nav links */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <NavLink
          to="/dashboard"
          end
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "#e5e7eb" : "transparent", // light active
            color: isActive ? "#111827" : "#4b5563",
            border: isActive ? "1px solid #d1d5db" : "1px solid transparent",
          })}
        >
          <span>🏠</span>
          {isOpen && <span>Dashboard</span>}
        </NavLink>

        <NavLink
          to="/dashboard/projects"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "#e5e7eb" : "transparent",
            color: isActive ? "#111827" : "#4b5563",
            border: isActive ? "1px solid #d1d5db" : "1px solid transparent",
          })}
        >
          <span>📂</span>
          {isOpen && <span>Projects</span>}
        </NavLink>

        <NavLink
          to="/dashboard/blogs"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "#e5e7eb" : "transparent",
            color: isActive ? "#111827" : "#4b5563",
            border: isActive ? "1px solid #d1d5db" : "1px solid transparent",
          })}
        >
          <span>📝</span>
          {isOpen && <span>Blogs</span>}
        </NavLink>

        <NavLink
          to="/dashboard/messages"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "#e5e7eb" : "transparent",
            color: isActive ? "#111827" : "#4b5563",
            border: isActive ? "1px solid #d1d5db" : "1px solid transparent",
          })}
        >
          <span>✉️</span>
          {isOpen && <span>Messages</span>}
        </NavLink>
      </nav>
    </aside>
  );
}
