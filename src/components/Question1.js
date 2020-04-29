import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Question1 extends Component {
    constructor(props){
        super(props)
        this.state={
            questionNumber: parseInt(this.props.match.params.qNumber),
            questionInfo: this.props.location.state.questionState,
            userScores: {},
            totalScores: this.props.location.state.previousQuestionScores,
            answerArray: [],
            userNames: Object.values(this.props.location.state.questionState.userNames),
        }
    }
    

    handleChange = (event) => {
        const {value} = event.target;
        const user = event.target.id;
        if((value === this.state.questionInfo.questionsArray[this.state.questionNumber].correct_answer) && (this.state.userScores[user] === 0)) { 
            this.totalScore(1, user);
            this.setState( { userScores: { ...this.state.userScores, [user]: 1}} )
        }else if((value !== this.state.questionInfo.questionsArray[this.state.questionNumber].correct_answer) && (this.state.userScores[user] === 1)){
            this.totalScore(-1, user);
            this.setState( { userScores: { ...this.state.userScores, [user]: 0}} )
        };
        console.log(this.state.userScores);
        console.log(this.state.totalScores)
    }

    componentDidMount(){
        // this.getParam();
        this.shuffleArray();
        this.scores();
    };

    totalScore = (n, user) => {
        this.setState({ totalScores: { ...this.state.totalScores, [user]: this.state.totalScores[user]+n}})
    }

    scores = () => {
        let obj = {};
        for(let i=0; i< this.state.userNames.length;i++){
            obj[this.state.userNames[i]] = 0;
        }
        this.setState({userScores : obj})
    }

    shuffleArray = () => {
        let answers = [];
        answers.push(this.state.questionInfo.questionsArray[this.state.questionNumber].correct_answer);
        this.state.questionInfo.questionsArray[this.state.questionNumber].incorrect_answers.forEach((answer) => answers.push(answer));
        answers.sort(() => Math.random() -0.5);
        this.setState({ answerArray: answers })
    }
    
    render() {
        console.log(this.state.userNames);
        console.log(this.state.userScores);
        console.log(this.state.totalScores);
        console.log('hi');
        let queNumber =  this.props.location.state.qNumber;
        let nextQuestionNumber = this.state.questionNumber + 1;
        let nextQNumberString = nextQuestionNumber.toString();
        let nextQNumber = queNumber + 1; 
        let state = this.props.location.state.questionState;
    

        return (
            <div>
                <h3>Question {this.state.questionNumber}</h3>
                {this.state.userNames ? <h1>{this.state.userNames['0']}</h1> : <h1>player name loading</h1>}
                <h1>{this.props.location.state.questionState.questionsArray[this.props.location.state.qNumber].question}</h1>
              {/* { this.props.location.state.qNumber ? <h1>{this.props.location.state.questionState.questionsArray[ this.props.location.state.qNumber].question}</h1> : <h1>Question title loading</h1>} */}
              <div className="radio-container">

                {this.state.userNames.map(user => {
                    return(
                        <div className="radio-buttons">
                            <form>
                            <h4>{this.state.questionInfo.playersNumber > 1? user:""}</h4>
                            {this.state.answerArray.map(answer => {
                                return(
                                    <div>
                                            <input 
                                                type="radio" 
                                                id={user} 
                                                name={`answer_${this.state.questionNumber}`} 
                                                value={answer}
                                                onChange={this.handleChange}
                                                />
                                            <label for={answer}> {answer} </label>
                                        
                                    </div>
                                )
                            })}
                        </form>
                        </div>

                            )})}
                        </div>

                    

                <Link to={{pathname:`/nextquestion/${this.state.questionNumber}`, state: {queNumber: nextQNumber, questionStateNext: state, questionScores: this.state.totalScores}}} >
                        <input type="submit"  value="Next"/>
                    </Link> 
            </div>
        );
    }
}

export default Question1;
