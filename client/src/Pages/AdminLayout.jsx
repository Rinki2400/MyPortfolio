import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isSidebarOpen ? "220px 1fr" : "64px 1fr",
        gridTemplateRows: "56px 1fr",
        gridTemplateAreas: `
          "sidebar header"
          "sidebar main"
        `,
        height: "100vh",
        background: "#020617",
        color: "#e5e7eb",
      }}
    >
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <main style={{ gridArea: "main", padding: "1.5rem", overflow: "auto" }}>
        <Outlet />
      </main>
    </div>
  );
}
