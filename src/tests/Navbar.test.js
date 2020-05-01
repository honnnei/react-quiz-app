import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { shallow, mount } from 'enzyme';
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import NavigationBar from '../components/Navbar';

describe('Navbar', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<NavigationBar />);
    });
  
    it('matches the snapshot', () => {
    const tree = renderer.create(<Navbar />).toJSON();
      expect(tree).toMatchSnapshot();
    });

  
    it('includes link to homepage', () => {                                       
      expect(wrapper.find("[href='/']")).toBeTruthy();
     });

     it('includes link to New Game', () => {                                       
      expect(wrapper.find("[href='/newgame']")).toBeTruthy();
     });

     it('includes link to Past Scores', () => {                                       
      expect(wrapper.find("[href='/pastscores']")).toBeTruthy();
     });
  
    
  });


