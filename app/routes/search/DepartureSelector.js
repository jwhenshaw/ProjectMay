import React from 'react';
import PropTypes from 'prop-types';
import AutoSelect from '../../components/auto-select/index';
import DepartureSuggester from '../../services/DepartureSuggester';

class DepartureSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.sugestionService = new DepartureSuggester();

    this.fetchSuggestions = this.fetchSuggestions.bind(this);
  }

  fetchSuggestions(value) {
    return this.sugestionService.fetchSuggestions(value);
  }

  handleSelect(selectedObj) {
    console.log(`selected: ${selectedObj.label}`);
  }

  render() {
    return (
      <AutoSelect
        staticData={this.props.staticOptionArr || []}
        dataCallback={this.fetchSuggestions}
        onSet={this.handleSelect}
        placeholder="Departing from.."
      ></AutoSelect>
    );
  }
}

DepartureSelector.PropTypes = {
  onSet: PropTypes.func.isRequired,
  staticOptionArr: PropTypes.array
};

export default DepartureSelector;
