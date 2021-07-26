import Header from "./components/Header";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import projectListData from "./Data";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-content-wrapper">
        <ProjectList projectListData={projectListData} />
      </div>
      <Footer />
    </>
  );
}

export default App;
