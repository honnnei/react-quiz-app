import React from 'react';
import '../css/ScorePage.css';


function ScorePage(props) {
let justScores= [];
 let scores = [];
 let maxScores;
 let  winner;
 let max;
 
    Object.values(props.location.state.stateFinal.userNames).map(user => {

        if(props.location.state.userScores[user] >= 0){
        return( scores.push( {
            user: user,
            score: props.location.state.userScores[user]
        })
        justScores.push(props.location.state.userScores[user])
        console.log(justScores)
        max = Math.max(...justScores)
        maxScores= justScores.filter(function(item){
            console.log(maxScores)
            return item === max;
        });
    } else{console.log('no userscores found')} })
 
      if(maxScores.length === 1 && scores.length > 1 ) {
          let sorted = scores.sort((a, b) =>{return b.score - a.score });
       winner = sorted[0].user

      } else if(maxScores.length > 1 && scores.length >1) {
       let result = scores.filter(item => item.score === max)
          winner = result.map(x => x.user)  
      } else{
        console.log('not enough users')
      }

        
    return(
        <div className="scorepage-container">
            <h1>Final Scores</h1>
            <div className="scores-container">

             {winner.length === 1 ? <h2>The winner is: {winner}</h2> : winner.length > 1 ? <h2>The winners are: {winner.join(', ')}</h2> : <h2> Good Job!</h2>  }

                    {(Object.values(props.location.state.stateFinal.userNames)).map(user => {
                        return (<h3 key={user}>{user}:&#160;&#160;&#160;{props.location.state.userScores[user]}</h3>)
                    })}

                    
                </div>
        </div>
    );
}

export default ScorePage;