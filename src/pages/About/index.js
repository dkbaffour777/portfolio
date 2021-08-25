import { Link } from 'react-router-dom';

import profile_pic from '../../assets/images/profile-picture.jpg'

const About = () => {
    return (
        <section id="about-me" className="main-sec">
            <div className="logo-wrapper">
                <img className="prof-pic" src={profile_pic} alt="Daniel Baffour" />
            </div>
            <p>
                Full Stack Web Developer with a certificate in full stack web development from the
                University of Arizona. Skills in HTML, CSS and JavaScript and strengths in problem solving, teamwork,
                meeting deadlines and creativity. Productively rebranded an agency, which resulted an increase in number
                of leads. <br />
                Known as an innovative problem solver passionate about approaching programming challenges at different
                levels and collaborating with others to create meaningful web applications. Positioned to leverage my
                skills as part of a fast-paced, quality-driven
                team to build better experiences on software applications. <br />
                Passionate about music, piano playing to be specific, which has had a major impact of my life by improving my self-confidence and discipline.
                I’m excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Reach out
                to me to chat about our next project<Link to="/portfolio/Contact"> <span>here.</span></Link>
            </p>
        </section>
    );
}

export default About;