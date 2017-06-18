import React, {Component} from 'react';
import {
  Button,
  Keyboard,
  ListView,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles'

class AutoSelectModal extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      listDataSource: this.ds.cloneWithRows(this.props.staticData)
    };

    this.handleInput = this.handleInput.bind(this);
    this.setList = this.setList.bind(this);
    this.onPressOption = this.onPressOption.bind(this);
  }

  onPressOption(option) {
    this.props.handleOptionSelect(option);
  }

  handleInput(input) {
    var listData = [];
    if (input.length > 1) {
      if (this.props.staticData.length > 0) { // try find in pre determined list
        let i = 0;
        for (i; i < this.props.staticData.length; i++) {
          if (this.props.staticData[i].label.toLowerCase().indexOf(input) > -1) {
            listData.push(this.props.staticData[i]);
          }
        }
      }
      if (this.props.dataSourceCallback && input.length > 2) {
        this.props.dataSourceCallback(input).then((list) => {
          this.setList(list.concat(listData));
        });
      }
    } else {
      listData = this.props.staticData;
    }
    this.setList(listData);
  }

  setList(listData) {
    listData.sort((l1, l2) => {
      var label1 = l1.label.toLowerCase(),
        label2 = l2.label.toLowerCase();
      if (label1 < label2) //sort string ascending
        return -1;
      if (label1 > label2)
        return 1;
      return 0; //default return value (no sorting)
    });
    this.setState({listDataSource: this.ds.cloneWithRows(listData)});
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal onRequestClose={this.props.handleClose} transparent={true} style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableHighlight onPress={this.props.handleClose}>
              <Text style={styles.modalClose}>&times;</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.modalMainContainer}>
            <TextInput onChangeText={(text) => {
              this.handleInput(text)
            }} placeholder={this.props.placeholder}>
              {this.props.value}
            </TextInput>
            <ListView enableEmptySections={true} dataSource={this.state.listDataSource} renderRow={(option) => {
              return (
                <Button title={option.label} onPress={() => {
                  this.onPressOption(option)}}></Button>
              );
            }}/>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    );
  }
}
AutoSelectModal.propTypes = {
  staticData: PropTypes.array,
  dataSourceCallback: PropTypes.func,
  handleClose: PropTypes.func.isRequired,
  handleOptionSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default AutoSelectModal;
