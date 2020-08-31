import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  xit('should render App component', () => {
    const component = shallow(<App/>);
    expect(component.find('.searchCity').length).toEqual(1);
  })

})
