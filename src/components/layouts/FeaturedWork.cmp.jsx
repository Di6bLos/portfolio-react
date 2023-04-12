import PROJECT_DATA from "../../utilities/projects-data.utils";

import ProjectCard from "../UI/ProjectCard.cmp";
import "./FeaturedWork.cmp.scss";

export default function FeaturedWork() {
  return (
    <section className="featured-section">
        <h2 className="section-title" >Featured</h2>
      <div className="thumbnails-container">

        {PROJECT_DATA.map((project) => <ProjectCard key={project.id} project={project}/>)}
      </div>
    </section>
  );
};


