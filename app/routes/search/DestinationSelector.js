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

  render() {
    return (
      <AutoSelect
        staticData={this.props.staticOptionArr || []}
        dataCallback={this.fetchSuggestions}
        onSelect={this.props.onSelect}
        value={this.props.value}
        placeholder="Going to.."></AutoSelect>
    );
  }
}

DestinationSelector.PropTypes = {
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string,
  staticOptionArr: PropTypes.array
};

export default DestinationSelector;
