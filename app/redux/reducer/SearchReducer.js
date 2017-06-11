import {List, Map} from 'immutable';

const searchReducer = function(state = Map(), action) {
  console.log('searchReducer was called with state', state, 'and action', action)
  switch (action.type) {
    case 'SET_DEPARTURE':
      return setDeparture(state, action.value);
    case 'SET_DESTINATION':
      return setDestination(state, action.value);
    case 'SET_DEPARTURE_DATE':
      return setDepartureDate(state, action.value);
    case 'SET_RETURN_DATE':
      return setReturnDate(state, action.value);
    default:
      return state;
  }
}

function setDeparture(state, value) {
  return state.set('departure', value)
}

function setDestination(state, value) {
  return state.set('destination', value)
}

function setDepartureDate(state, value) {
  return state.set('departureDate', value)
}

function setReturnDate(state, value) {
  return state.set('returnDate', value)
}

export default searchReducer;
