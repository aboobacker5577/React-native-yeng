import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';


import HomeScreen from '../pages/home';
import rulesandRegulations from '../pages/rulesandRegulations';
import SideBar from '../config/SlideBar';

const yeng=DrawerNavigator({
        Home:{screen:HomeScreen},
        Roules:{screen:rulesandRegulations},
    }
);



