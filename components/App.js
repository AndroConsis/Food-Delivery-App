'use strict'

import React, { Component } from 'react';
import {
	BackAndroid,
	Navigator,
	StyleSheet,
	ToolbarAndroid,
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

var _navigator;

import navigationHelper from '../helpers/navigation'

const menuIcon =  (<Icon name="add-cicle-outline" size={30} color="#4F8EF7" />)

import { EventEmitter } from 'fbemitter';

let _emitter = new EventEmitter();

class App extends Component {

	componentDidMount() {
		var self = this;

		_emitter.addListener('openMenu', () => {
			self._drawer.openDrawer();
		});

		_navigator = this.props.navigator;
	}

	render() {
		return (
			 <DrawerLayout 
			 	ref={(drawer) => { return this._drawer = drawer }}
			 	drawerWidth={300} 
			 	drawerPosition={DrawerLayout.positions.Left} 
			 	renderNavigationView={() => <Menu navigator={ navigator } 
				 	navigate={(route) => {
				 		if(route == "Order"){
				 			this._drawer.closeDrawer()
				 		} else{ 
		                    this.props.navigator.push(navigationHelper(route))
		                    this._drawer.closeDrawer()
			                }}}/>
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
						      <HotDeals tabLabel='Recommended'></HotDeals>
						      <HotDeals tabLabel='South Indian'></HotDeals>
						      <HotDeals tabLabel='Curries'>project</HotDeals>
						      <Text tabLabel='Indian Breads'>favorite</Text>
						      <Text tabLabel='Rice'>project</Text>
						</ScrollableTabView>
					</View>
			</DrawerLayout>
			);
	}

	_drawTabs(){

	}
}

export default App;






