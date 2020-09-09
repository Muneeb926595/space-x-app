import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About';
import Launches from './Components/Launches';
import RocketsContainer from './Components/Rockets/RocketsContainer';
import LaunchDetailsContainer from './Components/Launches/LaunchDetails/index';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/launches" component={Launches} />
        <Route exact path="/rockets" component={RocketsContainer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/launches/:id" component={LaunchDetailsContainer} />
      </Switch>
    </Router>
  );
}

export default App;

