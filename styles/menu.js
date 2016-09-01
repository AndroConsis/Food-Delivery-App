import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        top: 20,
        flex: 1,
        flexDirection: 'column',
    },
    
    profileView: {
    	flex: 1,
    	backgroundColor: "#FFFFFF",
    	justifyContent: 'center',
    	alignItems: 'center'
    },	
    meunList: {
    	flex: 3,
    	backgroundColor: "#F2F1F0"
    },

    menuItem: {
    	marginLeft : 20,
    	marginTop: 20,
    	fontSize: 16,
        color: '#424242',
        padding: 10,
        textAlign: 'left'
    },

    profileName: {
    	fontSize: 20,
    	color: '#424242' 
    }
});
