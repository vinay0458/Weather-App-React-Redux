import React from 'react'
import { shallow, mount } from 'enzyme'
import TodayWeather from './TodayWeather'
import mockData from '../MockData/WeatherData.json';
const setup = props => {
  const component = mount(
    <TodayWeather {...props} />
  )

  return {
    component: component
  }
}

describe('TodayWeather component', () => {
  it('should check if the component is rendered', () => {
      const { component } = setup({ city: 'Chicago', ...(mockData.States['IL'].cities[0]) });
      const findByClass = component.find('.todayWeatherReport');
      expect(findByClass.length).toEqual(1);
    });

    it('should find temperature of selected city', () => {
        const { component } = setup({ city: 'Chicago', ...(mockData.States['IL'].cities[0]) });
        const findByClass = component.find('.forecastTemperature');
        expect(findByClass.text()).toMatch(/^47$/);
        const selectedPlace = component.find('.selectedPlace');
        const forecastFeels = component.find('.forecastFeels');
        expect(selectedPlace.text()).toMatch(/^Chicago$/);
        expect(forecastFeels.text()).toMatch(' 40');
      });

      it('should check if all the dates are displayed', () => {
        const { component } = setup({ city: 'Chicago', ...(mockData.States['IL'].cities[0]) });
        const findByClass = component.find('.forecastDates').find('li').at(2);
        expect(findByClass.text()).toEqual('Sun');
      });
      it('should check if details are updated on click change of dates', () => {
        const { component } = setup({ city: 'Chicago', ...(mockData.States['IL'].cities[0]) });
        const findElement = component.find('.forecastDates').find('li').at(3);
        findElement.simulate('click');
        const findByClass = component.find('.forecastTemperature');
        expect(findByClass.text()).toEqual('61');
      });
})
