import React from 'react';

const Entities = require('html-entities').AllHtmlEntities;
 
const entities = new Entities();

class Question extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userNames: Object.values(this.props.userNames),
            playersNumber: this.props.playersNumber,
            questionsArray: [],
            score: 0,
            answerArray: [],
            userScores: {

            },
        }
    };

    handleChange = (event) => {
        const {value} = event.target;
        const user = event.target.id;
        if((value === this.props.questionContent.correct_answer) && (this.state.userScores[user] === 0)) { 
            this.props.totalScore(1, user);
            this.setState( { userScores: { ...this.state.userScores, [user]: 1}} )
        }else if((value !== this.props.questionContent.correct_answer) && (this.state.userScores[user] === 1)){
            this.props.totalScore(-1, user);
            this.setState( { userScores: { ...this.state.userScores, [user]: 0}} )
        };
    }

    componentDidMount(){
        this.shuffleArray();
        this.scores();
    };

    scores = () => {
        let obj = {};
        for(let i=0; i< this.state.userNames.length;i++){
            obj[this.state.userNames[i]] = 0;
        }
        this.setState({userScores : obj})
    }

    shuffleArray = () => {
        let answers = [];
        answers.push(this.props.questionContent.correct_answer);
        this.props.questionContent.incorrect_answers.forEach((answer) => answers.push(answer));
        answers.sort(() => Math.random() -0.5);
        this.setState({ answerArray: answers })
    }

    render(){

        return(

            <div className="Question">
                <h2>Question {this.props.id + 1}</h2>
                <h3>{entities.decode(this.props.questionContent.question)}</h3>
                <div className="radio-container">

                {this.state.userNames.map((user,i) => {
                    return(
                        <div className="radio-buttons">
                            <form>
                            <h4>{this.state.playersNumber > 1? user:""}</h4>
                            {this.state.answerArray.map(answer => {
                                return(
                                    <div>
                                            <input 
                                                type="radio" 
                                                id={user} 
                                                name={`answer_${this.props.id}`} 
                                                value={answer}
                                                onChange={this.handleChange}
                                            
                                                />
                                            <label htmlFor={answer}> {entities.decode(answer)} </label>
                                        
                                    </div>
                                )
                            })}
                            </form>
                        </div>

                )})}
                    </div>


            </div>

        )   
    }
}
export default Question;



