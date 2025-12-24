import ProjectForm from "../Pages/ProjectForm";

function Projects() {
  const handleProjectSubmit = (data) => {
    console.log("New project:", data);
    // yahin se API call / DB save kar sakti ho
  };

  return (
   <>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
        Projects
      </h2>
      <ProjectForm onSubmit={handleProjectSubmit} />
    </>
  );
}

export default Projects;
