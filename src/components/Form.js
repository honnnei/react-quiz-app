import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Form extends Component {
    constructor(){
        super()
        this.state={

                userNames: {
                    1: "",
                    2: "",
                    3: "",
                    4: ""
                },
                forms: {
                    difficulty: "easy",
                    playersNumber: 1,
                    category: "9"
                },
                data: null,	
            
        }
      

    }

  

    updateState = (e) => {
        e.preventDefault();
        const obj = e.target.name
        const name = e.target.value
        this.setState({ forms: { ...this.state.forms, [obj]: name}})
        // this.setState({[obj]: e.target.value})
    }

  
    render() {
        console.log(this.state);
        return (
            <div>
                <form>
                    <label>
                        How many players:
                        <select 
                            onChange={this.updateState} 
                            value={this.state.forms.playersNumber} 
                            name="playersNumber">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                        </select>
                    </label>
                    <label>
                        Choose a category:
                        <select 
                            onChange={this.updateState} 
                            value={this.state.category}
                            name="category"
                            >
                                <option value="any">Any Category</option>
                                <option value="9">General Knowledge</option>
                                <option value="10">Entertainment: Books</option>
                                <option value="11">Entertainment: Film</option>
                                <option value="12">Entertainment: Music</option>
                                <option value="13">Entertainment: Musicals &amp; Theatres</option>
                                <option value="14">Entertainment: Television</option>
                                <option value="15">Entertainment: Video Games</option>
                                <option value="16">Entertainment: Board Games</option>
                                <option value="17">Science &amp; Nature</option>
                                <option value="18">Science: Computers</option>
                                <option value="19">Science: Mathematics</option>
                                <option value="20">Mythology</option>
                                <option value="21">Sports</option>
                                <option value="22">Geography</option>
                                <option value="23">History</option>
                                <option value="24">Politics</option>
                                <option value="25">Art</option>
                                <option value="26">Celebrities</option>
                                <option value="27">Animals</option>
                                <option value="28">Vehicles</option>
                                <option value="29">Entertainment: Comics</option>
                                <option value="30">Science: Gadgets</option>
                                <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                                <option value="32">Entertainment: Cartoon &amp; Animations</option>
                        </select>
                    </label>
                    <label>
                        How difficult:
                        <select 
                            onChange={this.updateState} 
                            value={this.state.difficulty}
                            name="difficulty">
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                        </select>
                    </label>
                    <Link to={`/gamepage/${this.state.forms.playersNumber}/${this.state.forms.difficulty}/${this.state.forms.category}`}>
                    <button>Submit and Start the Game</button>
                    </Link>
                    
                </form>
            </div>
        );
    }
}

export default Form;