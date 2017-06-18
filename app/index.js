import React, {Component} from 'react';
import { Text } from 'react-native';
import {Provider} from 'react-redux';

//redux
import { initStore } from './redux';
import SearchContainer from './routes/search';

const store = initStore();

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
