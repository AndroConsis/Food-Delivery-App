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
import Menu from './Menu'
import ReviewOrder from './ReviewOrder'
import {Scene, Router} from 'react-native-router-flux';

class DashBoard extends Component {

  render() {
    return <Router>
      <Scene key="root">
        <Scene key="app" component={App} hideNavBar={true}/>
        <Scene key="notifications" component={Notifications} title="Notifications"/>
        <Scene key="past_orders" component={PastOrders} title="Past Orders"/>
        <Scene key="review_order" component={ReviewOrder} title="Review Order"/>
      </Scene>
    </Router>
  }
}

export default DashBoard;