import React, { Component } from 'react';
import { View } from 'react-native';

import { TextField } from '../common';

export default class Form extends Component {
	login = () => {
		if (!this.props.Login) {
			return <TextField text="user name" />;
		}
		return <View />;
	};

	render() {
		return (
			{/* //@TODO move styles away */}
			<View style={{ flex: 1, justifyContent: 'center' }}>
				{this.login()}
				<TextField text="e-mail address" />
				<TextField text="password" />
			</View>
		);
	}
}
