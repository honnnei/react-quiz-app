import React from 'react';
import { render } from 'react-dom';
import {Button} from 'reactstrap';
import Question from '../components/Question'

class GamePage extends React.Component {
    constructor(){
        super()
        this.state={
            playersNumber: null,
            difficulty: null,
            category: null,
            questionsArray: []
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
       //call api within componenetDidMount();
    }

    getQuestions = async (e) => {
        e.preventDefault();
        if(!this.state.category){
            console.log('error in getQuestions, category does not exist')
        }
        const url = `https://opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty}&type=multiple&encode=base64`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        this.setState({questionsArray: data.results});
        console.log(data);
        

    }


    render()  {
        console.log(this.state.questionsArray);
        console.log(this.state);
        return(
            <div>
                <h1>Game Page</h1>
                <Button onClick={this.getQuestions}> Start Game </Button>
                {this.state.questionsArray.map((question, i) => <Question questionContent = {question} key={i} id={i}/>)}

            </div>
        );
    }
   
}

export default GamePage;