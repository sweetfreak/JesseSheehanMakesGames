import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, role, completionDate, description, image, link, backgroundImage }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.9)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="project-card-padding"> 
    <div className="project-card " style={cardStyle}>
      <div className="project-image-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="project-image" />
        </a>
      </div>
      <div className="project-content glass">
        <h2 className="project-title">{title}</h2>
        <div className="project-meta">
          <p className="project-role">Role: {role}</p>
          <p className="project-date">Completed: {completionDate}</p>
        </div>
        <p className="project-description">{description}</p>
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;