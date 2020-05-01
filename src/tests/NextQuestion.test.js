import React from 'react'
import { Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme'
import NextQuestion from '../components/NextQuestion'


describe('NextQuestion', () => {

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
        },
        category: "9",
            difficulty: "easy",
            playersNumber: "1",
            questionsArray: [{category: "General Knowledge", type: "multiple", difficulty: "easy", question: "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?", correct_answer: "Key", incorrect_answers: ["Sword", "Pen", "Cellphone"]}],
            totalScore: 0,
            userNames: {0: "Rorie"},
            userScores: {R: 0, Ro: 0, Ror: 0, Rori: 0, Rorie: 0}
    }
    let dumbieScores = {R: 0, Ro: 0, Ror: 0, Rori: 0, Rorie: 1}
    let dumbieFeedback = {Rorie: 1}


    it('should render main User Feedback div', () => {
        let wrapper = shallow(<NextQuestion 
            match={{
                isExact: true,
                params: {previousQuestionNum: "0"},
                path: "/nextquestion/:previousQuestionNum",
                url: "/nextquestion/0"}} 
            location={{state: {queNumber: 1, questionStateNext: dumbieState, questionScores: dumbieScores, feedback: dumbieFeedback }}}/>);
        expect(wrapper.exists('.user-feedback')).toEqual(true);
    });

    it('should render the Next Question div', () => {
        let wrapper = shallow(<NextQuestion 
            match={{
                isExact: true,
                params: {previousQuestionNum: "0"},
                path: "/nextquestion/:previousQuestionNum",
                url: "/nextquestion/0"}} 
            location={{state: {queNumber: 1, questionStateNext: dumbieState, questionScores: dumbieScores, feedback: dumbieFeedback }}}/>);
        expect(wrapper.exists('.next-question-button-container')).toEqual(true);
    });

    it('should render the Next Question div', () => {
        let wrapper = shallow(<NextQuestion 
            match={{
                isExact: true,
                params: {previousQuestionNum: "0"},
                path: "/nextquestion/:previousQuestionNum",
                url: "/nextquestion/0"}} 
            location={{state: {queNumber: 1, questionStateNext: dumbieState, questionScores: dumbieScores, feedback: dumbieFeedback }}}/>);
        expect(wrapper.exists('.next-question-container')).toEqual(true);
    });

});







//npm test -- --coverage --watchAll=false  
    