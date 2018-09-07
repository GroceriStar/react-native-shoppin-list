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

import IngredientDetails from './IngredientDetails';
import gf from '@groceristar/groceristar-fetch/groceristar';
import uuid from 'uuidv4';

class DrawerComponent extends Component {
  static navigationOptions = {
    header: null,
    title: 'Drawer',
    tabBarButtonComponent: TouchableBounce,
  };

  static getDerivedStateFromProps(props, state) {
    if (!state.allDepartments) {
      const newAllDepartments = gf.getAllDepartments();
      const newAllDepartmentsObject = newAllDepartments.map(item => ({
        key: uuid(),
        departmentName: item,
      }));
      return {
        allDepartments: newAllDepartmentsObject,
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
