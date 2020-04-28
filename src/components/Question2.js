import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Question2 extends Component {
    render() {
        return (
            <div>
                {this.props.location.state.questionContent ? <div> <h1>{this.props.location.state.questionContent[0].question}</h1> <Link to={{pathname:'/questions', state: {questionContent: this.props.location.state.questionContent}}} ><input type="submit"  value="Next"/></Link> </div>: <h3>waiting...</h3>}
            </div>
        )
    }
}

export default Question2
