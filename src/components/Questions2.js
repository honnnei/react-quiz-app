import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class Questions2 extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.location.state.questionContent[1].question}</h2> <Link to={{pathname:'/questions', state: {questionContent: this.props.location.state.questionContent}}} ><input type="submit"  value="Next"/></Link>
            </div>
        )
    }
}

export default Questions2
