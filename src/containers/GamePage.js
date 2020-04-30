import React from 'react';
import Question from '../components/Question';
import { Link } from 'react-router-dom';
import '../css/GamePage.css';

const Entities = require('html-entities').AllHtmlEntities;
 
const entities = new Entities();

class GamePage extends React.Component {
    constructor(){
        super()
        this.state={
            playersNumber: null,
            difficulty: null,
            category: null,
            questionsArray: [],
            userNames: {},
            userScores: {},
            totalScore: 0
        }
    }
    


    addUserNames = (num) => {
        let html = []
        for(let i=0; i<num; i++) {
            html.push(<div className="name-input"><label key = {i+1} >{`Player ${i+1}:`}<input className="name-input-box" type="text" value={this.state.userNames[i]} name={`${i}`} onChange={this.updateUsers} placeholder="Name" required/></label></div>)
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
            this.getQuestions();
       
    }

    getQuestions = async () => {
        if(!this.state.category){
            console.log('error in getQuestions, category does not exist')
        }
        const url = `https://opentdb.com/api.php?amount=10&category=${this.props.match.params.category}&difficulty=${this.props.match.params.difficulty}&type=multiple`;
        const response = await fetch(url);
        const data = await response.json();      

        this.setState({questionsArray: data.results});
    }

    totalScore = (n, user) => {
        this.setState({userScores : {...this.state.userScores, [user]: this.state.userScores[user] + n}})
    }

    render()  {
        return(
            <div className='game-page-container'>
                <form className="name-form">
                    <div className="name-form-title">
                    <label>Enter player name{this.state.playersNumber > 1? "s":""}</label>
                    </div>
                    
                    {this.addUserNames(this.state.playersNumber)}
                    <Link to={{pathname:'/question/0', state: {qNumber: 0, questionState: this.state, previousQuestionScores: this.state.userScores}}} >
                       <input type="submit"  value="Start Game" className="start-game-button-2"/>
                    </Link>

                </form>
            </div>

        );
    }
   
}

export default GamePage;