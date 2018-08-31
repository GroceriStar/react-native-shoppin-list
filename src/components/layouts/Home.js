import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';

// import gf from '@groceristar/groceristar-fetch';
// import Icon from '@expo/vector-icons/Entypo';

export default class Home extends Component {
	static navigationOptions = {
		header: null,
		title: 'Home',
		tabBarButtonComponent: TouchableBounce
	};
	render() {
		return (
			<View style={styles.container}>
				<Text style={[iOSUIKit.largeTitleEmphasized, styles.mainText]}>Groceristar</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 45,
		paddingLeft: 30
	},
	mainText: {
		fontSize: 40,
		marginTop: 20
	}
});
