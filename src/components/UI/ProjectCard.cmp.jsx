import Button from "./Button.cmp";

import "./ProjectCard.cmp.scss";

const ProjectCard = ({ project }) => {
  const { title, category, imageUrl, projectUrl } = project;

  const navigateToSite = (url) => {
    const newWindow = window.open(url, "_blank");
    if (
      !newWindow ||
      newWindow.closed ||
      typeof newWindow.closed === "undefined"
    ) {
      // Popup was blocked, fallback to opening the URL in the current tab
      window.location.href = url;
    }
  };
  return (
    <div className="project-card">
      <img className="project-card-image" src={imageUrl} alt={title} />
      <div className="project-card-text">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-category">{category}</p>
        <Button
          onClick={() => navigateToSite(projectUrl)}
          buttonType={"primary"}
        >
          View Project
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
