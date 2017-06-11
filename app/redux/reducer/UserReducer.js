import {List, Map} from 'immutable';

const userReducer = function(state = Map(), action) {
  console.log('userReducer was called with state', state, 'and action', action)
  switch(action.type) {
    default:
      return state;
  }
}


export default userReducer;
