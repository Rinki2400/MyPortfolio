import { useState } from "react";
import { loginAdmin } from "../api/auth";
import "../style/components/AdminForm.css";

export default function AdminForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginAdmin({ email, password });

      alert(res.data.message);
      console.log("Token:", res.data.token);

      // ⬇ Save token for protected pages
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", "admin");
      // redirect to admin dashboard
      window.location.href = "/dashboard"; // change route as per your page
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-form">
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
