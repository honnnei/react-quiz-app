import React from 'react';
import { BrowserRouter,  MemoryRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import ScorePage from '../containers/ScorePage';
import renderer from 'react-test-renderer';


describe('ScorePage', () => {

    it('matches the snapshot', () => {
      const tree = renderer.create(<ScorePage location={{userScores: {1: 0}, state:{userScores: {1: 0}, stateFinal: {userNames: {0: "1"}}}}}/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render scores-container div', () => {
        const wrapper = mount( <ScorePage location={{userScores: {1: 0}, state:{userScores: {1: 0}, stateFinal: {userNames: {0: "1"}}}}}/> )
        expect(wrapper.exists('.scores-container')).toEqual(true);
        });

    it('should render a h2', () => {
      const wrapper = mount( <ScorePage location={{userScores: {1: 0, 2: 0}, state:{userScores: {1: 0, 2: 0}, stateFinal: {userNames: {0: "1", 1: "2"}}}}}/> )
      expect(wrapper.exists('h2')).toEqual(true);
      });
    
    it('should render a h2', () => {
      const wrapper = mount( <ScorePage location={{userScores: {1: 1, 2: 0}, state:{userScores: {1: 1, 2: 0}, stateFinal: {userNames: {0: "1", 1: "2"}}}}}/> )
      expect(wrapper.exists('h2')).toEqual(true);
      });
});
