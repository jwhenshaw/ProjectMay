import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CalendarPeriod} from '../../components/calendar/index';

class ReturnDateSelector extends Component {
  constructor(props) {
    super(props);
  }

  props : {
    startDate: Date,
    endDate: Date,
    onSelect: () => {}
  }

  static propTypes = {
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  render() {
    return (
      <CalendarPeriod startDate={this.props.startDate} endDate={this.props.endDate} onSelectValidDate={this.props.onSelect}></CalendarPeriod>
    );
  }

}

export default ReturnDateSelector;
