import React, {Component} from 'react';
import {AppRegistry, ListView, TextInput, Text, View} from 'react-native';

import SearchContainer from './routes/search/index';
import Calendar from './components/calendar/index';

class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Calendar></Calendar>
    );
  }
}

export default IndexComponent;
