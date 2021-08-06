import Project from "../../components/Project";
import projectListData from "../../Data";

const ProjectList = () => {
    return (
        <section id="work" className="main-sec">
            <h2>Projects</h2>
            <div className="work-cont">
              {
                projectListData.map((project, i) =>
                    <Project
                        key={i}
                        project={project}
                    />
                )
              }
            </div>
        </section>
    );
}

export default ProjectList
