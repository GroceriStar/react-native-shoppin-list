import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import gf from '@groceristar/groceristar-fetch/groceristar';
import uuid from 'uuidv4';

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
    const Ingredients = gf.getAllIngredientsByOneDepartment(`${tempName}`);
    const IngredientsObject = Ingredients.map(item => ({
      key: uuid(),
      IngredientName: item,
    }));

    return {
      departmentIngredients: IngredientsObject,
    };
  }
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.departmentIngredients}
          renderItem={info => (
            <View>
              <Text style={{ fontSize: 25, color: 'white', padding: 5 }}>
                {info.index + 1} - {info.item.IngredientName}
              </Text>
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
