import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Question1 extends Component {
    constructor(){
        super()
        this.state={
            questionNumber: null
        }
    }
    
    
    componentDidMount() {
       this.getParam();
    }

    getParam = () => {
        this.setState({
            questionNumber: parseInt(this.props.match.params.qNumber),
        });
    }

    

    
    render() {
    //    if (this.state.questionNumber === null) {
    //        this.getParam();
    //        console.log('called getParams');
    //    }


        console.log('hi');
        let qNumber = this.state.questionNumber;
        console.log(this.state.questionNumber);
        let nextQuestionNumber = this.state.questionNumber + 1;
        let nextQNumberString = nextQuestionNumber.toString();
        console.log(this.props.location.state);
        console.log(this.props.location.state.questionState.questionsArray);
        console.log(this.props.location.state.questionState.questionsArray[0]);
        console.log(this.props.location.state.questionState.questionsArray[this.state.questionNumber]);

        
    

        return (
            <div>
                <h3>Question {this.state.questionNumber}</h3>
                {this.props.location.state.questionState.userNames ? <h1>{this.props.location.state.questionState.userNames[`${qNumber}`]}</h1> : <h1>player name loading</h1>}
              { this.state.questionNumber ? <h1>{this.props.location.state.questionState.questionsArray[qNumber].question}</h1> : <h1>Question title loading</h1>}
               
                <Link to={{pathname:`/nextquestion/${this.state.questionNumber}`, state: {questionState: this.props.location.state.questionState}}} >
                        <input type="submit"  value="Next"/>
                    </Link> 
            </div>
        )
    }
}

export default Question1;
