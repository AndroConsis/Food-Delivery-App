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

import Icon from 'react-native-vector-icons/Ionicons';

var MOCK = [
	{"title": "Home", "icon" : "Home"},
	{"title": "Past Orders", "icon" : "PastOrders"},
	{"title": "Notifications", "icon" : "Notifications"},
	{"title": "Invite", "icon" : "Invite"},
	{"title": "Help", "icon" : "help"},
]

var _navigate;

// A particular View Component
class Menu extends Component {

	// contructor instantiate
	constructor(props) {
		super(props);
		// using for ListView
		this.state = {
			 dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
		};
		_navigate = this.props.navigate;
	}

	// Component LifeCycle
	componentDidMount() {
		this.setState({
			dataSource : this.state.dataSource.cloneWithRows(
				[{'name':'Order', 'key':'app'}, {'name':'Notifications', 'key':'notifications'}, {'name':'Past Orders', 'key':'past_orders'}, {'name':'Invite', 'key':'app'}, {'name':'Help', 'key':'app'}]
				)	
		});
	}

	_renderMenuItem(item) {
		return(
			<TouchableOpacity onPress={()=> this._onItemSelect(item)}>
				<Text style={styles.menuItem}><Icon name="ios-alert-outline" size={25}/> {item.name}</Text>
				</TouchableOpacity>
			);
	}

	_onItemSelect (item) {
		_navigate(item.key);
	}

// rendering View
	render() {
		return (
			<View style={styles.container}>
			<View style={styles.profileView}>
				<Text style={styles.profileName}>Sign In</Text>
			</View>
			<View style={styles.meunList}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(item) => this._renderMenuItem(item)}
				/>
			</View>
			</View>
		);
	}

}

module.exports = Menu;
