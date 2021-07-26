import Header from "./components/Header/Header";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-content-wrapper">
        <About />
      </div>
      <Footer />
    </>
  );
}

export default App;
