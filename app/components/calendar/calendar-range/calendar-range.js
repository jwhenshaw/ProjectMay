import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './index';
import Calendar from '../index';

/*
 * It appears this has render issues as well which suggests it must be the
 * Calendar component. But not sure how to improve that...
 */
class CalendarRange extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dateArray: this.getDateArray(this.props.startDate, this.props.endDate),
      dateArrIndex: 0
    };
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

  nextDate = () => {
    this.setState({
      dateArrIndex: this.state.dateArrIndex+1
    });
  };

  prevDate = () => {
    this.setState({
      dateArrIndex: this.state.dateArrIndex-1
    });
  };

  render() {
    const date = this.state.dateArray[this.state.dateArrIndex];
    console.log(date);
    return (
      <View>
        <View></View>
        <View>
          <Calendar key={date.getTime()} startDate={date} onPressDate={this.props.onSelectValidDate}/>
        </View>
      </View>
    );
  }

}

export default CalendarRange;
