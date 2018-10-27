import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './Styles';
import { Button, Logo, Form } from '../../common';

class SignUP extends Component {
  static navigationOptions = {
    header: null,
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('login')}
        >
          <Text style={styles.link}>Don't have an account?</Text>
        </TouchableOpacity>
        <View style={styles.buttonOuterView}>
          {/* //@TODO move styles away */}
          <Button title="Create Account" color="#FF5757" />
          {/* //@TODO move styles away */}
          <Button title="Continue with Facebook" color="#3A5998" />
        </View>
      </View>
    );
  }
}

export default SignUP;
