import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles';

const buttonComponent = (title, color) => (
  <View style={[styles.buttonView, { backgroundColor: color }]}>
    <Text style={[styles.textStyle]}>{title}</Text>
  </View>
);

const Button = ({ title, color, onPress }) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#fff', false)}
        useForeground
        onPress={() => {
          setTimeout(onPress, 500);
        }}
      >
        {buttonComponent(title, color)}
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      {buttonComponent(title, color)}
    </TouchableOpacity>
  );
};

export default Button;
