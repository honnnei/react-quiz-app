import React from 'react';
import { render } from 'react-dom';

class GamePage extends React.Component {
    constructor(){
        super()
        this.state={
            playersNumber: null,
            difficulty: null,
            category: null,
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
            html.push(<input type="text" value={this.state.userNames[i]} name={`${i}`} onChange={this.updateUsers}/>)
        }
        
        return html
    }

    updateUsers = (e) => {
        e.preventDefault();
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
       
    }


    render()  {
       
       
        console.log(this.state);
        return(
            <div>
                <h1>Game Page</h1>
                <form>
                {this.addUserNames(this.state.playersNumber)}
                <input type="submit" onClick="" />
                </form>
            </div>
        );
    }
   
}

export default GamePage;