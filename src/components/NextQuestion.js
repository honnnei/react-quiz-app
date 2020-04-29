import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

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
        console.log(this.props.location.state.feedback[user]) 
        return(this.props.location.state.feedback[user] === 1 ? user + " was right": user + " was wrong")
        }

    render() {
        let questionNumber = this.state.previousQuestionNumber;
        let nextQuestionNumber = questionNumber + 1;
        let nextQNumberString = nextQuestionNumber.toString();
        let currentQuestionScores = this.props.location.state.questionScores;
        console.log(this.props.location.state)
        console.log(this.props.location.state.questionStateNext);

        console.log(this.props.location.state.feedback)
        let stateNext = this.props.location.state.questionStateNext;
        return (
            <div>
                <h1>Next Question</h1>
                <div>{(Object.values(this.props.location.state.questionStateNext.userNames)).map(user => <h3>{this.userCorrect(user)}</h3>)}</div>
                <h3>{this.props.location.state.questionStateNext.questionsArray[this.props.match.params.previousQuestionNum].question}</h3>
                <p>The correct answer was: {this.props.location.state.questionStateNext.questionsArray[this.props.match.params.previousQuestionNum].correct_answer}</p>
                {questionNumber == 9 ? <Link to={{ pathname:"/scores", state:{userScores: currentQuestionScores, stateFinal: stateNext }}}><input type="button" value="View Scores!" /></Link> : <Link to={{pathname:`/question/${nextQNumberString}`, state: {qNumber: nextQuestionNumber, questionState: stateNext, previousQuestionScores: currentQuestionScores}}} ><input type="submit"  value="Next Question"/></Link>}
          </div>
               
            
        )
    }
}

export default NextQuestion;



