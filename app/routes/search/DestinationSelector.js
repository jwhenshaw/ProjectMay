import React from 'react';
import PropTypes from 'prop-types';
import AutoSelect from '../../components/auto-select/index';
import DestinationSuggester from '../../services/DestinationSuggester';

class DestinationSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.sugestionService = new DestinationSuggester();
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
        placeholder="Destination.."
      ></AutoSelect>
    );
  }
}

DestinationSelector.PropTypes = {
  onSet: PropTypes.func.isRequired,
  staticOptionArr: PropTypes.array
};

export default DestinationSelector;
