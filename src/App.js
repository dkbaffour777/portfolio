import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import About from "./pages/About"
import ProjectPage from "./pages/ProjectPage";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Router>
      <Header/>
      <div className="main-content-wrapper">
        <Switch>
          <Route exact path="/portfolio" component={About} />
          <Route exact path="/portfolio/about" component={About} />
          <Route exact path="/portfolio/projects" component={ProjectPage} />
          <Route exact path="/portfolio/contact" component={Contact} />
          <Route exact path="/portfolio/resume" component={Resume} />
          
          <Route render={()=> <h1>Page does not exist :(</h1>} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
