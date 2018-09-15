import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import uuid from 'uuidv4';
import underscore from 'underscore';

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
  state = {
    departmentIngredients: getAllIngredientsList(tempName),
    createdIngredients: [],
    isAdding: false,
    searchFound: [],
    addIngredientText: '',
  };

  handleCheck = ingredientName => {
    const oldState = [...this.state.createdIngredients];
    const newState = oldState.map(item => {
      if (item.IngredientName === ingredientName) {
        item.isChecked = !item.isChecked;
        return item;
      }
      return item;
    });

    this.setState({
      createdIngredients: newState,
    });
  };

  handleOntextChange = text => {
    if (text === '') {
      this.setState({
        isAdding: false,
        addIngredientText: '',
        searchFound: [],
      });
    } else {
      const oldValue = [...this.state.departmentIngredients];
      const newSearchedValue = oldValue.filter(item => {
        const isInclude = item.IngredientName.includes(text);
        if (isInclude) {
          return true;
        }
        return false;
      });
      this.setState({
        isAdding: true,
        addIngredientText: text,
        searchFound: newSearchedValue,
      });
    }
  };

  handleAddIngredients = (item, position) => {
    if (position === 'OLD_VALUE') {
      const items = [item, ...this.state.createdIngredients];

      const ingredientNames = underscore.pluck(
        this.state.createdIngredients,
        'IngredientName'
      );
      const foundName = ingredientNames.filter(itemName => {
        if (itemName === item.IngredientName) {
          return true;
        }
        return false;
      });
      if (foundName.length === 0) {
        this.setState({
          createdIngredients: items,
          addIngredientText: '',
          isAdding: false,
        });
      }
    } else if (position === 'NEW_VALUE' && item !== '') {
      const creatIngre = {
        key: uuid(),
        IngredientName: item,
        isChecked: false,
      };
      const oldValue = [creatIngre, ...this.state.createdIngredients];
      const ingredientNames = underscore.pluck(
        this.state.createdIngredients,
        'IngredientName'
      );
      const foundName = ingredientNames.filter(itemName => {
        if (itemName === item) {
          return true;
        }

        return false;
      });
      if (foundName.length === 0) {
        this.setState({
          createdIngredients: oldValue,
          addIngredientText: '',
          isAdding: false,
        });
      }
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.addIngredients}>
          <View style={{ flex: 0.8 }}>
            <TextInput
              style={{
                marginLeft: 5,
                height: 35,
                borderColor: 'gray',
                borderWidth: 2,
                padding: 4,
              }}
              onChangeText={text => this.handleOntextChange(text)}
              value={this.state.addIngredientText}
              placeholder="Add Ingredient..."
            />
          </View>
          <View style={{ flex: 0.2 }}>
            <TouchableOpacity>
              <Icon
                type="entypo"
                name="add-to-list"
                onPress={() =>
                  this.handleAddIngredients(
                    this.state.addIngredientText,
                    'NEW_VALUE'
                  )
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        {this.state.isAdding ? (
          <View>
            <FlatList
              data={this.state.searchFound}
              renderItem={({ item }) => (
                <View style={[styles.addOldIngrdients]}>
                  <View
                    style={{
                      flex: 0.9,
                      marginLeft: 10,
                      borderRightWidth: 2,
                      borderRightColor: '#000',
                    }}
                  >
                    <Text>{item.IngredientName}</Text>
                  </View>
                  <View
                    style={{
                      flex: 0.1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon
                      type="MaterialIcons"
                      name="add"
                      onPress={() =>
                        this.handleAddIngredients(item, 'OLD_VALUE')
                      }
                    />
                  </View>
                </View>
              )}
            />
          </View>
        ) : (
          <View style={styles.container}>
            <FlatList
              data={this.state.createdIngredients}
              renderItem={({ item }) => (
                <View>
                  <CheckBox
                    title={item.IngredientName}
                    checked={item.isChecked}
                    onPress={() => this.handleCheck(item.IngredientName)}
                  />
                </View>
              )}
            />
          </View>
        )}
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
  addIngredients: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  addOldIngrdients: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderColor: '#657287',
  },
});
