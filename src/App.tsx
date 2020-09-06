import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Launches from './Components/Launches';
import Rockets from './Components/Rockets';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/launches" component={Launches} />
        <Route exact path="/rockets" component={Rockets} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

