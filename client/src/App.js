import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainComponent from "./components/MainComponent";
import AdminForm from "./components/AdminForm";

import AdminLayout from "./Pages/AdminLayout";
import Projects from "./Pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public portfolio */}
        <Route path="/" element={<MainComponent />} />

        {/* Simple admin login / access form */}
        <Route path="/admin" element={<AdminForm />} />

        {/* Admin panel layout with nested routes */}
        <Route path="/dashboard" element={<AdminLayout />}>
          {/* Default dashboard page */}
          {/* <Route index element={<AdminHome />} /> */}

          {/* Same as /dashboard/home */}
          <Route path="projects" element={<Projects />} />

          {/* About content form → /dashboard/form */}
          {/* <Route path="form" element={<AboutForm />} /> */}

          {/* Future routes:
              <Route path="projects" element={<Projects />} />
              <Route path="messages" element={<Messages />} />
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
