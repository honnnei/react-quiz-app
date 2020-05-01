import React from 'react'
import { BrowserRouter,  MemoryRouter, Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme'
import ScorePage from '../containers/ScorePage'


describe('ScorePage', () => {



  it('should render scores-container div', () => {
    const wrapper = mount( <ScorePage location={{userScores: {1: 0}, state:{userScores: {1: 0}, stateFinal: {userNames: {0: "1"}}}}}/> )
    expect(wrapper.exists('.scores-container')).toEqual(true);

    });

});
