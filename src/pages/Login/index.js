import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import { Text, View,Image, TouchableOpacity, StatusBar ,Dimensions, TextInput} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <View style={{backgroundColor:'#F0F8FF',flex:1}}>
            <View style={{flexDirection : 'column',justifyContent: "center", alignItems: 'center'}}>
                <StatusBar barStyle="light-content" backgroundColor="black"/>
                    <Image source={require('../../assets/icons/Logo.png')} 
                    style={{
                        width: responsiveWidth(30),
                        height: responsiveHeight(50),
                        // marginTop:130,
                        // marginBottom: 100,
                        resizeMode: 'contain'}}
                        />
                    <View style={{justifyContent: "center",alignItems: "center"}}>
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor={'white'}
                            style={{
                                height: responsiveHeight(6),
                                width: responsiveWidth(75),
                                backgroundColor: '#49809a',
                                borderRadius: 20,
                                padding: 10,
                                marginVertical: responsiveWidth(2),
                                fontSize: responsiveFontSize(1.8),
                            }}
                        />
                        <TextInput 
                            placeholder="Password" 
                            placeholderTextColor={'white'}
                            style={{
                                height: responsiveHeight(6),
                                width: responsiveWidth(75),
                                backgroundColor: '#49809a',
                                borderRadius: 20,
                                padding: 10,
                                 marginVertical: responsiveWidth(2),
                                 fontSize: responsiveFontSize(1.8),
                            }}
                        />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MainApp')}
                            style={{
                                height: responsiveHeight(6),
                                width: responsiveWidth(75),

                                backgroundColor: '#47d7fb', 
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 20,
                                marginVertical: responsiveWidth(2)
                            }}>
                            <Text style={{color: "white", fontSize: responsiveFontSize(1.8),}}>
                                Login
                            </Text>
                    </TouchableOpacity>
                    <View  style={{marginTop: responsiveHeight(2)}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                        <Text style={{color: '#49809a', fontSize: responsiveFontSize(1.8)}}>Forgot Password?</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>  
                </View>
    )};
}

export default Login;
