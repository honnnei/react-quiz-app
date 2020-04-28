import React from 'react';

class Question extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userNames: this.props.userNames,
            playersNumber: this.props.playersNumber,
            questionsArray: [],
            score: 0,
            answerArray: []
        }
    };

    handleChange = (event) => {
        const {value} = event.target;
        console.log(value)
        console.log(atob(this.props.questionContent.correct_answer));
        console.log(this.state.score);


        if((value === atob(this.props.questionContent.correct_answer)) && (this.state.score == 0)) { 
            this.props.totalScore(1);
            this.setState( { score: 1 } )
        }else if((value !== atob(this.props.questionContent.correct_answer)) && (this.state.score == 1)){
            this.props.totalScore(-1);
            this.setState( { score: 0 } )
        };
    }

    componentDidMount(){
        this.shuffleArray();
    }

    shuffleArray = () => {
        let answers = new Array;
        answers.push(atob(this.props.questionContent.correct_answer));
        this.props.questionContent.incorrect_answers.forEach((answer) => answers.push(atob(answer)));
        answers.sort(() => Math.random() -0.5);
        this.setState({ answerArray: answers })
    }
    
    // if checked button === correct_answer, setState score + 1

    render(){
        console.log(this.state);

    return(

        <div className="Question">
            <h2>Question {this.props.id + 1}</h2>
            <h3>{atob(this.props.questionContent.question)}</h3>

            {this.state.answerArray.map(answer => (
    
            <div>
                    <input 
                        type="radio" 
                        // id={answer} 
                        name={`answer_${this.props.id}`} 
                        value={answer}
                        onChange={this.handleChange}
                        />
                    <label for={answer}> {answer} </label>
                
            </div>

            ))}

        </div>

    )   
    }
}
export default Question;



