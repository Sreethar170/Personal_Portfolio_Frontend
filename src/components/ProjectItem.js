// src/components/ProjectItem.js
import React from "react";
import "../pages/Projects.css";

const ProjectItem = ({ project }) => (
  <div className="project-card">
    <img src={project.img} alt={project.title} className="project-image" />
    <h3 className="project-title">{project.title}</h3>
  </div>
);

export default ProjectItem;
