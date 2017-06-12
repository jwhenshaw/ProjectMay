import {List, Map, fromJS} from 'immutable';

import { SearchActions as actions } from '../../app/redux/action-creators';
import { searchReducer as reducer } from '../../app/redux/reducer';

describe('searchReducer', () => {

  it('handles set flight departure', () => {
    const departure = "LON";
    const initialState = Map();
    const nextState = reducer(initialState, actions.setFlightDeparture(departure));
    expect(nextState).toEqual(fromJS({
      flight: {
        departure: departure
      }
    }));
  });

  it('handles set flight destination', () => {
    const destination = "JFK";
    const initialState = Map();
    const nextState = reducer(initialState, actions.setFlightDestination(destination));
    expect(nextState).toEqual(fromJS({
      flight: {
        destination: destination
      }
    }));
  });

  it('handles set flight dep date', () => {
    const departureDate = new Date();
    const initialState = Map();
    const nextState = reducer(initialState, actions.setFlightDepartureDate(departureDate));
    expect(nextState).toEqual(fromJS({
      flight: {
        departureDate: departureDate
      }
    }));
  });

  it('handles set flight return date', () => {
    const returnDate = new Date();
    const initialState = Map();
    const nextState = reducer(initialState, actions.setFlightReturnDate(returnDate));
    expect(nextState).toEqual(fromJS({
      flight: {
        returnDate: returnDate
      }
    }));
  });

});
