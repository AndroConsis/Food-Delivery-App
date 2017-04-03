import React from "react-native";
import Dimensions from 'Dimensions';

import { StyleSheet } from 'react-native';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1 ;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1 ;

// We set our base font size value
const base_unit = 24;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function 
function em(value) {
  return unit * value;
}

module.exports = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
     backgroundColor: '#f3e5f5',
	},

   loading: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },

   item: {
   	flex: 1,
      flexDirection: 'column',
      backgroundColor: "#FFFFFF",
      borderBottomWidth: 1,
      paddingLeft: em(1),
      paddingRight: em(1),
      borderColor: '#e5e5e5',
   	justifyContent: 'space-between',
      height: (x - em(1.22) * 2) * (2/5)
   },

   item_top_info: {
   	  flex: .2,
   	  justifyContent: 'flex-end'
   },

   classic: {
   	  fontSize: em(0.65),
   	  fontWeight: "900",
   	  color: '#F7484c'
   },

   item_middle_info: {
   	  flex: .2,
   	  flexDirection: 'row',
   	  justifyContent: 'space-between',
   	  alignItems: 'flex-end'
   },

   dish_name: {
   	  fontSize: em(1.25),
        // fontFamily: 'monospace',
   	  color: '#616161',
   },

   currency: {
   	  fontSize: em(.85),
   	  color: '#616161' 
   },

   dish_price: {
   	  fontSize: em(1.25),
   	  color: '#616161'
   },

   item_bottom_info: {
   	  flex: .4,
   	  flexDirection: 'row',
   },

   details_container: {
   	  flex: 6,
   },

   details: {
   	  fontSize: em(.75),
   	  color: "#bdbdbd"
   },

   counter_container: {
   	  flex: 4,
   	  flexDirection: 'row',
   	  top: em(.2),
   },

   counter: {
   	  flex: 1,
        top: em(.2),
   	  alignItems: 'flex-end',
   },

   counter_text: {
   	  fontSize:em(1),
   	  color: "#bdc3c7",
        fontFamily: 'Iowan Old Style'
   },

   buttons: {
   	  flex: 3,
   	  flexDirection: 'row',
   	  justifyContent: 'flex-end'
   },

   button_icon: {
      fontSize: em(2),
   }



});