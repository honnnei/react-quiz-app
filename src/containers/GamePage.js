import React from 'react';
import { render } from 'react-dom';

class GamePage extends React.Component {
    constructor(){
        super()
        this.state={
            playersNumber: null,
            difficulty: null,
            category: null
            
        }
    }

    componentDidMount() {
        let number;
        let dif;
        let cat;
       
            number = this.props.match.params.playersNumber;
            dif = this.props.match.params.difficulty;
            cat = this.props.match.params.category;
            this.setState({
                playersNumber: number,
                difficulty: dif, 
                category: cat
            });
       
        console.log(number);
       
    }


    render()  {
   
       
        console.log(this.state);
        return(
            <div>
                <h1>Game Page</h1>
            </div>
        );
    }
   
}

export default GamePage;