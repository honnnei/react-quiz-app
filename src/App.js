import React from 'react';
import NavigationBar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import GamePage from './containers/GamePage';
import PastScoresPage from './containers/PastScoresPage';
import Question1 from './components/Question1'
import NextQuestion from './components/NextQuestion'
import './App.css';


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
          <Route path='/question/:qNumber' exact render={(props) => <Question1 {...props} />}
          />
          <Route path='/nextquestion/:previousQuestionNum' exact render={(props) => <NextQuestion {...props} />}
          />
         


        </Switch>
    </Router>
    </div>
  );
}

export default App;
