import React from 'react';

class Question extends React.Component {
    constructor(){
        super()
        this.state={
            playersNumber: null,
            difficulty: null,
            category: null,
            questionsArray: [],
            score: 0,
            answerCheck: '',
            answer_0: '',
            answer_1: '',
            answer_2: '',
            answer_3: '',
            answerArray: []
        }
    };

    handleChange = (event) => {
        const {value} = event.target;
        console.log(value)
        console.log(atob(this.props.questionContent.correct_answer));
        console.log(this.state.score);


        if(value === atob(this.props.questionContent.correct_answer)) { 
            this.props.totalScore();
            // this.setState( { score: 1 } )
        } else {
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
        
        <div>
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



