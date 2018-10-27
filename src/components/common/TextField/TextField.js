import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './Styles';

const TextField = ({ text }) => (
  <View>
    <Text style={styles.textStyle}>{text}</Text>
    <View style={styles.inputContainer}>
      <TextInput underlineColorAndroid="transparent" style={styles.fontSize} />
    </View>
  </View>
);

export default TextField;
