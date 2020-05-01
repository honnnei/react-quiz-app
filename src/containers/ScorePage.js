import React from 'react';
import '../css/ScorePage.css';


function ScorePage(props) {
 let scores = [];
 let  winner;
    Object.values(props.location.state.stateFinal.userNames).map(user => {
        if(props.location.state.userScores[user]){
        return( scores.push( {
            user: user,
            score: props.location.state.userScores[user]
        }
        ))} else{console.log('no userscores found')} })
 
      if(scores.length >1 ) {
          let sorted = scores.sort((a, b) =>{return b.score - a.score });
       winner = sorted[0].user
        console.log(winner)
      } else {
          console.log('not enough users')
      }

        
    return(
        <div className="scorepage-container">
            <h1>Final Scores</h1>
            <div className="scores-container">
             {winner ? <h2>The winner is: {winner}</h2> : <h2>There is no winners</h2>  }
                    {(Object.values(props.location.state.stateFinal.userNames)).map(user => {
                        return (<h3 key={user}>{user}:&#160;&#160;&#160;{props.location.state.userScores[user]}</h3>)
                    })}

                    
                </div>
        </div>
    );
}

export default ScorePage;