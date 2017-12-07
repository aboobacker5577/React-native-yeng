import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,Image
}from 'react-native'
export default class splash extends Component{

    render(){
        return(
            /*<View style={styles.wrapper}>
            <View >*/
                <Image source={require('../images/imgcmn/SPLASHSCREEN.png')}  style={styles.backgroundImage}/>
                /*
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Hello!</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Powerd By Crazzy Amigos</Text>
                </View>
            </View>*/

        );
    }
}
const styles=StyleSheet.create({
    wrapper: {
        backgroundColor: 'red',
        //backgroundImage:'url(../images/imgcmn/SPLASHSCREEN.png)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color:'white',
        fontSize:35,
        fontWeight:'bold'
    },
    subtitle:{
        color:'white',
        fontWeight:'200',
        paddingBottom:20
    },
    titleWrapper:{
        justifyContent: 'center',
        flex:1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    }
});