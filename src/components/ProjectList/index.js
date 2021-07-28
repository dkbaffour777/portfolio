import Project from "../Project";

const ProjectList = ({ projectListData }) => {
    return (
        <section id="work" className="main-sec">
            <h2>Projects</h2>
            <div className="work-cont">
              {
                projectListData.map(project =>
                    <Project
                        project={project}
                    />
                )
              }
            </div>
        </section>
    );
}

export default ProjectList
