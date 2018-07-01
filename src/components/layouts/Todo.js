/*eslint-disable no-underscore-dangle*/
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button, FlatList, Text } from 'react-native';

import ListItems from '../common';

export default class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			dataSource: []
		};
		this.textChangeHandler = this.textChangeHandler.bind(this);
		this.deleteOnPress = this.deleteOnPress.bind(this);
	}

	textChangeHandler = value => {
		const inputValue = value;
		this.setState(() => ({
			inputValue
		}));
	};

	addOnPress = () => {
		if (!this.state.inputValue) {
			return;
		}
		const textArray = this.state.dataSource;
		textArray.push(this.state.inputValue);
		this.setState(() => ({
			dataSource: textArray,
			inputValue: ''
		}));
	};

	deleteOnPress = id => {
		this.setState(a => {
			const newItem = a.dataSource.filter((item, i) => parseInt(id, 10) !== i);
			return {
				dataSource: newItem
			};
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.formView}>
					<TextInput
						style={styles.inputForm}
						value={this.state.inputValue}
						onChangeText={this.textChangeHandler}
						placeholder="Input todo"
					/>
					<Button title="Add" onPress={this.addOnPress} />
				</View>
				<FlatList
					style={{ flex: 1 }}
					data={this.state.dataSource}
					renderItem={({ item, index }) => {
						console.log(item);
						return <ListItems rowData={item} onPress={() => this.deleteOnPress(index)} />;
					}}
					keyExtractor={(item, index) => item}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	formView: {
		borderBottomWidth: 1,
		borderColor: '#ccc',
		paddingBottom: 10,
		paddingTop: 15
	},
	inputForm: {
		backgroundColor: '#fff',
		width: 320,
		height: 40,
		padding: 8,
		marginBottom: 10,
		marginTop: 10
	}
});
