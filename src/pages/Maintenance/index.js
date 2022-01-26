import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {
    Text,
    View,
    SafeAreaView
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import 'moment-duration-format';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

    export default function Maintenance() {
        const [data, setData]= useState()
        const[loading, setLoading]= useState(true)
        
        const getData = async () => {
        try {
            const res = await axios.get('https://kelompok2-gmedia.herokuapp.com/tampil1')
            setData(res.data)
            setLoading(false)
 
        } catch (error) {
            alert(error.message)
        }
    };
    useEffect(() => {
        const fetch= setInterval(async () => {
          getData();
        }, 1000);
        return function cleanup() {
          clearInterval(fetch);
        };
      });


      
      if(loading){
        return<View style={{flex: 1 ,backgroundColor:'#F0F8FF', alignItems: 'center', justifyContent:'center'}}>
            <Text style={{alignItems: 'center', justifyContent: 'center', color: 'black'}}>Loading.. </Text>
        </View>
    }
  

 

        return(
            <>
            
            <SafeAreaView>
                <View style={{backgroundColor: '#49809a',padding: 20,paddingLeft: 20}}>
                    <Text style={{alignSelf: 'center', color: 'white',fontWeight:'bold',fontSize: responsiveFontSize(3)}}>LIST DATA</Text>
                </View>
                <ScrollView>
                    <View style={{backgroundColor: '#F0F8FF'}}>    
                        <View style={{marginTop: 15, marginBottom: 65}}>
                        {data && 
                        data.map((item,i)=>{
                        return( 
                        <> 
                            <View style={{backgroundColor: '#CFD4D9' ,flexDirection:'column', marginBottom: 15, marginHorizontal: 15, padding: 7}}>
                                {/* <Text style={{fontSize: responsiveFontSize(1.8)}}>{item.id}</Text> */}
                                <View style={{justifyContent:'center', alignItems:'center', backgroundColor : '#49809a', marginBottom : 5}}>
                                <Text>{moment(item.time).format('LLL')}</Text>

                                </View>

                                <Text style={{fontSize: responsiveFontSize(1.8)}}>CURRENT AC = {item.currentac/1000} A</Text>
                                <Text style={{fontSize: responsiveFontSize(1.8)}}>VOLTAGE AC = {item.voltageac} V</Text>
                                <Text style={{fontSize: responsiveFontSize(1.8)}}>DAYA AC = {item.voltageac * item.currentac/1000} Watt</Text>
                                <Text style={{fontSize: responsiveFontSize(1.8)}}>CURRENT DC = {item.currentdc/1000} A</Text>
                                <Text style={{fontSize: responsiveFontSize(1.8)}}>VOLTAGE DC = {item.voltagedc} V</Text>
                                <Text style={{fontSize: responsiveFontSize(1.8)}}>DAYA DC = {item.voltagedc * item.currentdc/1000} Watt</Text>


                            </View>
                        </>
                            )
                        })}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
          </>

      )
    }