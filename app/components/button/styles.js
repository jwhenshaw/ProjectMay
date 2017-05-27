import { StyleSheet, Platform } from 'react-native';

// Material design blue from https://material.google.com/style/color.html#color-color-palette
let defaultBlue = '#2196F3';
if (Platform.OS === 'ios') {
  // Measured default tintColor from iOS 10
  defaultBlue = '#0C42FD';
}

const defaultStyles = StyleSheet.create({
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      backgroundColor: defaultBlue,
      borderRadius: 2,
    },
  }),
  text: Platform.select({
    ios: {
      color: defaultBlue,
      textAlign: 'center',
      padding: 8,
      fontSize: 18,
    },
    android: {
      textAlign: 'center',
      color: 'white',
      padding: 8,
      fontWeight: '500',
    },
  }),
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: '#dfdfdf',
    }
  }),
  textDisabled: Platform.select({
    ios: {
      color: '#cdcdcd',
    },
    android: {
      color: '#a1a1a1',
    }
  }),
});
export default defaultStyles;
