import React from 'react';
import NavigationBar from './components/Navbar';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import GamePage from './containers/GamePage';
import PastScoresPage from './containers/PastScoresPage';
import Question2 from './components/Question2'
import Question3 from './components/Questions3'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Switch>
          <Route path='/' exact  component={HomePage}/>
          {/* <Route path='/gamepage/:playersNumber/:difficulty/:category' exact><GamePage /></Route> */}
          <Route 
              path='/gamepage/:playersNumber/:difficulty/:category' 
              
              render={(props) => <GamePage {...props} />} 
          />
          <Route path='/pastscores' exact component={PastScoresPage}/>
          <Route path='/question'  component={Question2}/>
          <Route path='/questions'  component={Question3}/>
          {/* playersNumber1={:} difficulty1={this.props.match.params.difficulty} category1={this.props.match.params.category} */}


        </Switch>
    </Router>
    </div>
  );
}

export default App;
