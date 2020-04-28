import React from 'react';

class Question extends React.Component {
    constructor(){
        super()
        this.state={
            playersNumber: null,
            difficulty: null,
            category: null,
            questionsArray: []
        }
    };
render(){

    let answers = new Array;
    answers.push(atob(this.props.questionContent.correct_answer));
    this.props.questionContent.incorrect_answers.forEach((answer) => answers.push(atob(answer)));
    answers.sort(() => Math.random() -0.5);

    return(
        <div className="Question">
            <h2>Question {this.props.id + 1}</h2>
            <h3>{atob(this.props.questionContent.question)}</h3>

            {answers.map(answer => (
    
            <div>
                <input type="checkbox" id={answer} name="answer" />
                <label for="answer">{answer}</label>
            </div>

            ))};

        </div>

    )   
    }
}
export default Question;



