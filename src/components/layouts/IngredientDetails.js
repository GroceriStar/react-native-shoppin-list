import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';

import { getAllIngredientsList } from '../../HelperFunctions';

let tempName = '';
export default class IngredientDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const departmentName = navigation.state.params.departmentName;
    tempName = departmentName;
    return {
      title: departmentName,
      drawerLabel: '',
    };
  };
  static getDerivedStateFromProps() {
    return {
      departmentIngredients: getAllIngredientsList(tempName),
    };
  }
  state = {};

  handleCheck = ingredientName => {
    const oldState = [...this.state.departmentIngredients];
    const newState = oldState.map(item => {
      if (item.IngredientName === ingredientName) {
        item.isChecked = !item.isChecked;
        return item;
      }
      return item;
    });

    this.setState({
      departmentIngredients: newState,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.departmentIngredients}
          renderItem={info => (
            <View>
              <CheckBox
                title={info.item.IngredientName}
                checked={info.item.isChecked}
                onPress={() => this.handleCheck(info.item.IngredientName)}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(242, 175, 82,0.8)',
    paddingTop: 15,
    paddingLeft: 30,
  },
});
