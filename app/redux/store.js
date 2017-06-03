import {createStore, applyMiddleware} from 'redux';
import {reducer, middleware} from './index';

function initStore() {
  const finalCreateStore = applyMiddleware(middleware)(createStore);
  return finalCreateStore(reducer);
}

export default initStore;
