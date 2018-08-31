import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { Button, Logo, Form } from '../common';

class SignUP extends Component {
	static navigationOptions = {
		header: null,
		title: 'Home'
	};

	render() {
		return (
			<View style={styles.container}>
				<Logo />
				<Form />
				<TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
					<Text style={styles.link}>Don't have an account?</Text>
				</TouchableOpacity>
				<View style={styles.buttonOuterView}>
					<Button title="Create Account" color="#FF5757" />
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
		paddingTop: 25,
		paddingRight: 25,
		paddingLeft: 25,

		justifyContent: 'center'
	},
	buttonOuterView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	link: {
		textDecorationLine: 'underline',
		color: '#4985FF',
		alignSelf: 'center',
		marginTop: 5
	}
});

export default SignUP;
