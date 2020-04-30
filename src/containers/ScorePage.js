import React from 'react';
import '../css/ScorePage.css';

function ScorePage(props) {
    return(
        <div>
            <h1>Scores Page</h1>
            <div className="scores-container">
                    <h2>Scores:</h2>
                    {(Object.values(props.location.state.stateFinal.userNames)).map(user => {
                        return (<h3>{user}:{props.location.state.userScores[user]}</h3>)
                    })}
                </div>
        </div>
    );
}

export default ScorePage;