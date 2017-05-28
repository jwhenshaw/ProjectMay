import React, {Component} from 'react';
import {AppRegistry, ListView, TextInput, Text, View} from 'react-native';

import SearchContainer from './routes/search/index';
import { CalendarPeriod } from './components/calendar/index';

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
      <CalendarPeriod startDate={new Date()} endDate={new Date(2017, 8, 1)} onSelectValidDate={this.onPressDate}></CalendarPeriod>
    );
  }
}

export default IndexComponent;
