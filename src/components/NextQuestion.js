import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import '../css/NextQuestion.css';

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

 class NextQuestion extends Component {
    constructor(){
        super()
        this.state={
            previousQuestionNumber: null
        }
    }

    componentDidMount() {
        this.getParam();
     }
 
     getParam = () => {
         this.setState({
             previousQuestionNumber: parseInt(this.props.match.params.previousQuestionNum),
         });
     }

    userCorrect = (user) => {
        return(this.props.location.state.feedback[user] === 1 ? user + " was right ✓": user + " was wrong ✕")
        }

    render() {
        let questionNumber = this.state.previousQuestionNumber;
        let nextQuestionNumber = questionNumber + 1;
        let nextQNumberString = nextQuestionNumber.toString();
        let currentQuestionScores = this.props.location.state.questionScores;
        let stateNext = this.props.location.state.questionStateNext;
        return (
            <div className="next-question-container">
                <h3>{entities.decode(this.props.location.state.questionStateNext.questionsArray[this.props.match.params.previousQuestionNum].question)}</h3>
                <p>The correct answer was: {entities.decode(this.props.location.state.questionStateNext.questionsArray[this.props.match.params.previousQuestionNum].correct_answer)}</p>
                <div className="user-feedback">{(Object.values(this.props.location.state.questionStateNext.userNames)).map(user => <h3>{this.userCorrect(user)}</h3>)}</div>
                <div className="next-question-button-container">
                    {questionNumber == 9 ? <Link to={{ pathname:"/scores", state:{userScores: currentQuestionScores, stateFinal: stateNext }}}><input className="next-question-button" type="button" value="View Scores!" /></Link> : <Link to={{pathname:`/question/${nextQNumberString}`, state: {qNumber: nextQuestionNumber, questionState: stateNext, previousQuestionScores: currentQuestionScores}}} ><input className="next-question-button" type="submit"  value="Next Question"/></Link>}
                </div>
            </div>
               
        )
    }
}

export default NextQuestion;



