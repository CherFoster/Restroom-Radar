import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Bathrooms from './components/Bathrooms';
import CreateBathroom from './components/CreateBathroom';
import ContactUs from './components/ContactUs';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bathrooms" component={Bathrooms} />
        <Route path="/add-bathroom" component={CreateBathroom} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;