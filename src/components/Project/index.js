import React, { useState } from "react";
import Tech from "../Tech";
import { FaGithub, FaWrench, FaLink, FaArrowLeft } from 'react-icons/fa';

const Project = ({ project }) => {
    const { proj_id, deployedLink, gitHubLink, name, technologies, imgSource } = project;
    const [isTools, setIsTools] = useState(false);

    return (
        <article id={proj_id} key={proj_id} className="app-info">
            <img src={imgSource} alt={name} />
            <div className="dark-layer">
                {isTools ?
                    <>
                        <div style={{ width: '100%', paddingLeft: '2%', paddingTop: '2%', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <FaArrowLeft onClick={() => setIsTools(false)} /> <div style={{ marginLeft: '10px' }}>Tools/Technologies</div>
                        </div>
                        <p style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: "10%"}}>
                            <Tech technologies={technologies} themeColor={'white'} />
                        </p>
                    </>
                    :
                    <>
                        <h3 style={{textAlign: "center", marginTop: "10%", fontWeight: "200"}}>{name}</h3>
                        <div style={{ width: '45%', display: 'flex', justifyContent: 'space-evenly', margin: "10% auto"}}>
                            <a href={gitHubLink} target="_blank" rel="noreferrer" style={{ color: '#000' }}><FaGithub /></a>
                            <a href={deployedLink} target="_blank" rel="noreferrer" style={{ color: '#000' }}><FaLink /></a>
                            <FaWrench onClick={() => setIsTools(true)} style={{ cursor: 'pointer' }} />
                        </div>
                    </>
                }
            </div>
        </article>

    );
}

export default Project;