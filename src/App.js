import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-content-wrapper">
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
      </div>
      <Footer />
    </>
  );
}

export default App;
