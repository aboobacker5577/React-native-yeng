/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, AppRegistry,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import Main from "./src/pages/index";
import Splash from "./src/pages/splash";

export default class App extends Component<{}> {
    constructor(props){
        super(props)
        this.state={
            component:<Splash/>
        }
    }

    componentDidMount(){
        this.timeoutHandle=setTimeout(()=>{
            this.setState({component:<Main/>})
        },3000);
    }
    componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
    }
    render() {
        return (
             this.state.component
        );
    }
}
