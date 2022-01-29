import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment';
import 'moment-duration-format';
import { ScrollView } from 'react-native-gesture-handler';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const KetahananAki = () => {
    const [data, setData]= useState()
    const[loading, setLoading]= useState(true)
    
    const getData = async () => {
    try {
        const res = await axios.get('https://kelompok2-gmedia.herokuapp.com/tampil')
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
//data
const currentAC = ((data?.[data?.length-1].currentac)/1000);
const voltageAC = (data?.[data?.length-1]?.voltageac);
const currentDC = ((data?.[data?.length-1]?.currentdc)/1000);
const voltageDC = (data?.[data?.length-1]?.voltagedc);
const dayaAC = ((data?.[data?.length-1].currentac/1000)*(data?.[data?.length-1]?.voltageac));
const dayaDC = ((data?.[data?.length-1]?.currentdc/1000)*(data?.[data?.length-1]?.voltagedc));

//hitung brp lama backup aki AC
const arusAkiAC = dayaAC/12 // aki = 12V
const lamaAkiAC = 120/arusAkiAC //aki = 120Ah
const lamaAkiAC20 = lamaAkiAC*20/100
const penguranganLamaAkiAC = lamaAkiAC-lamaAkiAC20
const ubahDetikLamaAC = penguranganLamaAkiAC*3600

const timeAC = moment.duration(ubahDetikLamaAC, "seconds").format("hh:mm:ss");

// hitung brp lama backup aki DC
const arusAkiDC = (dayaDC/12); // aki = 12V
const lamaAkiDC = (120/arusAkiDC); //aki = 120Ah
const lamaAkiDC20 = (lamaAkiDC*20/100);
const penguranganLamaAkiDC = (lamaAkiDC-lamaAkiDC20);
const ubahDetikLamaDC = (penguranganLamaAkiDC*3600);

const timeDC = moment.duration(ubahDetikLamaDC, "seconds").format("hh:mm:ss");

    return (
        <View style={{backgroundColor:'#F0F8FF', flex:1}}>
            <View style={{backgroundColor: '#49809a',padding: 20,paddingLeft: 20}}>
                <Text style={{alignSelf: 'center', color: 'white',fontWeight:'bold', fontSize: responsiveFontSize(3)}}>KETAHANAN AKI</Text>
            </View>
            <ScrollView>
            <View style={{justifyContent:'center', flexDirection:'column'}}>
                <View style={{marginVertical: responsiveWidth(7), marginTop: 50,justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'#49809a', fontSize: responsiveFontSize(2.5), fontWeight:'bold'}}>LAMA AKI DAPAT MEMBACKUP</Text>
                    <Text style={{color:'#49809a', fontSize: responsiveFontSize(2.5), fontWeight:'bold'}}>PERANGKAT AC</Text>
                    <Text style={{color:'#49809a', fontSize: responsiveFontSize(1.5) ,}}>AKI 12V/120Ah</Text>
                    <Text style={{color:'#47d7fb', fontSize: responsiveFontSize(9), fontWeight:'bold', alignSelf:'center'}}>{timeAC}</Text>
                </View>
                <View style={{marginVertical: responsiveWidth(7), marginTop: 50, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'#49809a', fontSize: responsiveFontSize(2.5), fontWeight:'bold'}}>LAMA AKI DAPAT MEMBACKUP</Text>
                    <Text style={{color:'#49809a', fontSize: responsiveFontSize(2.5), fontWeight:'bold'}}>PERANGKAT DC</Text>
                    <Text style={{color:'#49809a', fontSize: responsiveFontSize(1.5) ,}}>AKI 12V/120Ah</Text>
                    <Text style={{color:'#47d7fb', fontSize: responsiveFontSize(9), fontWeight:'bold', alignSelf:'center'}}>{timeDC}</Text>
                </View>
            </View>
            <View style={{backgroundColor: 'white', padding: 25, margin: 40, marginTop: responsiveHeight(9)}}>
                <Text style={{fontSize: responsiveFontSize(1.6), color: '#49809a', fontWeight:'bold'}}>Kesimpulan : </Text>
                <Text style={{fontSize: responsiveFontSize(1.5), color: '#49809a'}}>Lama ketahanan aki dapat membackup ditentukan oleh kapasitas ampere aki dan berapa watt beban.</Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default KetahananAki

const styles = StyleSheet.create({})
