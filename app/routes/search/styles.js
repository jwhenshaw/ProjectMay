import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  departure: {
    flex: 1
  },
  destination: {
    flex: 1
  },
  departureDateSelector: {
    flex: 1
  }
});

const departureDateStyles = StyleSheet.create({
  dateDisplay: {
    flex: 1
  },
  modalContainer: {
    flex: 1
  },
  modalMainContainer: {
    flex: 0.90,
    backgroundColor: 'white',
    marginTop: 0,
    marginRight: 15,
    marginBottom: 15,
    marginLeft: 15
  },
  modalHeader: {
    minHeight: 50,
    flex: 0.05,
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  modelCloseTouch: {
    flex: 1
  },
  modalClose: {
    alignSelf: 'flex-start',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export {departureDateStyles};
export default styles;
