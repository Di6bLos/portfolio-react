import Button from "./Button.cmp";

import "./ProjectCard.cmp.scss"

const ProjectCard = ({project}) => {
    const {title, category, imageUrl, projectUrl} = project;

    const navigateToSite = (url) => {
        window.open(url, '_blank');
        console.log(url)
    }
    return (
        <div className="project-card">
        <img className="project-card-image" src={imageUrl} alt={title} />
        <div className="project-card-text">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-category">{category}</p>
          <Button onClick={()=> navigateToSite(projectUrl)} buttonType={"primary"}>View More</Button>
        </div>
      </div>
    )
}

export default ProjectCard;