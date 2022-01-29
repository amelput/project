import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

class Akun extends Component{
  constructor(props){
      super(props);
      this.state = {};
  }
render(){
    return (
      <View style={{backgroundColor:'#F0F8FF', flex: 1}}>
      <View style={{
        backgroundColor: "#CFD4D9",
        alignItems: 'center',
        justifyContent: 'center',
        height:200,
      }}>
        <View style={{marginTop: 30}}>
          <Image source={require('../../assets/icons/gmed.png')}
          style={{alignSelf: 'center',width: 70, height: 70}}></Image>
          <Text style={{fontSize: responsiveFontSize(2.5), marginLeft:10, paddingTop: 8, color : 'black',fontWeight:'bold'}}> GMEDIA SEMARANG</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center', marginTop: 20}}>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('EditProfil')}>
            <Image source={require('../../assets/icons/Edit.png')}
            style={{width: 25, height: 25,tintColor:'blaxk'}}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:'row', margin:10}}>
        <View>
        <Text style={{fontSize: responsiveFontSize(1.8)}}>Alamat</Text> 
        <Text> </Text>
        <Text style={{fontSize: responsiveFontSize(1.8)}}>Telepon</Text> 
        <Text style={{fontSize: responsiveFontSize(1.8)}}>Situs Web</Text> 
        </View>
          <View>
          <Text style={{fontSize: responsiveFontSize(1.8)}}> :  Jl. Jangli Dalam No.29J, Jatingaleh, Kec. Candisari, </Text>
          <Text style={{fontSize: responsiveFontSize(1.8)}}>   Kota Semarang, Jawa Tengah 50254</Text>
          <Text style={{fontSize: responsiveFontSize(1.8)}}> :  (024) 8509595</Text>
          <Text style={{fontSize: responsiveFontSize(1.8)}}> :  gmedia.net.id</Text>
          </View>
      </View>
      </View>
    );
}}; 

export default Akun;

