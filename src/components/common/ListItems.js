import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ListItems = ({ rowData, onPress }) => {
	console.log(rowData);

	return (
		<View style={styles.todoItem}>
			<Text style={styles.todoText}>{rowData}</Text>
			<Button title="Delete" onPress={onPress} style={styles.deleteButton} />
		</View>
	);
};

const styles = StyleSheet.create({
	todoItem: {
		alignItems: 'center',
		padding: 8,
		width: 320,
		borderBottomWidth: 1.5,
		borderColor: '#e0e0e0',
		backgroundColor: '#fff',
		flex: 1,
		flexDirection: 'row'
	},
	todoText: {
		flex: 1
	}
});

export default ListItems;
