import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import About from "./pages/About"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Router>
      <Header/>
      <div className="main-content-wrapper">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          
          <Route component={()=> <h1>Page does not exist :(</h1>} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
