'use strict'

import React, { Component } from 'react';
import {
	BackAndroid,
	View,
	Text,
	renderNavigationView
} from 'react-native';

import DrawerLayout from 'react-native-drawer-layout';

import Icon from 'react-native-vector-icons/Ionicons';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import HotDeals from'./HotDeals'

import { Toolbar } from 'react-native-material-design';

import Menu from './Menu'

import styles from '../styles/root';

import ActionButton from '../helpers/ActionButton';
import { Actions } from 'react-native-router-flux';

import _ from 'underscore';

const menuIcon =  (<Icon name="ion-navicon" size={30} color="#4F8EF7" />)

import { EventEmitter } from 'fbemitter';

let _emitter = new EventEmitter();

var order = [];


class App extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	value : 7, 
	  	actions: [{
			icon: "ios-cart-outline",
			counter: {
				color: 'red',
				fontSize: 24
			},
			badge: {
			    value: 0,
			    animate: true,
			    backgroundColor: "#e5e5e5",
			    textColor: '#616161'
			}
		}]
	  };
	}

	componentDidMount() {
		var self = this;
		var startsWith = 0;

		_emitter.addListener('openMenu', () => {
			self._drawer.openDrawer();
		});

		_emitter.addListener('updateBagde', (value) => {
			let newValue = value + 1;
			const actions = [{
				icon: "ios-cart-outline",
				counter: {
					color: 'red',
					fontSize: 24
				},
				badge: {
				    value: newValue,
				    animate: true,
				    backgroundColor: "#e5e5e5",
				    textColor: '#616161'
				}}];
			this.setState({actions: this.actions});
		})
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
			 	  			icon = "ios-pause-outline"
			 	  			theme = "light"
			 	  			onIconPress ={() => {_emitter.emit('openMenu')}}
			 	  			actions = {this.state.actions}
			 	  		>
			 	  		</Toolbar>
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






/*<ActionButton buttonColor="rgba(222,51,69,1)" hideShadow={false}>
				          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("New Task")}>
				            <Icon name="add-circle-outline" style={styles.actionButtonIcon} />
				          </ActionButton.Item>
				          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
				            <Icon name="add-circle-outline" style={styles.actionButtonIcon} />
				          </ActionButton.Item>
				        </ActionButton>*/