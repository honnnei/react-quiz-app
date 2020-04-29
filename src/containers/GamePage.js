import React from 'react';
import Question from '../components/Question'
import { Link } from 'react-router-dom';

class GamePage extends React.Component {
    constructor(){
        super()
        this.state={
            playersNumber: null,
            difficulty: null,
            category: null,
            questionsArray: [],
            userNames: {},
            userScores: {
            },
            totalScore: 0
        }
    }
    


    addUserNames = (num) => {
        let html = []
        for(let i=0; i<num; i++) {
            html.push(<label>{`Player ${i+1}`}<input type="text" value={this.state.userNames[i]} name={`${i}`} onChange={this.updateUsers}/></label>)
        }
        
        return html
    }

    updateUsers = (e) => {
        const obj = e.target.name
        const name = e.target.value
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
        // &encode=base64
        const url = `https://opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
 
        console.log(data.results[0]);
        // const url = `https://opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple&encode=base64`;
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

                <h1>Game Page</h1>
                <h2>Total Score: {this.state.totalScore} </h2>
                {/* <form>
                    {this.state.questionsArray.map((question, i) => <Question questionContent = {question} key={i} id={i} totalScore = {this.totalScore}/>)}
                </form> */}

                {/* <h1>Game Page</h1> */}
                {/* <h2>Total Score: {this.state.totalScore} </h2> */}
                <div className="scores-container">
                    <h2>Scores:</h2>
                    {(Object.values(this.state.userNames)).map(user => {
                        return (<h3>{user}:{this.state.userScores[user]}</h3>)
                    })}
                </div>
                <div className="question-container">

                    {this.state.questionsArray.map((question, i) => <Question questionContent = {question} key={i} id={i} totalScore = {this.totalScore} playersNumber={this.state.playersNumber} userNames={this.state.userNames}/>)}
                </div>

                <form className="name-form">
                    <h3>Enter player name{this.state.playersNumber > 1? "s":""}</h3>
                    {this.addUserNames(this.state.playersNumber)}
                    <button onClick={this.getQuestions}>get questions</button>
                   <Link to={{pathname:'/question/0', state: {qNumber: 0, questionState: this.state}}}   ><input type="submit"  value="Start Game" /></Link>
                   {/* onClick={this.getQuestions} */}
                </form>
            </div>
        );
    }
   
}

export default GamePage;