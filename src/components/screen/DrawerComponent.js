import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { createStackNavigator } from 'react-navigation';

import { getAllDepartmentList } from '../../HelperFunctions';
import IngredientDetails from '../layouts/IngredientDetails/IngredientDetails';

class DrawerComponent extends Component {
  static navigationOptions = {
    header: null,
    title: 'Drawer',
    tabBarButtonComponent: TouchableBounce,
  };

  static getDerivedStateFromProps(props, state) {
    if (!state.allDepartments) {
      return {
        allDepartments: getAllDepartmentList(),
      };
    }
  }

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          onEndReached={this.handle}
          onEndReachedThreshold={0}
          data={this.state.allDepartments}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Ingredients', {
                  departmentName: item.departmentName,
                })
              }
            >
              <View style={{ backgroundColor: '#ffde9e', margin: 10 }}>
                <Text style={{ padding: 10, backgroundColor: '#f4b942' }}>
                  {item.departmentName}
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
    Deparment: { screen: DrawerComponent },
    Ingredients: { screen: IngredientDetails },
  },
  {
    initialRouteName: 'Deparment',
  }
);
