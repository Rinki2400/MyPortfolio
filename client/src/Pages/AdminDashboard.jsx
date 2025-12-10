import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (role === "admin" && token) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  if (!isAuthorized) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2 style={{ color: "red" }}>🚫 Unauthorized Access</h2>
        <p>You are not allowed to view this page.</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "green" }}>✔ Welcome Admin</h1>
      <p>You now have full access to admin dashboard.</p>
    </div>
  );
}
