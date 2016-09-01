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

import { Toolbar } from 'react-native-material-design';

import { EventEmitter } from 'fbemitter';

let _emitter = new EventEmitter();

// A particular View Component
class PastOrders extends Component {

// rendering Veiw
	render() {
		return (
			<View style={{flex: 1}}>
				<Toolbar 
			 	  			title = "Past Orders"
			 	  			icon = "back"
			 	  			onIconPress ={() => {_emitter.emit('back')}}
			 	  		/>
			</View>
		);
	}

}

module.exports = PastOrders;
