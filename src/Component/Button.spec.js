import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from './Button'
import mockData from '../MockData/WeatherData.json';

const setup = props => {
    const actions = {
        submitCityName: jest.fn(),
        submitCity: jest.fn()
    }
    const component = shallow(
        <Button {...props} onClick="submitCity"/>
    )
    return {
        component: component,
        actions: actions,
    }
}

describe('Button component', () => {
  it('should check if Button Component is Rendered', () => {
      const { component, actions } = setup({ text: 'submit City'});
      const element = component.find('a');
      expect(element.text()).toMatch(/^submit City$/);
    });
})
