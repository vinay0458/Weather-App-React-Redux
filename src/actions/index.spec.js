import * as actions from './index'
import mockData from '../MockData/WeatherData.json';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {GET_COMPLETE_WEATHER_DATA, SET_CURRENT_DETAILS } from './ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Weather async actions', () => {
    afterEach(() => {
        fetchMock.restore()
      })
  xit('fetchData action', () => {
        fetchMock.getOnce('/todos', {
            body: { mockData: mockData },
            headers: { 'content-type': 'application/json' }
        })
        const expectedActions = [
            { type: GET_COMPLETE_WEATHER_DATA },
            { type: SET_CURRENT_DETAILS, body: { mockData: mockData } }
          ]
        const store = mockStore({ currentWeatherData: {} })
        return store.dispatch(actions.fetchData()).then(() => {
            // return of async actions
                expect(store.getActions()).toEqual(expectedActions)
        })
    })
});