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
        this.forceUpdate();
    }

    // componentDidUpdate() {
    //     // console.log('component did Update');
    //     render();
    // }

    
    render() {
    //    if (this.state.questionNumber === null) {
    //        this.getParam();
    //        console.log('called getParams');
    //    }


        console.log('hi');
        let queNumber =  this.props.location.state.qNumber;
        console.log(this.props.location.state.questionState);
        let nextQuestionNumber = this.state.questionNumber + 1;
        let nextQNumberString = nextQuestionNumber.toString();
        let nextQNumber = queNumber + 1; 
        let state = this.props.location.state.questionState;
    

        return (
            <div>
                <h3>Question {this.state.questionNumber}</h3>
                {this.props.location.state.questionState.userNames ? <h1>{this.props.location.state.questionState.userNames['0']}</h1> : <h1>player name loading</h1>}
                <h1>{this.props.location.state.questionState.questionsArray[ this.props.location.state.qNumber].question}</h1>
              {/* { this.props.location.state.qNumber ? <h1>{this.props.location.state.questionState.questionsArray[ this.props.location.state.qNumber].question}</h1> : <h1>Question title loading</h1>} */}
               
                <Link to={{pathname:`/nextquestion/${this.state.questionNumber}`, state: {queNumber: nextQNumber, questionStateNext: state}}} >
                        <input type="submit"  value="Next"/>
                    </Link> 
            </div>
        );
    }
}

export default Question1;
