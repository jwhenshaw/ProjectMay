import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './index';
import Calendar from '../index';

class CalendarPeriod extends Component {

  constructor(props) {
    super(props);
  }

  props : {
    startDate: Date,
    endDate: Date
  }

  static propTypes = {
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired,
    onSelectValidDate: PropTypes.func.isRequired
  }

  /**
   * Produce aray of dates, monthly intervals, from start date to end date.
   * each date is the first of the month, excluding the start date
   */
  getDateArray(startDate, endDate) {
    var currentDate = new Date(startDate.getTime()),
      startMonth = currentDate.getMonth(),
      length = endDate.getMonth() - startMonth
      dateArray = [new Date(currentDate.getTime())];
    length += ((endDate.getFullYear() - currentDate.getFullYear()) * 12);
    currentDate.setDate(1);
    for(let i = 0; i < length; i++) {
      dateArray.push(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    }
    return dateArray;
  }

  renderCalendars(startDate, endDate) {
    var dateArray = this.getDateArray(startDate, endDate);
    console.log(dateArray);
    return dateArray.map((date) => {
      return (
        <Calendar key={date.getTime()} startDate={date} onPressDate={this.onPressDate}></Calendar>
      );
    });
  }

  onPressDate(date) {
    console.log(date);
  }

  render() {
    return (
      <ScrollView>
        {this.renderCalendars(this.props.startDate, this.props.endDate)}
      </ScrollView>
    );
  }

}

export default CalendarPeriod;
