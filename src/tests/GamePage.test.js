import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import GamePage from '../containers/GamePage';
jest.mock('./__mock__/Request');
import Request from './__mock__/Request';
import ApiObject from './__mock__/__mockData__.json';

describe('GamePage', () => {

    // let wrapper;
    // beforeEach(() => {
     
    // });

    it('GamePage should render GamePage div', () => {
        const wrapper = shallow(<GamePage  required={true}
    match={{params: {playersNumber: 1}, category: 'General Knowledge', difficulty:'medium'}}/>); 
        expect(wrapper.exists('.GamePage')).toEqual(true);
    });


    it('GamePage should load user data', () => {
        return GamePage.getQuestions()
        .then(data => {
          expect(data).toBeDefined()
          expect(data.entity.name).toEqual('Koen van Gilst')
        })
    });

    it('GamePage should load user data', () => {
      
          expect(Request).toEqual(ApiObject);
    });




  })