import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Button from '../button/index';
import {range} from 'lodash';
import {styles} from './index';

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  renderWeekdays() {
    let weekdays = [
      "sun",
      "mon",
      "tue",
      "wed",
      "thu",
      "fri",
      "sat"
    ];
    return weekdays.map((day) => {
      return (
        <Text key={day} style={styles.calendar_weekdays_text}>{day.toUpperCase()}</Text>
      );
    });
  }

  renderWeeks(start, end) {
    let days = range(start, end);
    let groupedDays = this.getWeeksArray(days);
    return groupedDays.map((weekDays, index) => {
      return (
        <View key={index} style={styles.week_days}>
          {this.renderDays(weekDays)}
        </View>
      );
    });
  }

  renderDays(weekDays) {
    return weekDays.map((day, index) => {
      return (<Button title={day.toString()} key={index} color={styles.day.color} styles={{
        button: styles.day,
        text: styles.day_text
      }} noDefaultStyles={true}/>);
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
    return weeks_r;
  }

  render() {
    return (
      <View style={styles.calender_container}>
        <View style={styles.calendar_header}>
          <View style={styles.calendar_header_item}>
            <Text style={styles.calendar_header_text}>November</Text>
          </View>
          <View style={styles.calendar_header_item}>
            <Text style={styles.calendar_header_text}>2013</Text>
          </View>
        </View>
        <View style={styles.calendar_weekdays}>
          {this.renderWeekdays()}
        </View>
        <View style={styles.calendar_days}>
          {this.renderWeeks(1, 31)}
        </View>
      </View>
    );
  }
}

export default Calendar;
