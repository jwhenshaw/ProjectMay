import React, {Component} from 'react';
import {AppRegistry, ListView, TextInput, Text, View} from 'react-native';

import SearchContainer from './routes/search/index';

class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressDate(date) {
    console.log(date);
  }

  render() {
    return (
      <SearchContainer></SearchContainer>
    );
  }
}

export default IndexComponent;
