import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
      backgroundColor: '#f3e5f5',
	},
   item: {
   	  flex: 1,
      flexDirection: 'column',
      backgroundColor: "#FFFFFF",
      borderBottomWidth: 1,
      borderColor: '#e5e5e5',
      paddingLeft: 20,
      paddingRight: 20,
      padding: 6,
   	  justifyContent: 'space-between',
      height: 130,
   },

   item_top_info: {
   	  flex: .2,
   	  justifyContent: 'flex-end'
   },

   classic: {
   	  fontSize: 12,
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
   	  fontSize: 30,
   	  fontWeight: "100",
   	  color: '#616161'
   },

   currency: {
   	  fontSize: 24,
   	  color: '#616161' 
   },

   dish_price: {
   	  fontSize: 32,
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
   	  fontSize: 17,
   	  color: "#bdbdbd"
   },

   counter_container: {
   	  flex: 4,
   	  flexDirection: 'row',
   	  top: 2,
   },

   counter: {
   	  flex: 4.5,
   	  alignItems: 'flex-end',
   },

   counter_text: {
   	  fontSize:26,
   	  color: "#e0e0e0"
   },

   buttons: {
   	  flex: 6,
   	  flexDirection: 'row',
   	  justifyContent: 'flex-end'
   }



});