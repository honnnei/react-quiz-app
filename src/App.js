import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import NewGamePage from './containers/NewGamePage';
import PastScoresPage from './containers/PastScoresPage';
import ScorePage from './containers/ScorePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path='/' exact><HomePage /></Route>
          <Route path='/newgame' exact><NewGamePage /></Route>
          <Route path='/pastscores' exact><PastScoresPage /></Route>

        </Switch>
    </Router>
    </div>
  );
}

export default App;
