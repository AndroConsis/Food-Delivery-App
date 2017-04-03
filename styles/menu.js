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
const base_unit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function 
function em(value) {
  return unit * value;
}

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    header_container: {
        marginTop: em(1.55),
        height: (x - em(50) * 2) * (3/5),
    },

    drawer_list_item: {
    },

    item_container: {
        flex: 1,
        flexDirection: 'row',
        width: x - em(1.25) * 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: (x - em(9) * 2) * (3/5)
    },

    item_icon: {
        flex: 1,
        paddingLeft: em(3)
    },

    item_title: {
        flex: 7,
        paddingLeft: em(0.3)
    },

    icon: {
        color: '#616161'
    },

    title_text: {
        fontSize: em(1.2),
        fontFamily: 'Verdana',
        color: '#616161'
    },

    footer_container: {
        marginTop: em(.75),
    },

    button: {
        borderWidth: em(.1),
        borderColor: '#e5e5e5',
        borderRadius: em(.3),
        height: (x - em(7) * 2) * (2/6),
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button_text: {
        fontFamily: 'Verdana',
        fontSize: 20,
        alignSelf: 'center',
        color: '#3e3e3e'
    }
});
