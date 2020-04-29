import React from 'react';
import NavigationBar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import GamePage from './containers/GamePage';
import ScorePage from './containers/ScorePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          {/* <Route path='/gamepage/:playersNumber/:difficulty/:category' exact><GamePage /></Route> */}
          <Route 
              path='/gamepage/:playersNumber/:difficulty/:category' 
              
              render={(props) => <GamePage {...props} />} 
          />
          <Route path='/scores' exact component={ScorePage} />
          {/* playersNumber1={:} difficulty1={this.props.match.params.difficulty} category1={this.props.match.params.category} */}


        </Switch>
      </Router>
    </div>
  );
}

export default App;
