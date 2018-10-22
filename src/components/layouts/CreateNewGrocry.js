import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { Button } from 'react-native-elements';

const { height: vh, width: vw } = Dimensions.get('window');

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
          ]{' '}
          <View style={{ flex: 1, paddingTop: 125, opacity: 1 }}>
            <View style={{ alignItems: 'center' }}>
              ]{' '}
              <Text style={{ fontSize: 30, fontWeight: '400' }}>
                CreateNewGrocery
              </Text>
            </View>
            {/* //@TODO move styles away */}
            <View style={{ paddingTop: 15 }}>
              <TextInput
                maxLength={35}
                style={styles.InputStyle}
                onChangeText={text => this.setState({ groceryName: text })}
                value={this.state.groceryName}
              />
            </View>
            {/* //@TODO move styles away */}
            <View style={{ paddingTop: 120 }}>
              {/* //@TODO move styles away */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: { opacity: 0.5, width: vw, height: vh },
  InputStyle: {
    color: '#000000',
    margin: 10,
    paddingLeft: 8,
    fontSize: 20,
    fontWeight: '300',
    borderRadius: 6,
    height: 50,
    backgroundColor: '#ffebcc',
    borderColor: '#ff9900',
    borderWidth: 4,
  },
});
