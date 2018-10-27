/*eslint-disable no-underscore-dangle*/
import React, { Component } from 'react';
import { View, TextInput, Button, FlatList, StatusBar } from 'react-native';
import styles from './Styles';
import ListItems from '../../common';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      dataSource: [],
    };
    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.deleteOnPress = this.deleteOnPress.bind(this);
  }

  textChangeHandler = value => {
    const inputValue = value;
    this.setState(() => ({
      inputValue,
    }));
  };

  addOnPress = () => {
    if (!this.state.inputValue) {
      return;
    }
    const textArray = this.state.dataSource;
    textArray.push(this.state.inputValue);
    this.setState(() => ({
      dataSource: textArray,
      inputValue: '',
    }));
  };

  deleteOnPress = id => {
    this.setState(a => {
      const newItem = a.dataSource.filter((item, i) => parseInt(id, 10) !== i);
      return {
        dataSource: newItem,
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.formView}>
          <TextInput
            style={styles.inputForm}
            value={this.state.inputValue}
            onChangeText={this.textChangeHandler}
            placeholder="Input todo"
          />
          <Button title="Add" onPress={this.addOnPress} />
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.dataSource}
          renderItem={({ item, index }) => (
            <ListItems
              rowData={item}
              onPress={() => this.deleteOnPress(index)}
            />
          )}
          keyExtractor={(item, index) => item}
        />
      </View>
    );
  }
}
