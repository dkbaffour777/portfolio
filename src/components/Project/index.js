import React from "react";
import { FaGithub, FaWrench, FaLink } from 'react-icons/fa';

const Project = ({ project }) => {
    const { proj_id, deployedLink, name, technologies, imgSource } = project;
    return (
        <article id={proj_id} key={proj_id} className="web-app">

            <div className="app-info dark-layer">
                <h3>{name}</h3>
                {false &&

                    <p>
                        {
                            technologies.map(tech => (
                                <span style={{ border: '1px solid white', padding: '10px', margin: '5px', borderRadius: '3px' }}>
                                    {tech}
                                </span>
                            ))
                        }
                    </p>
                }
                <div style={{ width: '30%', display: 'flex', justifyContent: 'space-evenly' }}>
                    <FaGithub />
                    <a href={deployedLink} target="_blank" rel="noreferrer" style={{color: '#fff'}}><FaLink /></a>
                    <FaWrench />
                </div>
            </div>
            <img src={imgSource} alt={name} />
        </article>

    );
}

export default Project;