import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import gf from '@groceristar/groceristar-fetch/groceristar';

export default class DrawerComponent extends Component {
	static navigationOptions = {
		header: null,
		title: 'Drawer',
		tabBarButtonComponent: TouchableBounce
	};

	render() {
		//TODO:just for testing
		const test = gf.getGrocery();
		console.log(test);

		return (
			<View style={styles.container}>
				<FlatList
					onEndReached={this.handle}
					onEndReachedThreshold={0}
					data={gf.getAllDepartments()}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => console.log(gf.getAllIngredientsByOneDepartment(item))}
						>
							<View style={{ padding: 30 }}>
								<Text>{item}</Text>
							</View>
						</TouchableOpacity>
					)}
					keyExtractor={item => item}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		paddingTop: 45,
		paddingLeft: 30
	}
});
