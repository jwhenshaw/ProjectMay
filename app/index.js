import React, {Component} from 'react';
import {Provider} from 'react-redux';

//redux
import { initStore } from './redux';
import SearchContainer from './routes/search';

const store = initStore();

store.subscribe(function() {
    console.log('store has been updated. Latest store state:', store.getState());
    // Update your views here
})

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressDate(date) {
    console.log(date);
  }

  render() {
    return (
      <Provider store={store}>
        <SearchContainer></SearchContainer>
      </Provider>
    );
  }
}

export default Application;
