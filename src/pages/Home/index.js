import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,Image, StatusBar,Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default class Home extends Component{
  constructor(props){
      super(props);
      this.state = {};
  } 

  render(){
    return (
      <View style={{backgroundColor:'#F0F8FF', flex:1}}>
        <View>
        <StatusBar barStyle="light-content" backgroundColor="black"/>
        <View style={{
          backgroundColor: "black",
          alignItems: 'center',
          justifyContent: 'center',
          height: responsiveHeight(10.5),
          flexDirection:'row',
          borderBottomLeftRadius: responsiveWidth(5),
          borderBottomRightRadius: responsiveWidth(5),
        }}>
          <Image  source={require('../../assets/icons/Logo.png')}
                  style={{width: responsiveWidth(12),resizeMode: 'contain'}}>
          </Image>
          <Text style={{fontSize: responsiveFontSize(2.5), color:'#47d7fb', fontWeight:'bold'}}> POWER METER MEASUREMENT</Text>
        </View>
          <View style={{flexDirection:'row', justifyContent:'center', marginTop: responsiveHeight(26)}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('KetahananAki')}
            style={{
              backgroundColor:"#49809a",
              marginRight:responsiveWidth(1.2),
              padding: 4,
              paddingHorizontal: responsiveWidth(4.5),
              borderRadius: responsiveWidth(2.5),
              justifyContent: 'center',
              paddingVertical: responsiveHeight(2),
            }}>
            <Image source={require('../../assets/icons/waktu.png')}
            style={{height: responsiveHeight(7), width: responsiveWidth(25),resizeMode: 'contain'}}></Image>
              <View style={{marginTop: responsiveHeight(1), alignItems:'center'}}>
                <Text style={{color: 'black',fontWeight:'bold',fontSize: responsiveFontSize(1.7)}}>
                Ketahanan Aki
                </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Maintenance')}
            style={{backgroundColor:"#49809a",
            marginLeft:responsiveWidth(1.2),
            paddingHorizontal: responsiveWidth(7),
            borderRadius:responsiveWidth(2.5),
            justifyContent: 'center',
            paddingVertical: responsiveHeight(2),
          }}>
            <Image source={require('../../assets/icons/list.png')}
                   style={{height: responsiveHeight(7), width: responsiveWidth(20),resizeMode: 'contain'}}></Image>
            <View style={{marginTop: responsiveHeight(1), alignItems:'center'}}>
              <Text style={{color: 'black',fontSize: responsiveFontSize(1.7),fontWeight:'bold'}}>
              List Data 
              </Text>          
            </View>
          </TouchableOpacity>        
          </View>
          <View style={{marginTop:responsiveWidth(2) ,justifyContent:'center'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Monitoring')}
              style={{backgroundColor:"#49809a",
              justifyContent: 'center',
              alignItems:'center',
              marginHorizontal: responsiveWidth(14.8),
              paddingVertical: responsiveHeight(2),
              borderRadius:responsiveWidth(2.5),
            }}>
              <View>
                <Image source={require('../../assets/icons/Monitoring.png')}
                       style={{height: responsiveHeight(7), width: responsiveWidth(20),resizeMode: 'contain'}}></Image>
                  <View style={{marginTop: responsiveHeight(1)}}>
                  <Text style={{color: 'black',fontSize: responsiveFontSize(1.7),fontWeight:'bold'}}>
                    Monitoring
                  </Text>
              </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
};}

const styles = StyleSheet.create({});