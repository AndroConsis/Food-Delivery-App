import React, { Platform } from 'react-native';
import _ from 'underscore';

module.exports = function (scene) {
    var componentMap = {
        'Home': {
            title: 'Home',
            name: 'Home'
        },
        'Notifications': {
            title: 'Notifications',
            name: 'Notifications'
        },
        'Past Orders' : {
            title: 'Past Orders',
            name: 'PastOrders'
        }
    }

    return componentMap[scene];
}
