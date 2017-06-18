import React, {Component} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import AutoSelectModal from './AutoSelectModal'

/*
 * this component displays a TextInput field which when selected
 * produces a modal windows with a TextInput with auto suggest drop down
 */
export class AutoSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.onPressSelect = this.onPressSelect.bind(this);
    this.renderAutoSelect = this.renderAutoSelect.bind(this);
    this.handleSuggestClose = this.handleSuggestClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  onPressSelect() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  handleSuggestClose() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  handleSelect(selected) {
    this.handleSuggestClose();
    this.props.onSelect(selected);
  }

  renderAutoSelect() {
    if (this.state.showModal) {
      return (
        <AutoSelectModal value={this.props.value} placeholder={this.props.placeholder}
          staticData={this.props.staticData || []} dataSourceCallback={this.props.dataCallback}
          handleClose={this.handleSuggestClose} handleOptionSelect={this.handleSelect}></AutoSelectModal>
      );
    } else {
      return (
        <TouchableHighlight>
          <Text style={{
              margin: (10, 20),
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              fontSize: 25
            }}
          onPress={this.onPressSelect}
          >
            {this.props.value || this.props.placeholder}
          </Text>
        </TouchableHighlight>
      );
    }
  }

  render() {
    return (
      <View>
        {this.renderAutoSelect()}
      </View>
    );
  }
}

AutoSelect.propTypes = {
  staticData: PropTypes.array,
  dataCallback: PropTypes.func,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
}

export default AutoSelect;
