import React, {Component} from 'react';
import {Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './index';
import Calendar from '../index';

/*
 * This class has rendering issues. Try optimising or moving native.
 * twas a good class :(
*/
class CalendarPeriod extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.renderCalendars(this.props.startDate, this.props.endDate)
    };
    console.log(this.state.dataSource);
  }

  props : {
    startDate: Date,
    endDate: Date,
    onSelectValidDate: () => {}
  }

  static propTypes = {
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired,
    onSelectValidDate: PropTypes.func.isRequired
  }

  _onPress = (date) => {
    console.log(date);
  };

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
    return this.getDateArray(startDate, endDate);
  }

  _renderItem = ({item}) => (
    <Calendar key={item.getTime()} startDate={item} onPressDate={() => {this._onPress}}></Calendar>
  );

  render() {
    return (
      <FlatList data={this.state.dataSource}
        renderItem={this._renderItem}
      />
    );
  }

}

export default CalendarPeriod;
