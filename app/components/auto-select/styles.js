import {StyleSheet} from 'react-native';

var mainSidepacing = 15;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1
  },
  modalMainContainer: {
    flex: 0.90,
    backgroundColor: 'white',
    marginTop: 0,
    marginRight: mainSidepacing,
    marginBottom: 15,
    marginLeft: mainSidepacing,
  },
  modalHeader: {
    minHeight: 50,
    flex: 0.05,
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  modelCloseTouch: {
    flex:1
  },
  modalClose: {
    alignSelf: 'flex-start',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default styles;
