import React from 'react';
import Question from '../components/Question';
import { Link } from 'react-router-dom';

class GamePage extends React.Component {
    constructor(){
        super()
        this.state={
            playersNumber: null,
            difficulty: null,
            category: null,
            questionsArray: [],
            userNames: {
                
            },
            userScores: {

            },
            totalScore: 0 //think we can remove this
        }
    }
    


    addUserNames = (num) => {
        let html = []
        for(let i=0; i<num; i++) {
            html.push(<label  key = {i+1} >{`Player ${i+1}`}<input type="text" value={this.state.userNames[i]} name={`${i}`} onChange={this.updateUsers} placeholder="Please enter the play's name." required/></label>)
        }
        
        return html
    }

    updateUsers = (e) => {
        const obj = e.target.name
        const name = e.target.value
        console.log(name);
        this.setState({ userNames: { ...this.state.userNames, [obj]: name}})
        this.setState({ userScores: { ...this.state.userScores, [name]: 0}})
    }


    componentDidMount() {

            this.setState({
                playersNumber: this.props.match.params.playersNumber,
                difficulty: this.props.match.params.difficulty, 
                category: this.props.match.params.category
            });
       
       //call api within componenetDidMount();
    }

    getQuestions = async (e) => {
        e.preventDefault();
        if(!this.state.category){
            console.log('error in getQuestions, category does not exist')
        }
        const url = `https://opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple&encode=base64`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({questionsArray: data.results});
    
    }

    totalScore = (n, user) => {
        this.setState({userScores : {...this.state.userScores, [user]: this.state.userScores[user] + n}})
    }

    render()  {
        return(
            <div className='GamePage'>
                {/* <h1>Game Page</h1> */}
                {/* <h2>Total Score: {this.state.totalScore} </h2> */}
                
                <div className="question-container">
                    {this.state.questionsArray.map((question, i) => <Question questionContent = {question} key={i} id={i} totalScore = {this.totalScore} playersNumber={this.state.playersNumber} userNames={this.state.userNames}/>)}
                </div>
                <form className="name-form">
                    <h3>Enter player name{this.state.playersNumber > 1? "s":""}</h3>
                    {this.addUserNames(this.state.playersNumber)}
                    <input type="submit" onClick={this.getQuestions} value="Start Game" />
                </form>

                <Link to={{ 
                    pathname:"/scores",
                    state:{userScores: this.state.userScores, userNames: this.state.userNames}
                }}>
                    <input type="button" value="View Scores!" />
                </Link>
            </div>

        );
    }
   
}

export default GamePage;