// src/pages/Projects.js
import React from "react";
import ProjectItem from "../components/ProjectItem";
import projects from "./projectsData";
import "./Projects.css";

const Projects = () => {
  // Get unique categories in order of first occurrence
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <div className="projects-container" id="Project">
      <h1 className="projects-title">Projects</h1>

      {categories.map((cat) => (
        <div key={cat} className="category-section">
          <h2 className="category-title">{cat}</h2>
          <div className="projects-grid">
            {projects
              .filter((p) => p.category === cat)
              .map((proj) => (
                <ProjectItem key={proj.id} project={proj} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
