import Tech from "../../components/Tech";
import  resumeLink  from "../../assets/docs/resume.danielbaffour.pdf"

const Resume = () => {
    const frontEnd = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap', 'Responsive design', 'React'];
    const backEnd = ['Mysql, sequelize', 'API\'s', 'Express', 'Node.js', 'MongoDB', 'Mongoose']
    return (
        <section className="main-sec">
            <h2>Resume</h2>
            <div style={{margin: '40px auto'}}>
                Download my <a href={resumeLink} target="_blank" rel="noopener noreferrer" download>resume</a>
            </div>
            <h3>Front-end Proficiencies</h3>
            <div style={{display: 'flex', flexWrap: 'wrap', margin: '40px auto'}}>
                <Tech technologies={frontEnd} themeColor={'black'} />
            </div>
            <h3>Back-end Proficiencies</h3>
            <div style={{display: 'flex', flexWrap: 'wrap', margin: '40px auto'}}>
                <Tech technologies={backEnd} themeColor={'black'} />
            </div>
        </section>
    );
}

export default Resume;