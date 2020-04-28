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
            questionsArray: [],
            userNames: {
                1: "",
                2: "",
                3: "",
                4: ""
            }
        }
    }
    


    addUserNames = (num) => {
        let html = []
        for(let i=0; i<num; i++) {
            html.push(<label>{`Player ${i+1}`}<input type="text" value={this.state.userNames[i]} name={`${i}`} onChange={this.updateUsers}/></label>)
        }
        
        return html
    }

    updateUsers = (e) => {
        // e.preventDefault();
        const obj = e.target.name
        const name = e.target.value
        this.setState({ userNames: { ...this.state.userNames, [obj]: name}})
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
        return(
            <div className='GamePage'>
                <h1>Game Page</h1>
                <Button onClick={this.getQuestions}> Start Game </Button>
                {this.state.questionsArray.map((question, i) => <Question questionContent = {question} key={i} id={i}/>)}
                <form>
                <h3>Enter player name{this.state.playersNumber > 1? "s":""}</h3>
                {this.addUserNames(this.state.playersNumber)}
                </form>
            </div>
        );
    }
   
}

export default GamePage;