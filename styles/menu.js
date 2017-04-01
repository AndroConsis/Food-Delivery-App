import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        top: 30
    },



    drawer_list_item: {
    },

    item_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 64
    },

    item_icon: {
        flex: 1,
        paddingLeft: 50
    },

    item_title: {
        flex: 7,
        paddingLeft: 6
    },

    icon: {
        color: '#616161'
    },

    title_text: {
        fontSize: 20,
        fontFamily: 'Cochin',
        color: '#616161'
    },

    footer_container: {
        flex: .6,
        top: 10
    },

    button: {
        borderWidth: 2,
        borderColor: '#e5e5e5',
        borderRadius: 5,
        height: 54,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button_text: {
        fontFamily: 'Cochin',
        fontSize: 20,
        alignSelf: 'center',
        color: '#3e3e3e'
    }
});
