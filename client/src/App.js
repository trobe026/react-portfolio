import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Thanks from "./pages/Thanks";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Nav />
      <div className='container-fluid'>
      <Switch>
        <Route exact path={"/"} component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path={"/thanks"} component={Thanks} />
      </Switch>
      </div>
      <Footer />
    </div>
  </Router>
)

export default App;
