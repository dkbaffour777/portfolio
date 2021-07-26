import React from "react";

const Project = ({ project }) => {
    const { proj_id, deployedLink, name, technologies, imgSource } = project;
    return (
        <article id={proj_id} key={proj_id} className="web-app">
            <a href={deployedLink} target="_blank">
                <div className="app-info dark-layer">
                    <h3>{name}</h3>
                    <p>
                        {technologies.join('/')}
                    </p>
                </div>
            </a>
            <img src={imgSource} alt={name} />
        </article>

    );
}

export default Project;