import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme'
import Question from '../components/Question'


describe('<Question />', () => {

    it('should render main Question div', () => {
        const wrapper = shallow(<Question key={1} id={1} questionContent={{category:"General Knowledge",type:"multiple",difficulty:"easy",question:"What is the largest organ of the human body?", correct_answer:"Skin",incorrect_answers:["Heart","Intestine","Liver"]}} />)
        expect(wrapper.exists('.Question')).toEqual(true);
    } )
})







//npm test -- --coverage --watchAll=false  
    