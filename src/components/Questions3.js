import React, { Component } from 'react'

 class Questions3 extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.location.state.questionContent[1].question}</h2>
            </div>
        )
    }
}

export default Questions3
