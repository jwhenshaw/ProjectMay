import { List, Map } from 'immutable';

const searchReducer = function(state = Map({flight: Map()}), action) {
  if (action.vertical) {
    let vertical = action.vertical.toLowerCase();
    switch (vertical) {
      case 'flight':
        switch (action.type) {
          case 'SET_DEPARTURE':
            return setDeparture(state, vertical, action.value);
          case 'SET_DESTINATION':
            return setDestination(state, vertical, action.value);
          case 'SET_DEPARTURE_DATE':
            return setDepartureDate(state, vertical, action.value);
          case 'SET_RETURN_DATE':
            return setReturnDate(state, vertical, action.value);
          default:
            return state;
        }
      default:
        return state;
    }
  }
  return state;
}

function setDeparture(state, vertical, value) {
  return state.setIn([
    vertical, 'departure'
  ], value)
}

function setDestination(state, vertical, value) {
  return state.setIn([
    vertical, 'destination'
  ], value)
}

function setDepartureDate(state, vertical, value) {
  return state.setIn([
    vertical, 'departureDate'
  ], value)
}

function setReturnDate(state, vertical, value) {
  return state.setIn([
    vertical, 'returnDate'
  ], value)
}

export default searchReducer;
