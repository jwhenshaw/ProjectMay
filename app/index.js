import React, {Component} from 'react';
import {AppRegistry, ListView, TextInput, Text, View} from 'react-native';

import SearchContainer from './routes/search/index';
import Calendar from './components/calendar/index';

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
<<<<<<< HEAD
      <Calendar startDate={new Date(2017, 3, 8)} onPressDate={this.onPressDate}></Calendar>
=======
      <Calendar startDate={new Date()}></Calendar>
>>>>>>> c6151ca7730c092a631e8f0232c8c12fa22573d9
    );
  }
}

export default IndexComponent;
