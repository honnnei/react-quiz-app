import React from 'react';

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
        if((value === atob(this.props.questionContent.correct_answer)) && (this.state.userScores[user] == 0)) { 
            this.props.totalScore(1, user);
            this.setState( { userScores: { ...this.state.userScores, [user]: 1}} )
        }else if((value !== atob(this.props.questionContent.correct_answer)) && (this.state.userScores[user] == 1)){
            this.props.totalScore(-1, user);
            this.setState( { userScores: { ...this.state.userScores, [user]: 0}} )
        };
        console.log(this.state.userScores)
    }

    componentDidMount(){
        this.shuffleArray();
        this.state.userNames.map(user => {
            this.setState({ userScores: { ...this.state.userScores, [user]: 0}})})
    };

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
            {this.state.userNames.map(user => {
                return(
                <form>
                <h4>{user}</h4>
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
                                <label for={answer}> {answer} </label>
                            
                        </div>
                    )
                })}
                </form>
            )})}

        </div>

    )   
    }
}
export default Question;



