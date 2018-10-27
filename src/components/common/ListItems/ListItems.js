import React from 'react';
import { View, Text, Button } from 'react-native';
import { human } from 'react-native-typography';
import styles from './Styles';

const ListItems = ({ rowData, onPress }) => (
  <View style={styles.todoItem}>
    <Text style={[styles.todoText, human.footnote]}>{rowData}</Text>
    <Button title="Delete" onPress={onPress} style={styles.deleteButton} />
  </View>
);

export default ListItems;
