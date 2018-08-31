import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextField = ({ text }) => (
	<View>
		<Text style={styles.textStyle}>{text}</Text>
		<View style={styles.inputContainer}>
			<TextInput underlineColorAndroid="transparent" style={{ fontSize: 17 }} />
		</View>
	</View>
);

const styles = StyleSheet.create({
	textStyle: {
		color: '#000'
	},
	inputContainer: {
		width: '100%',
		height: 47,
		borderRadius: 3,
		borderWidth: 1.5,
		justifyContent: 'center',
		paddingLeft: 10,
		paddingRight: 10
	}
});

export default TextField;
