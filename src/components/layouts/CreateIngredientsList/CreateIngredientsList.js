import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import uuid from 'uuidv4';

import AddValueToList from '../AddValueToList/AddValueToList';
import { createNewGroceryList } from '../../../HelperFunctions';
import styles from './Styles';

let tempName = '';

class CreateIngredientsList extends Component {
  static navigationOptions = ({ navigation }) => {
    const groceryName = navigation.state.params.groceryName;
    tempName = groceryName;

    return {
      title: 'Create Ingredients List',
    };
  };

  state = {
    grocerName: tempName,
    deparmentName: [],
    localDeparmentName: [],
  };

  handleSendData = () => {
    const newGroceryCreate = {
      name: this.state.grocerName,
      departments: this.state.deparmentName,
    };

    createNewGroceryList(newGroceryCreate);
    this.props.navigation.state.params.refresh();
    this.props.navigation.navigate('grocery', {
      newDataApperared: true,
    });
  };

  handleAddIngredients = (text, TYPE) => {
    const shouldPass = text.split(' ').filter(item => {
      if (/^[0-9a-zA-Z]+$/.test(item)) {
        return true;
      }
      return false;
    });
    if (shouldPass.length > 0) {
      const oldValue = [...this.state.deparmentName];
      const localOldValue = [...this.state.localDeparmentName];
      const textFound = oldValue.find(item => item === text);

      if (typeof textFound === 'undefined') {
        localOldValue.push({
          key: uuid(),
          name: text,
        });
        oldValue.push(text);
        this.setState({
          deparmentName: oldValue,
          localDeparmentName: localOldValue,
        });
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.saveButtonContainer}
          onPress={this.handleSendData}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>

        <View style={styles.groceryTable}>
          <View style={styles.tableKey}>
            <Text style={styles.tableKeyText}>Grocery Name</Text>
          </View>
          <View style={styles.tableValue}>
            <Text style={styles.tableValueText}>{this.state.grocerName}</Text>
          </View>
        </View>
        <AddValueToList handleAddIngredients={this.handleAddIngredients} />
        <View style={styles.ingredientsTable}>
          <View style={styles.ingredientsKey}>
            <Text style={styles.ingredientsKeyText}>Ingredients Name</Text>
          </View>

          {this.state.localDeparmentName.length !== 0 ? (
            <ScrollView>
              <FlatList
                data={this.state.localDeparmentName}
                renderItem={({ item }) => (
                  <View style={styles.localDeptContainer}>
                    <Text style={styles.localDeptContainerText}>
                      {item.name}
                    </Text>
                  </View>
                )}
              />
            </ScrollView>
          ) : null}
        </View>
      </View>
    );
  }
}
export default CreateIngredientsList;
