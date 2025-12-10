import React, { useState } from "react";
import "../style/components/ProjectSection.css";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Expense Tracker – Full Stack Web Application",
    description:
      "A full-stack expense tracking system with JWT authentication, charts (Line, Pie), CRUD operations, Excel export, avatar upload, emoji categories, and date filtering.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Recharts", "JWT"],
    image: "./Expense.png",
    demo: "https://expense-tracker-three-flax.vercel.app/",
    github: "https://github.com/Rinki2400/Expense_Tracker",
  },

  {
    id: 2,
    title: "SnapGram – MERN Stack Social Media App",
    description:
      "Real-time chat, notifications, avatar upload, likes, comments, pagination, and live search using MERN + Socket.IO.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    image: "./MasterAi.png",
    demo: "https://snapgram-demo.vercel.app",
    github: "https://github.com/Rinki2400/SnapGram",
  },

  {
    id: 3,
    title: "Support Desk – Full Stack Web Application",
    description:
      "Support ticketing system with JWT login, role access, admin panel, ticket management.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: "./MasterAi.png",
    demo: "https://supportdesk-demo.netlify.app",
    github: "https://github.com/Rinki2400/SuportDesk",
  },

  {
    id: 4,
    title: "AI Chat App",
    description:
      "A modern AI Chat app using OpenAI API with typing animation and message history.",
    stack: ["React", "Node.js", "OpenAI"],
    image: "./MasterAi.png",
    demo: "https://ai-chat-demo.netlify.app",
    github: "https://github.com/Rinki2400",
  },
];

const ProjectSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="project-section">
      {/* 🔥 Screen Reference Style Heading + Description */}
      <div className="project-header">
        <h2>Projects you'll love to explore.</h2>
        <p>
          Each project is built with clean code, powerful backend, and modern
          UI. Explore my featured work showcasing full-stack development skills
          and problem-solving.
        </p>

        <button className="see-all-top" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "See All Projects"}
        </button>
      </div>

      {/* Project Cards */}
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.demo !== "#" && (
                  <a
                    href="https://your-project-live-link.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href="https://github.com/username/project"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
