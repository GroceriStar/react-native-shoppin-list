import React from 'react';
import {
	View,
	Text,
	TouchableNativeFeedback,
	StyleSheet,
	Dimensions,
	Platform,
	TouchableOpacity
} from 'react-native';

const width = Dimensions.get('window').width - 48;

const buttonComponent = (title, color) => (
	<View style={[styles.buttonView, { backgroundColor: color }]}>
		<Text style={[styles.textStyle]}>{title}</Text>
	</View>
);

const Button = ({ title, color, onPress }) => {
	if (Platform.OS === 'android') {
		return (
			<TouchableNativeFeedback
				background={TouchableNativeFeedback.Ripple('#fff', false)}
				useForeground
				onPress={() => {
					setTimeout(onPress, 500);
				}}
			>
				{buttonComponent(title, color)}
			</TouchableNativeFeedback>
		);
	}
	return <TouchableOpacity onPress={onPress}>
					{buttonComponent(title, color)}
				 </TouchableOpacity>;
};

const styles = StyleSheet.create({
	buttonView: {
		width,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 3,
		marginTop: 10
	},
	textStyle: {
		color: '#fff',
		fontWeight: '500',
		fontSize: 18
	}
});

export default Button;
