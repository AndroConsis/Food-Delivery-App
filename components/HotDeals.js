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

import Icon from 'react-native-vector-icons/Ionicons';

import GiftedSpinner from 'react-native-gifted-spinner';

var REQUEST_URL = 'http://www.mocky.io/v2/57a30ea93b0000b10f903406';
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
      <GiftedSpinner />
            <Text>
                Loading
            </Text>
             <TouchableHighlight style={{padding: 12,}} 
                onPress={() => this.populateData()} underlayColor="white">
              <Icon name="ios-remove-circle-outline" size={50} color="#616161" />
             </TouchableHighlight>
        </View>
      )
    }

    populateData() {
      this.fetchData();
    }
}

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
          <View>
            <Card>
                  <Card.Body style={{height : 12}}>
                        <Text style={{fontWeight: '300', fontSize: 24}}>{entity.dish_name}</Text>
                  </Card.Body>
                  <Card.Actions style={{height : 15}}>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-start'}}>
                               <Text style={styles.dish_price}>${entity.dish_price}</Text>
                            </View>
                            <View style={{flex:1, justifyContent: 'flex-end', alignItems: 'center', 
                            flexDirection:'row'}}>
                                <TouchableHighlight style={{padding: 12,}} 
                                    onPress={() => this.removeDish(entity)} underlayColor="white">
                                <Icon name="ios-remove-circle-outline" size={35} color="#616161" />
                                </TouchableHighlight>
                                <Text style={{fontSize : 15}}>{this.state.quantity}</Text>
                              <TouchableHighlight style={{padding: 12,}} onPress={() => this.addDish(entity)} underlayColor="white">
                              <Icon name="ios-add-circle-outline" size={35} color="#616161" />
                              </TouchableHighlight>
                            </View>
                      </View>
                  </Card.Actions>
            </Card>
        </View>
      );
  }

  addDish(entity) {
   this.setState({
      quantity : this.state.quantity + 1,
   })
   // this.props.addToCart(entity);
  }

  removeDish(entity) {
    this.setState({
      quantity : (this.state.quantity > 0) ? this.state.quantity - 1 : this.state.quantity 
    })
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f3e5f5',
},
  title: {
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
  separator: {
       height: 1,
       backgroundColor: '#212121'
   },
   listView: {
       paddingTop: 1,
       backgroundColor: '#F2F1F0',
       paddingBottom: 1
   },
   loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection: 'column'
   },
   dish_price:{
       left: 16,
       fontSize: 18
   },

   ripple: {
      paddingHorizontal: 8,
   }

});


export default HotDeals;
