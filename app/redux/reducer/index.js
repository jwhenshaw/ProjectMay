import { combineReducers } from 'redux';

import searchReducer from './SearchReducer';
import userReducer from './UserReducer';

var reducer = combineReducers({
  user: userReducer,
  search: searchReducer
});

export {
  searchReducer,
  userReducer
}
export default reducer;
