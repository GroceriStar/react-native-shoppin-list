import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { createStackNavigator } from 'react-navigation';
import { getAllGrocery } from '../../HelperFunctions';
import GroceryList from '../layouts/GroceryList';

class Grocery extends Component {
  static navigationOptions = {
    header: null,
    title: 'Grocery',
    tabBarButtonComponent: TouchableBounce,
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          onEndReached={this.handle}
          onEndReachedThreshold={0}
          data={getAllGrocery()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('groceryList', {
                  departmentNameArray: item.IngredientName,
                })
              }
            >
              <View style={{ backgroundColor: '#ffde9e', margin: 10 }}>
                <Text style={{ padding: 10, backgroundColor: '#f4b942' }}>
                  {item.IngredientName.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 45,
    paddingLeft: 30,
  },
});

export default createStackNavigator(
  {
    grocery: { screen: Grocery },
    groceryList: { screen: GroceryList },
  },
  {
    initialRouteName: 'grocery',
  }
);
