import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme'
import Question from '../components/Question'


describe('Question', () => {

    let dumbieState = {
        previousQuestionScores:{
            R: 0,
            Ro: 0,
            Ror: 0,
            Rori: 0,
            Rorie: 0
        },
        qNumber: 0,
        questionState: {
            category: "9",
            difficulty: "easy",
            playersNumber: "1",
            questionsArray: [{category: "General Knowledge", type: "multiple", difficulty: "easy", question: "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?", correct_answer: "Key", incorrect_answers: ["Sword", "Pen", "Cellphone"]}],
            totalScore: 0,
            userNames: {0: "Rorie"},
            userScores: {R: 0, Ro: 0, Ror: 0, Rori: 0, Rorie: 0}
        }
    }

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Question 
            match={{
                isExact: true,
                params: {qNumber: "0"},
                path: "/question/:qNumber",
                url: "/question/0"}} 
            location={{state: dumbieState}}/>);
    });

    it('should change state onChange of input', () => {
        (wrapper.find('input').at(1)).simulate('change', { target: { name: 'answer_0', value: 'Key' } })
        setTimeout(() => {
            expect((wrapper.state('userScores.Rorie'))).toEqual('1');
        }, 4000)      
    });

    it('should render main Question div', () => {
        expect(wrapper.exists('.question-container')).toEqual(true);
    });

    it('should render the Answers Div div', () => {
        expect(wrapper.exists('.radio-container')).toEqual(true);
    });

    it('should render the each answer div', () => {
        expect(wrapper.exists('.radio-button-answer')).toEqual(true);
    });

})







//npm test -- --coverage --watchAll=false  
    