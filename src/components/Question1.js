import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Question1 extends Component {
    render() {
        console.log(this.props.location.state.players['0']);
        console.log(this.props.location.state.players['1']);
        console.log(this.props.location.state.players['2']);
        console.log(this.props.location.state.players['3']);
        return (
            <div>
                {this.props.location.state.players ? <h1>{this.props.location.state.players['0']}</h1> : <h1>player name loading</h1>}
                {this.props.location.state.questionContent ? <div> <h1>{this.props.location.state.questionContent[0].question}</h1> <Link to={{pathname:'/question1', state: {questionContent: this.props.location.state.questionContent}}} ><input type="submit"  value="Next"/></Link> </div>: <h3>waiting...</h3>}
            </div>
        )
    }
}

export default Question1;
