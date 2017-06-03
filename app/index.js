import React, {Component} from 'react';
import {AppRegistry, ListView, TextInput, Text, View} from 'react-native';

//redux
import { initStore } from './redux';
import SearchContainer from './routes/search';

const store = initStore();
console.log(store.getState());

var setDepDate = function (date) {
    return {
        type: 'SET_DEP_DATE',
        value: date
    }
}

store.subscribe(function() {
    console.log('store has been updated. Latest store state:', store.getState());
    // Update your views here
})

store.dispatch(setDepDate(new Date()));

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
