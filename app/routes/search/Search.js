import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import DepartureSelector from './DepartureSelector';
import DestinationSelector from './DestinationSelector';
import DepartureDateSelector from './DepartureDateSelector';
import ReturnDateSelector from './ReturnDateSelector';

class Search extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    if(this.props.search.get('departure') !== undefined){
      var departure = this.props.search.get('departure').label;
    }
    if(this.props.search.get('destination') !== undefined){
      var destination = this.props.search.get('destination').label;
    }
    //TODO move out logic
    const departureStartDate = new Date();
    let tempDate = new Date();
    tempDate.setFullYear(departureStartDate.getFullYear()+1);
    const endDate = new Date(tempDate.getTime());
    departureStartDate.setDate(departureStartDate.getDate()+1);
    var returnStartDate = new Date(departureStartDate.getTime());
    returnStartDate.setDate(departureStartDate.getDate()+1);
    return (
      <View style={styles.searchContainer}>
        <DepartureSelector
          style={styles.departure}
          value={departure}
          staticOptionArr={[{label: "tempppppp (TEST)"}]}
          onSelect={this.props.setFlightDeparture} >
        </DepartureSelector>
        <DestinationSelector
          style={styles.destination}
          value={destination}
          staticOptionArr={[{label: "desitnation (TEST)"}]}
          onSelect={this.props.setFlightDestination}>
        </DestinationSelector>
        <DepartureDateSelector
          style={styles.departure_date}
          date={departureStartDate}
          startDate={departureStartDate}
          endDate={endDate}
          onSelect={this.props.setFlightDeparture}>
        </DepartureDateSelector>
        <ReturnDateSelector
          style={styles.return_date}
          date={returnStartDate}
          startDate={returnStartDate}
          endDate={endDate}
          onSelect={this.props.setFlightDeparture}>
        </ReturnDateSelector>
      </View>
    );
  }
}

export default Search;
