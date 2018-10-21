import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

class AddValueToList extends Component {
  state = {
    addIngredientText: '',
  };

  handleText = text => {
    this.setState(
      {
        addIngredientText: text,
      },
      () => {
        if (this.props.handleOntextChange) {
          this.props.handleOntextChange(text);
        }
      }
    );
  };

  handleOnPress = () => {
    if (this.props.handleAddIngredients) {
      this.props.handleAddIngredients(
        this.state.addIngredientText,
        'NEW_VALUE'
      );
      this.setState({
        addIngredientText: '',
      });
    }
  };
  render() {
    return (
      <View style={styles.addIngredients}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.handleText(text)}
            value={this.state.addIngredientText}
            placeholder="Add Ingredient..."
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Icon
              containerStyle={styles.iconContainer}
              type="entypo"
              name="add-to-list"
              onPress={() => this.handleOnPress()}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default AddValueToList;

const styles = StyleSheet.create({
  inputContainer: { flex: 0.8 },
  buttonContainer: { flex: 0.2 },
  textInput: {
    marginLeft: 5,
    height: 35,
    borderColor: 'gray',
    borderWidth: 2,
    padding: 4,
  },
  iconContainer: { padding: 4 },
  addIngredients: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
