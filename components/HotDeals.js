'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView, 
  TouchableHighlight,
  AsyncStorage
} from 'react-native';


var Mock = [{
  "id": 1,
  "dish_name": "Andalax",
  "dish_price": "6.84",
  "dish_image": "http://dummyimage.com/300x300.png/dddddd/000000"
}]

import { Card, Button , Divider, Ripple } from 'react-native-material-design';

import styles from '../styles/hotdeals'

import Icon from 'react-native-vector-icons/Ionicons';

import GiftedSpinner from 'react-native-gifted-spinner';

var REQUEST_URL = 'http://www.mocky.io/v2/57a30ea93b0000b10f903406';

import { EventEmitter } from 'fbemitter';

let _emitter = new EventEmitter();

var _addToCart;

class HotDeals extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        })
      };
        this.renderEntity = this.renderEntity.bind(this);
        this.renderLoadingView = this.renderLoadingView.bind(this);
        _addToCart = this.props.addToCart;
  }

  componentDidMount(){
    this.fetchData(); 
  }

  fetchData() {
    let value = null;
    try {
      AsyncStorage.getItem("@MYSUPERSTORE", (err, result) => {
        if(result) {
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(JSON.parse(result)),
              isLoading: false,
            });

        } else {
          fetch(REQUEST_URL)
          .then((response) => response.json())
          .then((responseData) => {
            try {
              AsyncStorage.setItem("@MYSUPERSTORE", JSON.stringify(responseData));
            } catch (err) {
              // 
            }
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseData),
              isLoading: false,
            });
          })
          .done();
        }
      });
    } catch (err) {
      // 
    }
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }

      return (
        <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderEntity}
          style={styles.listView}/>
          </View>
        );
    }

    renderEntity(
      entity : entity, 
      sectionID: number, 
      rowID: number, ) {
      return(
        <DishItem entity = { entity } addToCart = {_addToCart }/>
      );
    }

    renderLoadingView() {
      return (
      <View style={styles.loading}>
      <GiftedSpinner size={"large"} color="#9E9E9E"/>
        </View>
      )
    }

    populateData() {
      this.fetchData();
    }
}

/////////////////////
// CLASS DISH ITEM //
/////////////////////

class DishItem extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      quantity : 0,
    };
  }

  render(){
    const { entity } = this.props;
    return ( 
          <View style={styles.item}>
              <View style={styles.item_top_info}>
                <Text style={styles.classic}>
                  CLASSIC
                </Text>
              </View>
              <View style={styles.item_middle_info}>
                <Text style={styles.dish_name}>{entity.dish_name}</Text>          
                <Text style={styles.dish_price} allowFontScaling={true} ><Text style={styles.currency}>₹ </Text>{entity.dish_price}</Text>
              </View>
              <View style={styles.item_bottom_info}>
                <View style={styles.details_container}>
                  <Text style={styles.details}>Rice, Extra Chicken, Extra Paneer, Extra Cheese</Text>
                </View>
                <View style={styles.counter_container}>
                  <View style={styles.counter}>
                  { this.state.quantity > 0 && 
                    <Text style={styles.counter_text}>{this.state.quantity}</Text>
                  }
                  </View>
                  <View style={styles.buttons}>
                  {this.state.quantity > 0 && 
                      <TouchableHighlight style={{paddingLeft: 8}} 
                            onPress={() => this.removeDish(entity)} underlayColor="white">
                        <Icon name="ios-remove-circle-outline" style={styles.button_icon} color="#26a69a" />
                        </TouchableHighlight>
                      }
                      <TouchableHighlight style={{paddingLeft: 12}} onPress={() => this.addDish(entity)} underlayColor="white">
                      <Icon name="ios-add-circle-outline" style={styles.button_icon} color="#26a69a" />
                      </TouchableHighlight>
                  </View>
                </View>
              </View>
        </View>
      );
  }

  addDish(entity) {
   this.setState({
      quantity : this.state.quantity + 1,
   })
   _emitter.emit('updateBagde');
   // this.props.addToCart(entity);
  }

  removeDish(entity) {
    this.setState({
      quantity : (this.state.quantity > 0) ? this.state.quantity - 1 : this.state.quantity 
    })
  }
}


export default HotDeals;