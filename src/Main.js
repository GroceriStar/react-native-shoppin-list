import React from 'react';
import { StatusBar, View } from 'react-native';
import Main from './components/layouts';

export default () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" />
    <Main />
  </View>
);
