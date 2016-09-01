'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ListView,
} from 'react-native';

import { Toolbar } from 'react-native-material-design';

import { EventEmitter } from 'fbemitter';

let _emitter = new EventEmitter();

class ConfirmOrder extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isLoading: false,
	  	dataSource : new ListView.DataSource({
	  		rowHasChanged : (row1, row2) => row1 !== row2
	  	})
	  };
	}


  render() {
    return (
	   	<View style={{flex: 1}}>
	      <Toolbar 
	  			title = "Confirm Order"
	  			icon = "back"
	  			onIconPress ={() => {_emitter.emit('back')}}
	  		/>
	  		<
	  	</View>
    );
  }
}

const styles = StyleSheet.create({

});


export default ConfirmOrder;