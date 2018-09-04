import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import gf from '@groceristar/groceristar-fetch/groceristar';
import uuid from 'uuidv4';

export default class DrawerComponent extends Component {
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
        showIngredients: false,
        allIngredientsByOneDepartment: [],
      }));
      return {
        allDepartments: newAllDepartmentsObject,
      };
    }
  }

  state = {};

  handleallIngredientsByOneDepartment = ({ departmentName, key }) => {
    const Ingredients = gf.getAllIngredientsByOneDepartment(
      `${departmentName}`
    );
    const IngredientsObject = Ingredients.map(item => ({
      key: uuid(),
      IngredientName: item,
    }));
    const allDepatment = [...this.state.allDepartments];
    const newAllDepatment = allDepatment.map(item => {
      if (item.key === key) {
        return {
          ...item,
          showIngredients: !item.showIngredients,
          allIngredientsByOneDepartment: IngredientsObject,
        };
      } else {
        return item;
      }
    });
    this.setState({
      allDepartments: newAllDepatment,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          onEndReached={this.handle}
          onEndReachedThreshold={0}
          data={this.state.allDepartments}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.handleallIngredientsByOneDepartment(item)}
            >
              <View style={{ backgroundColor: '#ffde9e', margin: 10 }}>
                <Text style={{ padding: 10, backgroundColor: '#f4b942' }}>
                  {item.departmentName}
                </Text>
                {item.showIngredients ? (
                  <View>
                    {/* <Text>Ingredient : </Text> */}
                    <FlatList
                      data={item.allIngredientsByOneDepartment}
                      renderItem={({ item }) => (
                        <View>
                          <Text style={{ padding: 5 }}>
                            {item.IngredientName}
                          </Text>
                        </View>
                      )}
                    />
                  </View>
                ) : null}
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
