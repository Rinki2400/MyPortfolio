export default function Navbar({ toggleSidebar }) {
  return (
    <header
      style={{
        gridArea: "header",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0.75rem 1.5rem",
        background: "#f9fafb",                    // light background
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 20,
      }}
    >
     

      {/* Right: user pill */}
      <div
        style={{
          display: "flex",
          alignItems: "align",
          gap: "0.5rem",
          padding: "0.25rem 0.75rem",
          borderRadius: "999px",
          background: "#f3f4f6",                  // light grey pill
          border: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "999px",
            background:
              "linear-gradient(135deg,#22d3ee 0%,#a855f7 50%,#f97316 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#020617",
          }}
        >
          A
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 500, color: "#111827" }}>
            Admin
          </span>
          <span style={{ fontSize: "0.7rem", color: "#6b7280" }}>
            Portfolio Owner
          </span>
        </div>
      </div>
    </header>
  );
}
