const Tech =({technologies, themeColor})=> (
    technologies.map(tech => (
        <span key={tech} style={{ border: `1px solid ${themeColor}`, padding: '10px', margin: '5px', borderRadius: '3px', display: 'inline-flex' }}>
            {tech}
        </span>
    ))
);

export default Tech;