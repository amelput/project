import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

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
          <Text style={{fontSize:20, marginLeft:10, paddingTop: 8, color : 'black',fontWeight:'bold'}}> GMEDIA SEMARANG</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center', marginTop: 20}}>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('EditProfil')}>
            <Image source={require('../../assets/icons/Edit.png')}
            style={{width: 25, height: 25,tintColor:'blaxk'}}/>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
}}; 

export default Akun;

const styles = StyleSheet.create({});
