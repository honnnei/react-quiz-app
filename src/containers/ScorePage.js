import React from 'react';
import '../css/ScorePage.css';

function ScorePage(props) {
    return(
        <div className="scorepage-container">
            <h1>Final Scores</h1>
            <div className="scores-container">
                    {(Object.values(props.location.state.stateFinal.userNames)).map(user => {
                        return (<h3>{user}:&#160;&#160;&#160;{props.location.state.userScores[user]}</h3>)
                    })}
                </div>
        </div>
    );
}

export default ScorePage;