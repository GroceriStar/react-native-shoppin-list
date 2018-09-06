import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Button, Logo, Form } from '../common';

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
          <Button
            title="Login"
            color="#FF5757"
            onPress={() => this.props.navigation.navigate('tab')}
          />
          <Button title="Continue with Facebook" color="#3A5998" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    padding: 25,
    justifyContent: 'center',
  },
  buttonOuterView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#4985FF',
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default Login;
