'use strict'

import React, { Component } from 'react';
import { 
		 ListView,
		 StyleSheet, 
		 TouchableOpacity, 
		 Text,
		 View,
		} from 'react-native';

import styles from '../styles/menu';

// A particular View Component
class PastOrders extends Component {

// rendering Veiw
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.profileName}>Past Orders</Text>
			</View>
		);
	}

}

module.exports = PastOrders;
