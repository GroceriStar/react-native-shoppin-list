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
  render() {
    return (
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
            onChangeText={text => this.handleText(text)}
            value={this.state.addIngredientText}
            placeholder="Add Ingredient..."
          />
        </View>
        <View style={{ flex: 0.2 }}>
          <TouchableOpacity>
            <Icon
              containerStyle={{ padding: 4 }}
              type="entypo"
              name="add-to-list"
              onPress={() => {
                if (this.props.handleAddIngredients) {
                  this.props.handleAddIngredients(
                    this.state.addIngredientText,
                    'NEW_VALUE'
                  );
                  this.setState({
                    addIngredientText: '',
                  });
                }
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default AddValueToList;

const styles = StyleSheet.create({
  addIngredients: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
