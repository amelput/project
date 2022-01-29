import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import { Text, View,Image, TouchableOpacity, StatusBar ,Dimensions, TextInput, Alert, ActivityIndicator} from 'react-native';
import axios from 'axios';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";  

class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            data: {},
            isLoading: true,
            isError: false,
            email: '',
            password: '',
        };
    }
        // Mount User Method
        componentDidMount() {
            this.getGithubUser()
        }
        //    Get Api Users
        getGithubUser = async () => {
            try {
                const res = await axios.post('https://kelompok2-gmedia.herokuapp.com/users/login', {
                    email: this.state.email,
                    password: this.state.password,  
                })
                this.setState({ isError: false, isLoading: false, data: res.data })
                console.log(res);  
            } catch (error) {
                this.setState({ isLoading: false, isError: true })
            }}     
    render(){


        if (this.state.email === null){
            Alert.alert('Email wajib diisi!')
        }
        if (this.state.password=== null){
            Alert.alert('Password wajib diisi!')
        }

                //   //  If load data
                //   if (this.state.isLoading) {
                //     return (
                //         <View
                //             style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
                //         >
                //             <ActivityIndicator size='large' color='blue' />
                //         </View>
                //     )
                // }
                // // If data not fetch
                // else if (this.state.isError) {
                //     return (
                //         <View
                //             style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
                //         >
                //             <Text>Terjadi Error Saat Memuat Data</Text>
                //         </View>
                //     )
                // }
                // // If data finish load 
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
                            onPress={() => {if (this.state.email="") {
                                Alert.alert('Email wajib diisi!')
                            }}}
                            placeholder="Email" 
                            placeholderTextColor={'white'}
                            // onChangeText= {(text)=>this.setState({nama:text})}
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
                             onPress={() => {if (this.state.password="") {
                                Alert.alert('Password wajib diisi!')
                            }}}
                            placeholder="Password" 
                            placeholderTextColor={'white'}
                            // onChangeText= {(text)=>this.setState({password:text})}
                            secureTextEntry={true}
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
                        
                        <TouchableOpacity 
                            onPress={() =>   {if (this.state.data.status===false) {
                                Alert.alert('Cek ulang email dan password!')
                            } else this.props.navigation.navigate('MainApp')}}
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
                    <View  style={{marginTop: responsiveHeight(1.5), flexDirection:'row'}}>
                    <Text style={{color: '#49809a', fontSize: responsiveFontSize(1.8)}}>Belum punya akun?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}> 
                        <Text style={{color: '#49809a', fontSize: responsiveFontSize(1.8), fontWeight:'bold'}}>  Sign In</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>  
                </View>
    )};
}

export default Login;
