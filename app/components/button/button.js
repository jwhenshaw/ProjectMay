import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import defaultStyles from './styles';

class Button extends React.Component {

  props: {
    title: string,
    onPress: () => any,
    styles?: ?object,
    noDefaultStyles?: ?boolean,
    color?: ?string,
    accessibilityLabel?: ?string,
    disabled?: ?boolean,
    testID?: ?string,
  };

  static propTypes = {
    /**
     * Text to display inside the button
     */
    title: PropTypes.string.isRequired,
    /**
     * Text to display for blindness accessibility features
     */
    accessibilityLabel: PropTypes.string,
    /**
     * Styles from parent
     */
    styles: PropTypes.object,
    /**
     * Prevent default styling application
     */
    noDefaultStyles: PropTypes.bool,
    /**
     * Color of the text (iOS), or background color of the button (Android)
     */
    color: StyleSheet.ColorPropType,
    /**
     * If true, disable all interactions for this component.
     */
    disabled: PropTypes.bool,
    /**
     * Handler to be called when the user taps the button
     */
    onPress: PropTypes.func.isRequired,
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID: PropTypes.string,
  };

  render() {
    const {
      accessibilityLabel,
      color,
      styles,
      noDefaultStyles,
      onPress,
      title,
      disabled,
      testID,
    } = this.props;
    const buttonStyles = noDefaultStyles ? [styles.button] : [defaultStyles.button];
    const textStyles = noDefaultStyles ? [styles.text] : [defaultStyles.text];
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    if (color && Platform.OS === 'ios') {
      textStyles.push({color: color});
    } else if (color) {
      buttonStyles.push({backgroundColor: color});
    }
    if (disabled) {
      buttonStyles.push(noDefaultStyles ? styles.buttonDisabled : defaultStyles.buttonDisabled);
      textStyles.push(noDefaultStyles ? styles.textDisabled : defaultStyles.textDisabled);
    }
    const formattedTitle = Platform.OS === 'android' ? title.toUpperCase() : title;
    const accessibilityTraits = ['button'];
    if (disabled) {
      accessibilityTraits.push('disabled');
    }
    return (
      <Touchable
        accessibilityComponentType="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={accessibilityTraits}
        testID={testID}
        disabled={disabled}
        onPress={onPress}>
        <View style={buttonStyles}>
          <Text style={textStyles} disabled={disabled}>{formattedTitle}</Text>
        </View>
      </Touchable>
    );
  }
}

export default Button;
