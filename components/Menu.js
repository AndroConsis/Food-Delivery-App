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

const drawerMenuListItem = [
	{
		'name':'HOME', 
		'key':'app',
		'icon': 'ios-home-outline'
	}, 
	{
		'name':'PROFILE',
		'key':'profile',	//New Component
		'icon': 'ios-person-outline'

	}, 
	{
		'name':'TRACK ORDER', 
		'key':'track_order', //New Component
		'icon': 'ios-paw-outline'
	}, 
	{
		'name':'PAST ORDERS', 
		'key':'past_order',
		'icon': 'ios-filing-outline'
	}, 
	{
		'name':'NOTIFICATIONS',
		'key':'notifications',
		'icon':'ios-color-wand-outline'
	}, 
	{
		'name': 'CONTACT US',
		'key': 'contactus',
		'icon':'ios-heart-outline'
	}
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
			dataSource : this.state.dataSource.cloneWithRows(drawerMenuListItem)	
		});
	}

	_renderMenuItem(item) {
		return(
			<View style={styles.drawer_list_item}>
				<TouchableOpacity onPress={()=> this.onItemSelect(item)}>
					<View style={styles.item_container}>
						<View style={styles.item_icon}><Icon style={styles.icon} name={item.icon} size={36}></Icon></View>
						<View style={styles.item_title}><Text style={styles.title_text}> {item.name} </Text></View>
					</View>
				</TouchableOpacity>
			</View>
			);
	}

	onItemSelect (item) {
		_navigate(item.key);
	}

// rendering View
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header_container}>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={ (item) => this._renderMenuItem(item) }
					></ListView>
				</View>
				<View style={styles.footer_container}>
					<TouchableOpacity style={styles.button}>
					<View style={styles.item_container}>
						<View style={styles.item_title}><Text style={styles.button_text}> CHECK NEW OFFERS </Text></View>
					</View>
				</TouchableOpacity>
				</View>
			</View>
		);
	}

}

module.exports = Menu;


/*
<View style={styles.profileView}>
				<Text style={styles.profileName}>Sign In</Text>
			</View>
			<View style={styles.meunList}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(item) => this._renderMenuItem(item)}
				/>
			</View>
			*/
