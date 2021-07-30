const Tech =({technologies, themeColor})=> (
    technologies.map(tech => (
        <span className="tech" key={tech} style={{border: `1px solid ${themeColor}`}}>
            {tech}
        </span>
    ))
);

export default Tech;