import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-content-wrapper">
        <section id="about-me">
          <h2>About</h2>
          <p>
            Full Stack Web Developer with experience earning a certificate in full stack web development from the
            University of Arizona. Skills in HTML, CSS and JavaScript and strengths in problem solving, teamwork,
            meeting deadlines and creativity. Productively rebranded an agency, which resulted an increase in number
            of leads. <br />
            Known as an innovative problem solver passionate about approaching programming challenges at different
            levels and collaborating with others to create meaningful web applications. Positioned to leverage my
            skills as part of a fast-paced, quality-driven
            team to build better experiences on software applications. <br />
            Passionate about music, piano playing to be specific, which has had a major impact of my life by improving my self-confidence and discipline.
            I’m excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Reach out
            to me to chat about our next project <a href="#contact-me">here.</a>

          </p>
        </section>
        <section id="work">
            <h2>Work</h2>
            <div className="work-cont">
                <article id="benefactor" className="web-app">
                    <a href="https://floating-gorge-84080.herokuapp.com/" target="_blank">
                        <div className="app-info dark-layer">
                            <h3>Benefactor</h3>
                            <p>HTML/CSS/JavaScript/Node.js<br/>/Express.js/Sequelize</p>
                        </div>
                    </a>
                    <img src="./assets/images/benefactor.PNG" alt="inventory-tracker"/>
                </article>
                <article id="inventory-tracker" className="web-app">
                    <a href="https://dkbaffour777.github.io/inventory-tracker/" target="_blank">
                        <div className="app-info dark-layer">
                            <h3>Inventory Tracker</h3>
                            <p>HTML/CSS/JavaScript</p>
                        </div>
                    </a>
                    <img src="./assets/images/inventory-tracker.png" alt="inventory-tracker"/>
                </article>
                <article id="weather-dashboard" className="web-app">
                    <a href="https://dkbaffour777.github.io/weather-dashboard/" target="_blank">
                        <div className="app-info dark-layer">
                            <h3>Weather Dashboard</h3>
                            <p>HTML/CSS/JavaScript</p>
                        </div>
                    </a>
                    <img src="./assets/images/weather-dashboard.png" alt="weather-dashboard"/>
                </article>
                <article id="timed-quiz" className="web-app">
                    <a href="https://dkbaffour777.github.io/timed-quiz/" target="_blank">
                        <div className="app-info dark-layer">
                            <h3>Timed Quiz</h3>
                            <p>HTML/CSS/JavaScript</p>
                        </div>
                    </a>
                    <img src="./assets/images/timed-quiz.PNG" alt="timed-quiz"/>
                </article>
                <article id="password-generator" className="web-app">
                    <a href="https://dkbaffour777.github.io/password-generator/" target="_blank">
                        <div className="app-info dark-layer">
                            <h3>Password Generator</h3>
                            <p>HTML/CSS/JavaScript</p>
                        </div>
                    </a>
                    <img src="./assets/images/password-generator.PNG" alt="password-generator"/>
                </article>
                <article id="work-day-scheduler" className="web-app">
                    <a href="https://dkbaffour777.github.io/work-day-scheduler/" target="_blank">
                        <div className="app-info dark-layer">
                            <h3>Work Day Scheduler</h3>
                            <p>HTML/CSS/JavaScript</p>
                        </div>
                    </a>
                    <img src="./assets/images/work-day-scheduler.PNG" alt="work-day-scheduler"/>
                </article>
            </div>
        </section>
        <section id="contact-me">
            <h2>Contact</h2>
            <address className="contact-info">
                <div id="email">
                    <img src="./assets/images/email.png" alt="email"/>
                    <a href="mailto:dkbaffour@gmail.com">dkbaffour@gmail.com</a>
                </div>
                <div id="call">
                    <img src="./assets/images/call.png" alt="call"/>
                    <p>+1 602 571 9734</p>
                </div>
            </address>
        </section>
      </div>
    </>
  );
}

export default App;
