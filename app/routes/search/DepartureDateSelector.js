import React, {Component} from 'react';
import {
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { departureDateStyles as styles } from './styles';
import {CalendarPeriod} from '../../components/calendar/index';

class DepartureDateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
      modal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  props : {
    date: Date,
    startDate: Date,
    endDate: Date,
    onSelect: () => {}
  }

  static propTypes = {
    date: PropTypes.object.isRequired,
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  renderModal() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal onRequestClose={this.toggleModal} transparent={true} style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableHighlight onPress={this.toggleModal}>
              <Text style={styles.modalClose}>&times;</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.modalMainContainer}>
            <CalendarPeriod startDate={this.props.startDate} endDate={this.props.endDate} onSelectValidDate={this.props.onSelect}></CalendarPeriod>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    );
  }

  renderTextDisplay() {
    return (
      <TouchableHighlight style={{
        flex: 1
      }} onPress={this.toggleModal}>
        <Text style={{
          flex: 1
        }}>{this.state.date.getDate()}/{this.state.date.getMonth() + 1}/{this.state.date.getFullYear()}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    if (this.state.modal) {
      return this.renderModal();
    } else {
      return this.renderTextDisplay();
    }
  }

}

export default DepartureDateSelector;
