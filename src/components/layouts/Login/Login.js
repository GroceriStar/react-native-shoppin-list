import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';

import { Button, Logo, Form } from '../../common';

class Login extends Component {
  static navigationOptions = {
    header: null,
    title: 'Login',
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form Login />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('signUp')}
        >
          <Text style={styles.link}>Already have an account?</Text>
        </TouchableOpacity>
        <View style={styles.buttonOuterView}>
          {/* //@TODO move styles away */}
          <Button
            title="Login"
            color="#FF5757"
            onPress={() => this.props.navigation.navigate('tab')}
          />
          {/* //@TODO move styles away */}
          <Button title="Continue with Facebook" color="#3A5998" />
        </View>
      </View>
    );
  }
}

export default Login;
