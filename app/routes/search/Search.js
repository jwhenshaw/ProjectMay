import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import DepartureSelector from './DepartureSelector';
import DestinationSelector from './DestinationSelector';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDepartureSet(obj) {
    console.log(obj);
  }

  onDestinationSet(obj) {
    console.log(obj);
  }

  render() {
    const staticDepartureList = [
      {
        label: 'Static1 (ST1)'
      }, {
        label: "Static2 (ST2)"
      }
    ];
    return (
      <View style={styles.searchContainer}>
        <DepartureSelector staticOptionArr={[{label: "tempppppp (TEST)"}]} onSet={this.onDepartureSet}></DepartureSelector>
        <DestinationSelector staticOptionArr={[{label: "desitnation (TEST)"}]} onSet={this.onDestinationSet}></DestinationSelector>
      </View>
    );
  }
}

Search.propTypes = {
  handleInput: PropTypes.func.isRequired
}

export default Search;
