import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme'
import GamePage from '../containers/GamePage'

describe('<GamePage />', () => {

    it('should render GamePage div', () => {
        const wrapper = shallow(<GamePage  required={true}
        match={{params: {playersNumber: 1}, category: 'General Knowledge', difficulty:'medium'}}/>); 
        expect(wrapper.exists('.game-page-container')).toEqual(true);
    });

    it('should have a start game button', () => {
        const wrapper = shallow(<GamePage  required={true}
        match={{params: {playersNumber: 1}, category: 'General Knowledge', difficulty:'medium'}}/>); 
        expect(wrapper.exists('.start-game-button-2')).toEqual(true);
    });


    // it('should call the Api on button clicks', () => {
    //     const wrapper = mount(<BrowserRouter><GamePage  required={true}
    //     match={{params: {playersNumber: 1}, category: 'General Knowledge', difficulty:'medium'}}/></BrowserRouter>); 
    //     expect(wrapper.find('Question').length).toEqual(0)    
    //     wrapper.find('.button').simulate('click');
    //     setTimeout(() => {
    //         expect(wrapper.find('Question').length).toEqual(10);
    //     }, 4000)      
    // });

    it('should render a input tag', () => {
        const wrapper = mount(<BrowserRouter><GamePage  required={true}
            match={{params: {playersNumber: 1}, category: 'General Knowledge', difficulty:'medium'}}/></BrowserRouter>); 
        expect(wrapper.find('.name-input').length).toEqual(1)          
    });

    it('should render change state onChange', () => {
//         const wrapper = mount(<BrowserRouter><GamePage  required={true}
//             match={{params: {playersNumber: 1}, category: 'General Knowledge', difficulty:'medium'}}/></BrowserRouter>); 
//         wrapper.find('.userInput').simulate('change', { target: { name: '1', value: '02' } })

        const wrapper = shallow(<GamePage  required={true}  match={{params: {playersNumber: 1}, category: 'General Knowledge', difficulty:'medium'}}/>); 
        (wrapper.find('input').at(1)).simulate('change', { target: { name: '1', value: '02' } })
        setTimeout(() => {
            expect((wrapper.state('userNames.1'))).toEqual('02');
            expect(wrapper.exists('.start-game-button-2')).toEqual(true);
        }, 4000);
      
    });

 });