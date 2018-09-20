import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';

import { getAllGroceryDepartment } from '../../HelperFunctions';

let tempName = '';
class GroceryList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { departments, name } = navigation.state.params.departmentNameArray;

    tempName = departments;
    return {
      title: name,
      drawerLabel: '',
    };
  };

  static getDerivedStateFromProps() {
    return {
      departmentNameObject: getAllGroceryDepartment(tempName),
    };
  }
  state = {};

  handleCheck = departmentName => {
    const oldState = [...this.state.departmentNameObject];
    const newState = oldState.map(item => {
      if (item.departmentName === departmentName) {
        item.isChecked = !item.isChecked;
        return item;
      }
      return item;
    });

    this.setState({
      departmentNameObject: newState,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.departmentNameObject}
          renderItem={info => (
            <View>
              <CheckBox
                title={info.item.departmentName}
                checked={info.item.isChecked}
                onPress={() => this.handleCheck(info.item.departmentName)}
              />
            </View>
          )}
        />
      </View>
    );
  }
}
export default GroceryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(242, 175, 82,0.8)',
    paddingTop: 15,
    paddingLeft: 30,
  },
});
