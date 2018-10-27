import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import uuid from 'uuidv4';
import underscore from 'underscore';
import styles from './Styles';
import { getAllIngredientsList } from '../../../HelperFunctions';
import AddValueToList from '../AddValueToList/AddValueToList';

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
        <AddValueToList
          handleAddIngredients={this.handleAddIngredients}
          handleOntextChange={this.handleOntextChange}
        />
        {this.state.isAdding ? (
          <View>
            <FlatList
              data={this.state.searchFound}
              renderItem={({ item }) => (
                <View style={[styles.addOldIngrdients]}>
                  <View style={styles.ingredientName}>
                    <Text>{item.IngredientName}</Text>
                  </View>
                  <View style={styles.iconContainer}>
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
