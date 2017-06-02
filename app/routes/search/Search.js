import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import DepartureSelector from './DepartureSelector';
import DestinationSelector from './DestinationSelector';
import DepartureDateSelector from './DepartureDateSelector';
import ReturnDateSelector from './ReturnDateSelector';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  props: {

  }

  onDepartureSet(obj) {
    console.log(obj);
  }

  onDestinationSet(obj) {
    console.log(obj);
  }

  onDepartureDateSet(date) {
    console.log(date);
  }

  onReturnDateSet(date) {
    console.log(date);
  }

  render() {
    const departureStartDate = new Date();
    let tempDate = new Date();
    tempDate.setFullYear(departureStartDate.getFullYear()+1);
    const endDate = new Date(tempDate.getTime());
    departureStartDate.setDate(departureStartDate.getDate()+1);
    var returnStartDate = new Date(departureStartDate.getTime());
    returnStartDate.setDate(departureStartDate.getDate()+1);
    return (
      <View style={styles.searchContainer}>
        <DepartureSelector style={styles.departure} staticOptionArr={[{label: "tempppppp (TEST)"}]} onSet={this.onDepartureSet}></DepartureSelector>
        <DestinationSelector style={styles.destination} staticOptionArr={[{label: "desitnation (TEST)"}]} onSet={this.onDestinationSet}></DestinationSelector>
        <DepartureDateSelector style={{height: 100, width:100}} date={departureStartDate} startDate={departureStartDate} endDate={endDate} onSelect={this.onDepartureDateSet}></DepartureDateSelector>
        <ReturnDateSelector style={styles.departure_date} date={returnStartDate} startDate={returnStartDate} endDate={endDate} onSelect={this.onReturnDateSet}></ReturnDateSelector>
      </View>
    );
  }
}

Search.propTypes = {
  handleInput: PropTypes.func.isRequired
}

export default Search;
