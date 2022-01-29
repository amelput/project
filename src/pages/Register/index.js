import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Pie from 'react-native-pie';


const Register = () => {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#F0F8FF'}}>
        <Text>Sign In</Text>
      </View>
    )
}

export default Register

// const styles = StyleSheet.create({})
// import { NavigationContainer } from '@react-navigation/native';
// import React, {Component} from 'react';
// import { Text, View,Image, TouchableOpacity, StatusBar ,Dimensions, TextInput, StyleSheet} from 'react-native';
// import {
//     responsiveHeight,
//     responsiveWidth,
//     responsiveFontSize
//   } from "react-native-responsive-dimensions";



// class Login extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             username : '',
//             password : '',
//             success : '',
//             loading: false
//         };
//     }
//     handleClick(navigate){
//         this.setState({
//           loading: true
//         });

//         fetch('https://kelompok2-gmedia.herokuapp.com/users', {
//        method: 'POST',
       
//     })
            
//     .then((response) => response.json())
//         .then((response) => {
//                  this.setState({
//                       loading: false
//                   }, ()=>{

//                     if (response.token != undefined) {
//                         console.log(response);
//                          AsyncStorage.setItem('tokenUser', response.token);
//                          AsyncStorage.setItem('statusUser', response.status);
//                          AsyncStorage.setItem('idUser', response.id);
//                          AsyncStorage.setItem('Username', response.username);
//                              const resetAction = NavigationActions.reset({
//                               index: 0,
//                               actions: [
//                                 NavigationActions.navigate({ routeName: 'Beranda'})
//                               ]
//                             })
//                           this.props.data.dispatch(resetAction)
//                       }else{
                        
//                         this.setState({ spinner: false });
//                         setTimeout(() => {
//                           Alert.alert('Warning','Username / Password Salah!');
//                         }, 100);       
                      
//                               }
//                     }
//                   );
                   
//           }).done();
//     }
  
//     render() {
//         const { navigate } = this.props.data;
//         return (
//           <Content style={styles.contentLogin}>
//                 <Loader loading={this.state.loading} />
//                 <View style={styles.center}>
//                       <Thumbnail square large source={require('../../assets/icons/Logo.png')} style={styles.images}/>
//                         <Text style={styles.font1}>Kleenly</Text>
//                 </View>
              
//               <Form style={styles.formLogin}>
//                 <Item floatingLabel>
//                   <Label>
//                     <Text style={styles.st_inputfnt}>Username</Text>
//                   </Label>
//                   <Input style={styles.st_inputfnt} onChangeText={(text) => this.setState({username:text})}/>
//                 </Item>
//                 <Item floatingLabel>
//                   <Label>
//                     <Text style={styles.st_inputfnt}>Password</Text>
//                   </Label>
//                   <Input style={styles.st_inputfnt} secureTextEntry={true} onChangeText={(text) => this.setState({password:text})}/>
//                 </Item>
//               </Form>
//                 <Button block info style={styles.footerBottom} onPress={() => this.handleClick(navigate)}>
//                   <Text>Sign In</Text>
//               </Button>
    
    
//              <View style={styles.footerBottomSignUp}>
//                 <TouchableOpacity onPress={() => navigate('Daftar')}>
//                   <Text style={styles.st_signup}>
//                     Belum pernah registrasi? SIGN UP!
//                   </Text>
//                 </TouchableOpacity>
//             </View>
    
//             </Content>
//         );
//       }
//     }
    
//     const styles = StyleSheet.create({
//       icon:{
//         color: 'white',
//       },
//       footerBottom:{
//         marginTop: 26,
//         paddingTop: 10,
//         marginLeft: 16,
//         marginRight: 16,
//       },
//       formLogin : {
//         marginTop :30,
//         paddingLeft : 10,
//         paddingRight : 30,
//       },
//       contentLogin : {
//         marginTop : 10,
//       },
//       images:{
//           marginTop: 80,
//           width: 150,
//           height: 150,
//           borderRadius: 20,
//       },
//       font1:{
//           fontSize: 20,
//           color: 'white',
//           fontWeight: 'bold',
//         },
//       center:{
//           flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center', 
//       },
//       footerBottomSignUp:{
//           marginTop: 56,
//           alignItems: 'center', 
//         },
//       st_signup:{
//           color: 'white',
//           fontWeight: '500', 
//         },
//       st_inputfnt:{
//           color: 'white',
//       }
//     });

// export default Login;