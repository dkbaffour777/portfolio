import About from "../About"
import ProjectList from "../ProjectList";
import Contact from "../Contact";
import Resume from "../Resume";
import projectListData from "../../Data";

const AppNavgiation = ({currentPage, setCurrentPage}) => {
    switch (currentPage) {
      case 'About':
        return <About setCurrentPage={setCurrentPage}/>
      case 'Portfolio':
        return <ProjectList projectListData={projectListData}/>
      case 'Contact':
        return <Contact />
      case 'Resume':
        return <Resume />
      default:
        return <About setCurrentPage={setCurrentPage}/>;
    }
}

export default AppNavgiation;
