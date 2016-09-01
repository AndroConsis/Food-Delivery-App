'use strict'

import React, { Component } from 'react';
import { 
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
class Notifications extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

// rendering Veiw
	render() {
		return (
			<View style={{flex: 1}}>
				<Toolbar 
			 	  			title = "Notifications"
			 	  			icon = "back"
			 	  			onIconPress ={() => {_emitter.emit('back')}}
			 	  		/>
			</View>
		);
	}

}

module.exports = Notifications;
