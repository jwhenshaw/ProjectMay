import { combineReducers } from 'redux';
import {List, Map} from 'immutable';

function setDepDate(state, value) {
  console.log(state);
  console.log(`setDepDate action called ${value}`);
  return state.set('depDate', value)
}

var searchReducer = function(state = Map(), action) {
  console.log('searchReducer was called with state', state, 'and action', action)
  switch(action.type) {
    case 'SET_DEP_DATE':
      return setDepDate(state, action.value);

    default:
      return state;
  }
}

var userReducer = function(state = Map(), action) {
  console.log('userReducer was called with state', state, 'and action', action)
  switch(action.type) {
    case 'TEST':
      return test(state, action.value);

    default:
      return state;
  }
}

var reducer = combineReducers({
  user: userReducer,
  search: searchReducer
});

export default reducer;
