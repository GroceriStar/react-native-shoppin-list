import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import Main from './components/layouts';

export default () => (
  <View style={styles.mainContainer}>
    <StatusBar barStyle="dark-content" />
    <Main />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
});
