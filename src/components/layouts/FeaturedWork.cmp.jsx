import PROJECT_DATA from "../../utilities/projects-data.utils";
import Button from "../UI/Button.cmp";
import ProjectCard from "../UI/ProjectCard.cmp";
import "./FeaturedWork.cmp.scss";

const FeaturedWork = () => {
  return (
    <section className="featured-section">
        <h2 className="section-title" >Featured</h2>
      <div className="thumbnails-container">

        {PROJECT_DATA.map((project) => <ProjectCard key={project.id} project={project}/>)}
      </div>
      {/* <div className="btn-container" ><Button buttonType={"inverted"}>More Projects</Button></div> */}
    </section>
  );
};

export default FeaturedWork;
