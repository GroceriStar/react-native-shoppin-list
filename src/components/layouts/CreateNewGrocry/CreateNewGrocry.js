import React, { Component } from 'react';
import { View, Text, TextInput, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './Styles';

//@TODO rename file and make sure it works fine
class CreateNewGrocery extends Component {
  static navigationOptions = {
    title: 'New Grocery',
  };
  state = {
    groceryName: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri:
              'http://www.finehomesandliving.com/San-Diego-Grocery-Delivery-Services/groceries.jpg',
          }}
        >
          <View style={{ flex: 1, paddingTop: 125, opacity: 1 }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 30, fontWeight: '400' }}>
                CreateNewGrocery
              </Text>
            </View>
            <View style={{ paddingTop: 15 }}>
              <TextInput
                maxLength={35}
                style={styles.InputStyle}
                onChangeText={text => this.setState({ groceryName: text })}
                value={this.state.groceryName}
              />
            </View>
            <View style={{ paddingTop: 120 }}>
              <Button
                large
                onPress={() => {
                  if (this.state.groceryName.length !== 0) {
                    this.props.navigation.navigate('createIngredientsList', {
                      groceryName: this.state.groceryName,
                      refresh: this.props.navigation.state.params.refresh,
                    });
                  }
                }}
                backgroundColor="#ffad33"
                icon={{ name: 'navigate-next', type: 'materialIcons' }}
                title="NEXT"
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default CreateNewGrocery;
