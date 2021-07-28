import React, { useState } from "react";
import Tech from "../Tech";
import { FaGithub, FaWrench, FaLink, FaArrowLeft } from 'react-icons/fa';

const Project = ({ project }) => {
    const { proj_id, deployedLink, gitHubLink, name, technologies, imgSource } = project;
    const [isTools, setIsTools] = useState(false);

    return (
        <article id={proj_id} key={proj_id} className="web-app">

            <div className="app-info dark-layer">
                {isTools ?
                    <>
                        <div style={{width: '100%', paddingLeft: '2%', paddingTop: '2%', cursor: 'pointer', display: 'flex', alignItems: 'center'}}>
                            <FaArrowLeft onClick={() => setIsTools(false)}/> <div style={{marginLeft: '10px'}}>Tools/Technologies</div>
                        </div>
                        <p>
                            <Tech technologies={technologies} themeColor={'White'}/>
                        </p>
                    </>
                    :
                    <>
                        <h3>{name}</h3>
                        <div style={{ width: '30%', display: 'flex', justifyContent: 'space-evenly' }}>
                            <a href={gitHubLink} target="_blank" rel="noreferrer" style={{ color: '#fff' }}><FaGithub /></a>
                            <a href={deployedLink} target="_blank" rel="noreferrer" style={{ color: '#fff' }}><FaLink /></a>
                            <FaWrench onClick={()=> setIsTools(true)} style={{cursor: 'pointer'}} />
                        </div>
                    </>
                }
            </div>
            <img src={imgSource} alt={name} />
        </article>

    );
}

export default Project;