import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../button/index';
import {range} from 'lodash';
import {styles} from './index';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this._weekdays = [
      "sun",
      "mon",
      "tue",
      "wed",
      "thu",
      "fri",
      "sat"
    ];
    this._months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  }

  props : {
    startDate: Date,
    onPressDate: () => any
  }

  static propTypes = {
    startDate: PropTypes.object.isRequired,
    onPressDate: PropTypes.func.isRequired
  };

  /**
   * index of day of the week, sun = 0, mon = 1 ..etc
   * return int
   */
  getStartDayIndex() {
<<<<<<< HEAD
    console.log(`startDate: ${this.props.startDate}`);
=======
>>>>>>> c6151ca7730c092a631e8f0232c8c12fa22573d9
    return this.props.startDate.getDay();
  }

  getEndDate() {
    var date = this.props.startDate,
      y = date.getFullYear(),
      m = date.getMonth();
    return new Date(y, m+1, 0);
  }

  /**
   * index of month of the year, jan = 0, feb = 1 ..etc
   * return int
   */
  getMonthIndex() {
    return this.props.startDate.getMonth();
  }

  getMonth() {
    return this._months[this.getMonthIndex()]
  }

  getYear() {
    return this.props.startDate.getFullYear();
  }

  renderWeekdays() {
    return this._weekdays.map((day) => {
      return (
        <Text key={day} style={styles.calendar_weekdays_text}>{day.toUpperCase()}</Text>
      );
    });
  }

  renderWeeks(startDayIndex, start, end) {
    var offset = [];
    if (start != 1) { //calc offset
      offset = Array(startDayIndex).join(".").split(".");
    }
    let days = range(start, end+1);
    days = offset.concat(days);
    let groupedDays = this.getWeeksArray(days);
    return groupedDays.map((weekDays, index) => {
      return (
        <View key={index} style={styles.week_days}>
          {this.renderDays(weekDays)}
        </View>
      );
    });
  }

  handleDayPress(value) {
    var date = this.props.startDate;
    date.setDate(value);
    this.props.onPressDate(date);
  }

  renderDays(weekDays) {
    return weekDays.map((day, index) => {
      const displayButton = <Button title={ day.toString() }
        key={ index }
        color={ "#e3dddd" }
        styles={{button: styles.day, text: styles.day_text}}
        noDefaultStyles={true}
        onPress={() => this.handleDayPress(day)}
        />;
      const placeHolder = <Button title={day.toString()}
        key={index}
        color={ '#c9c9c9' }
        styles={{button: styles.day_palce_holder, text: styles.day_place_holder_text}}
        noDefaultStyles={true}
        disabled={true}
        onPress={() => {}}
        />;
      return (
        day.toString() === "" ? placeHolder : displayButton
      );
    });
  }

  getWeeksArray(days) {
    var weeks_r = [];
    var seven_days = [];
    var count = 0;
    days.forEach((day) => {
      count += 1;
      seven_days.push(day);
      if (count == 7) {
        weeks_r.push(seven_days)
        count = 0;
        seven_days = [];
      }
    });
    if (seven_days.length < 7) { // gather the left overs
      weeks_r.push(seven_days.concat(Array(7 - seven_days.length).join(".").split(".")));
    }
    return weeks_r;
  }

  render() {
    return (
      <View style={styles.calender_container}>
        <View style={styles.calendar_header}>
          <View style={styles.calendar_header_item}>
            <Text style={styles.calendar_header_text}>{this.getMonth()}</Text>
          </View>
          <View style={styles.calendar_header_item}>
            <Text style={styles.calendar_header_text}>{this.getYear()}</Text>
          </View>
        </View>
        <View style={styles.calendar_weekdays}>
          {this.renderWeekdays()}
        </View>
        <View style={styles.calendar_days}>
          {this.renderWeeks(this.props.startDate.getDate(), this.getEndDate().getDate())}
        </View>
      </View>
    );
  }
}

export default Calendar;
