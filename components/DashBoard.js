'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Navigator, 
  BackAndroid, 
} from 'react-native';

var _navigator;

import navigation from '../helpers/navigation'

import App from './App'
import PastOrders from './PastOrders'
import Notifications from './Notifications'

// Hardware backPress
  BackAndroid.addEventListener('hardwareBackPress()', () => {
    if(_navigator && _navigator.getCurrentRoutes().length > 1){
     _navigator.pop();
     return true;
    }
    return false;
  });

class DashBoard extends Component {

  renderScene(route, navigator) {

  	if( route.name == 'App' ) {
  		return <App navigator = { navigator } />
   	}

   	if( route.name == 'PastOrders' ) {
   		return <PastOrders navigator = { navigator } />
   	}

    if( route.name == 'Notifications' ) {
      return <Notifications navigator = { navigator } />
    }
  }

  render() {
    return (
      <Navigator
      	style={{flex : 1}}
        ref={(ref) => this._navigator = ref}
      	initialRoute = {{
      		name : "App",
      	}}
      	renderScene = {this.renderScene}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
         />
    );
  }
}

export default DashBoard;