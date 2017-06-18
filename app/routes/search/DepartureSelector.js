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

  render() {
    return (
      <AutoSelect
        staticData={this.props.staticOptionArr || []}
        dataCallback={this.fetchSuggestions}
        onSelect={this.props.onSelect}
        value={this.props.value ? this.props.value : "Departing from.."}
      ></AutoSelect>
    );
  }
}

DepartureSelector.PropTypes = {
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string,
  staticOptionArr: PropTypes.array
};

export default DepartureSelector;
