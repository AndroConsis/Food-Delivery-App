'use strict'

import React, { Component } from 'react';
import {
	BackAndroid,
	StyleSheet,
	View,
	Text,
	renderNavigationView
} from 'react-native';

import DrawerLayout from 'react-native-drawer-layout';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import HotDeals from'./HotDeals'

import { Toolbar } from 'react-native-material-design';

import Menu from './Menu'

import styles from '../styles/root';

import ActionButton from '../helpers/ActionButton';
import { Actions } from 'react-native-router-flux';

import _ from 'underscore';

const menuIcon =  (<Icon name="add-cicle-outline" size={30} color="#4F8EF7" />)

import { EventEmitter } from 'fbemitter';

let _emitter = new EventEmitter();

var order = [];

class App extends Component {

	componentDidMount() {
		var self = this;

		_emitter.addListener('openMenu', () => {
			self._drawer.openDrawer();
		});
	}

	render() {
		return (
			 <DrawerLayout 
			 	ref={(drawer) => { return this._drawer = drawer }}
			 	drawerWidth={300} 
			 	drawerPosition={DrawerLayout.positions.Left} 
			 	renderNavigationView={() => <Menu 
			 		navigate={(route) => {
			 			this._navigateTo(route)
			 			this._drawer.closeDrawer();
			 		  } 
			 		} />
		            }>

			 	  	<View style={styles.container}>
			 	  		<Toolbar 
			 	  			title = "Home"
			 	  			icon = "menu"
			 	  			onIconPress ={() => {_emitter.emit('openMenu')}}
			 	  		/>
				      	<ScrollableTabView
				      	  style={{marginTop: 48, }}
					      initialPage={0}
					      renderTabBar={() => <ScrollableTabBar />}>
						      <HotDeals tabLabel='Recommended' addToCart={(x) => this._addItemToCart(x)}></HotDeals>
						      <HotDeals tabLabel='South Indian' addToCart={(x) => this._addItemToCart(x)} ></HotDeals>
						      <HotDeals tabLabel='Curries' addToCart={(x) => this._addItemToCart(x)}>project</HotDeals>
						      <Text tabLabel='Indian Breads'>favorite</Text>
						      <Text tabLabel='Rice'>project</Text>
						</ScrollableTabView>
						<ActionButton buttonColor="rgba(222,51,69,1)" hideShadow={false}>
				          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("New Task")}>
				            <Icon name="add-circle-outline" style={styles.actionButtonIcon} />
				          </ActionButton.Item>
				          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
				            <Icon name="add-circle-outline" style={styles.actionButtonIcon} />
				          </ActionButton.Item>
				        </ActionButton>
					</View>
			</DrawerLayout>
			);
		}

		_addItemToCart(x) {
				}

		_navigateTo(route){
			switch(route) {
				case 'notifications' : 
					Actions.notifications();
					break;
				case 'past_orders':
					Actions.past_orders();
					break;
				default : 
					// Do nothing
					break;
				}
			}
	}

export default App;






