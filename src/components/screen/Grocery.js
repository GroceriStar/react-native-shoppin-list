import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

import { getAllGrocery } from '../../HelperFunctions';
import GroceryList from '../layouts/GroceryList';
import CreateNewGrocery from '../layouts/CreateNewGrocry';
import CreateIngredientsList from '../layouts/CreateIngredientsList';

let newData = getAllGrocery();

class Grocery extends Component {
  static navigationOptions = () => {
    newData = getAllGrocery();
    return {
      header: null,
      title: 'Grocery',
    };
  };

  state = {
    groceryList: newData,
  };

  refreshFunction = () => {
    this.setState({
      groceryList: getAllGrocery(),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Button
            large
            onPress={() =>
              this.props.navigation.navigate('createNewGrocery', {
                refresh: this.refreshFunction,
              })
            }
            icon={{ name: 'local-grocery-store', type: 'materialIcons' }}
            title="CREATE NEW GROCERY"
          />
        </View>
        <FlatList
          onEndReached={this.handle}
          onEndReachedThreshold={0}
          data={this.state.groceryList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('groceryList', {
                  departmentNameArray: item.IngredientName,
                })
              }
            >
             {/* //@TODO move styles away */}
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
    createNewGrocery: { screen: CreateNewGrocery },
    createIngredientsList: { screen: CreateIngredientsList },
  },
  {
    initialRouteName: 'grocery',
    title: 'Grocery',
    headerMode: 'screen',
  }
);
