import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.departmentNameObject}
          renderItem={info => (
            <View>
              <Text style={{ fontSize: 25, color: 'white', padding: 5 }}>
                 {info.item.departmentName}
              </Text>
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
