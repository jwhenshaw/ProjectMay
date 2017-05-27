import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  calender_container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'flex-start'
  },
  calendar_header: {
    flexDirection: 'row'
  },
  calendar_header_item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 40,
    paddingLeft: 40
  },
  calendar_header_text: {
    fontWeight: 'bold',
    fontSize: 20
  },
  calendar_weekdays: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  calendar_weekdays_text: {
    flex: 1,
    color: '#C0C0C0',
    textAlign: 'center',
    paddingTop: 17,
    margin: 2
  },
  calendar_days: {
    flex: 1
  },
  week_days: {
    flexDirection: 'row'
  },
  day: {
    flex: 1,
    paddingTop: 17,
    paddingBottom: 17,
    margin: 2
  },
  day_text: {
    textAlign: 'center',
    fontSize: 15
  },
  day_palce_holder: {
    flex: 1,
    paddingTop: 17,
    paddingBottom: 17,
    margin: 2
  },
  day_place_holder_text: {
    textAlign: 'center',
    fontSize: 15
  }
});

export default styles;
