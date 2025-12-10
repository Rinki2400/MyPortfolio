import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainComponent from "./components/MainComponent";
import AdminForm from "./components/AdminForm";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/dashboad" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
