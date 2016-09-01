'use strict'

import React, { Component } from 'react';
import { 
		 StyleSheet, 
		 TouchableOpacity, 
		 Text,
		 View,
		} from 'react-native';

import styles from '../styles/menu';

// A particular View Component
class Notifications extends Component {

// rendering Veiw
	render() {
		return (
			<View style={{flex: 1}}>
				<Text style={{fontSize : 30}}>Notifications</Text>
			</View>
		);
	}

}

module.exports = Notifications;
