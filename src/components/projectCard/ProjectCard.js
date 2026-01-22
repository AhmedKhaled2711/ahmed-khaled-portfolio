import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({project}) {
  if (!project) {
    return null;
  }

  return (
    <div className="project-card">
      <div className="project-card-image">
        <img 
          src={project.image} 
          alt={project.projectName}
        />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.projectName}</h3>
        <p className="project-card-desc">{project.projectDesc}</p>
        <div className="project-card-footer">
          {project.footerLink && project.footerLink.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
