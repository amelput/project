// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image,Dimensions} from 'react-native';
import Login from './pages/Login/index';
import Monitoring from './pages/Monitoring/index';
import Maintenance from './pages/Maintenance/index';
import Home from './pages/Home/index';
import Akun from './pages/Akun/index';
import ForgotPassword from './pages/ForgotPassword';
import EditProfil from './pages/EditProfil';
import Detail from './pages/Detail/index';
import KetahananAki from './pages/KetahananAki';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options= {{headerShown: false }}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false }}/>
        <Stack.Screen name="MainApp" component= {MainApp} options= {{headerShown: false }} />
        <Stack.Screen name="Monitoring" component= {Monitoring} options= {{headerShown: false }} />
        <Stack.Screen name="Maintenance" component= {Maintenance} options= {{headerShown: false }} />
        <Stack.Screen name="EditProfil" component= {EditProfil} options= {{headerShown: false }} />
        <Stack.Screen name="Detail" component= {Detail} options= {{headerShown: false }} />
        <Stack.Screen name="KetahananAki" component= {KetahananAki} options= {{headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};


const MainApp = () => {
  return(
    <Tab.Navigator 
    screenOptions={{
    tabBarShowLabel: false,
    }
    }>
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{  
        headerShown: false,
        tabBarStyle:{
        position:'absolute',
        bottom:responsiveHeight(3),
        marginHorizontal:responsiveHeight(4),
        // elevation: 0,
        backgroundColor: '#000000',
        borderRadius: 40,
        height:responsiveHeight(10),
        },
        tabBarIcon: ({focused})=> (
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            padding: responsiveHeight(1),
            flexDirection: 'row',
            backgroundColor: focused ? "#49809a":"black",
            }}
          >
            <Image source={require('./assets/icons/home.png')}
              style={{
                resizeMode:"contain",
                width: responsiveWidth(20),
                height:responsiveHeight(6),
                tintColor: focused? '#CFD4D9' : '#47d7fb'
              }}>
            </Image>
            <View style={{marginRight:responsiveHeight(2)}}>
            <Text style={{fontSize: responsiveFontSize(1.8), color: focused? '#CFD4D9' : '#47d7fb'}}>HOME</Text>
            </View>
          </View>
        )}}
      />
      <Tab.Screen 
        name="Akun" 
        component={Akun} 
        options={{ 
          headerShown: false,
          tabBarStyle:{
          position:'absolute',
          bottom:responsiveHeight(3),
          marginHorizontal:responsiveHeight(4),
          // elevation: 0,
          backgroundColor: '#000000',
          borderRadius: 40,
          height:responsiveHeight(10),
        },
          tabBarIcon: ({focused})=> (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
              padding: responsiveHeight(1),
              flexDirection: 'row',
              backgroundColor: focused ? "#49809a":"black",
            }}>
              <Image source={require('./assets/icons/akun.png')}
              resizeMode="contain"
              style={{
                resizeMode:"contain",
                width: responsiveWidth(20),
                height:responsiveHeight(6),
                tintColor: focused? '#CFD4D9' : '#47d7fb'
                
              }}>
              </Image>
              <View style={{marginRight:responsiveHeight(2)}}>
                <Text style={{fontSize: responsiveFontSize(1.8), color: focused? '#CFD4D9' : '#47d7fb'}}>AKUN</Text>
              </View>
            </View>
          )}}
        />
    </Tab.Navigator>
  );
            }

export default App;