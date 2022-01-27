import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
} from 'react-native';
import axios from 'axios';
import Pie from 'react-native-pie';
import { ScrollView } from 'react-native-gesture-handler';
import {notifikasi} from '../Notifikasi/index'
import moment from 'moment';
import 'moment-duration-format';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

export default function Monitoring () {
   
    const [data, setData]= useState()
    const[loading, setLoading]= useState( true)
    const [isFirst, setIsFirst]= useState(false)


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
    
         useEffect(()=> {
            if(!isFirst){
                if((data?.[data?.length-1].voltageac)>250){
                    klikNotif1()
                    setIsFirst(true) 
                };
                if((data?.[data?.length-1].currentac/1000)>100){
                    klikNotif2()
                    setIsFirst(true) 
                };
                if((data?.[data?.length-1].voltagedc)>26){
                    klikNotif3()
                    setIsFirst(true)
                };
                if((data?.[data?.length-1].currentdc/1000)>3.2){
                    klikNotif4() 
                    setIsFirst(true) 
                };
            }
        },[isFirst, data]);

    useEffect(()=>{
        const timers = setInterval(()=>{
            if(isFirst){
                if((data?.[data?.length-1].voltageac)>250){
                    klikNotif1() 
                };
                if((data?.[data?.length-1].currentac/1000)>100){
                    klikNotif2()   
                };
                if((data?.[data?.length-1].voltagedc)>26){
                    klikNotif3()  
                };
                if((data?.[data?.length-1].currentdc/1000)>3.2){ 
                    klikNotif4() 
                };
            }}, 3000)
        return function cleanup() {
            clearInterval(timers)
        }});
   
                    
        if(loading){
            return<View style={{flex: 1 ,backgroundColor:'#F0F8FF', alignItems: 'center', justifyContent:'center'}}>
                <Text style={{alignItems: 'center', justifyContent: 'center', color: 'black'}}>Loading.. </Text>
            </View>
        }

    //ambil data
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

    const klikNotif1 = () => {
        notifikasi.configure();
        notifikasi.buatChannel("1");
        notifikasi.kirimNotifikasi("1", "Pengukuran melebihi range", "voltage AC maks hingga 260V");
        // notifikasi.kirimNotifikasiJadwal("1", "Pengukuran melebihi range", "voltage AC maks hingga 260V");
    };
    const klikNotif2 = () => {
        notifikasi.configure();
        notifikasi.buatChannel("2");
        notifikasi.kirimNotifikasi("2", "Pengukuran melebihi range", "current AC maks hingga 100A ");
    };
    const klikNotif3 = () => {
        notifikasi.configure();
        notifikasi.buatChannel("3");
        notifikasi.kirimNotifikasi("3", "Pengukuran melebihi range", "voltage DC maks hingga 26V");
    };
    const klikNotif4 = () => {
        notifikasi.configure();
        notifikasi.buatChannel("4");
        notifikasi.kirimNotifikasi("4", "Pengukuran melebihi range", "current DC maks hingga 3.2A");
        // notifikasi.kirimNotifikasiJadwal("4", "per Pengukuran melebihi range", "current DC maks hingga 3.2A");
    };

    
    const dateToFormat = moment(data?.[data?.length-1]?.time).format('LLL');

        return ( 
            <>
            <SafeAreaView>
                <View style={{backgroundColor: '#F0F8FF'}}>
                    <View style={{backgroundColor: '#49809a',padding: 20, marginBottom: 15, paddingLeft: 20}}>
                        <Text style={{alignSelf: 'center', color: 'white',fontWeight:'bold', fontSize: responsiveFontSize(3)}}>MONITORING</Text>
                    </View>
                    <ScrollView style={{marginBottom: 180, flexGrow: 1}}>
                        <View style={{alignItems: 'center', marginBottom: 10}}>
                            <Text style={{fontWeight:'bold', color:'#49809a', fontSize: responsiveFontSize(2)}}>TIME : {dateToFormat}</Text>
                        </View>
                        {/* AC */}
                        <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 20}}>
                            <View style={{ width: 175, alignItems: 'center'}}>
                                <Pie
                                radius={80}
                                innerRadius={55}
                                sections={[
                                    {
                                    percentage: (currentAC/100)*100,
                                    color: '#47d7fb',
                                    },
                                ]}
                                strokeCap={'butt'}
                                />
                                <View style={styles.gauge}>
                                <Text style={styles.Text}>{currentAC}</Text>
                                <Text style={styles.gaugeText}>A</Text>
                                </View> 
                                    <View style={{marginTop: 15}}>
                                        <Text style={{fontWeight:'bold', color: '#49809a'}}>CURRENT AC</Text>  
                                    </View>
                                </View>
                            <View style={{width: 175, alignItems: 'center'}}>
                            <Pie
                            radius={80}
                            innerRadius={55}
                            sections={[
                                {
                                percentage: (voltageAC/250)*100,
                                color: '#47d7fb',
                                },
                            ]}
                            strokeCap={'butt'}                       
                            />
                                <View style={styles.gauge} >
                            <Text style={styles.Text}>{voltageAC}</Text>
                            <Text style={styles.gaugeText}>V</Text>
                            </View> 
                            <View style={{marginTop: 15}}>
                            <Text  style={{fontWeight:'bold', color: '#49809a'}}>VOLTAGE AC</Text>  
                            </View>
                        </View>
                        </View>
                        <View style={{flexDirection: 'row',justifyContent: 'center', marginTop: 10}}>
                            <View style={{width: 175, alignItems: 'center'}}>
                            <Pie 
                                radius={50}
                                innerRadius={35}
                                sections={[
                                    {
                                    percentage: (dayaAC/25000)*100,
                                    color: '#47d7fb',
                                    },
                                ]}
                                strokeCap={'butt'}
                            />
                                <View style={styles.gauge} >
                                    <Text style={{fontSize: 15, color: '#49809a', fontWeight:'bold'}}>{dayaAC}</Text>
                                    <Text style={{fontSize: 10, color: '#49809a', marginBottom: 55,fontWeight:'bold'}}>Watt</Text>
                                </View>  
                                <View style={{marginTop: 12}}>
                                    <Text style={{fontWeight:'bold', color: '#49809a'}}>DAYA AC</Text>  
                                </View>    
                        </View>
                        <View style={{width: 175, alignItems: 'center'}}>
                            <Pie 
                                radius={50}
                                innerRadius={35}
                                sections={[
                                    {
                                    percentage: (dayaDC/83.2)*100,
                                    color: '#47d7fb',
                                    },
                                ]}
                                strokeCap={'butt'}
                            />
                                <View style={styles.gauge} >
                                    <Text style={{fontSize: 15, color: '#49809a',fontWeight:'bold' }}>{dayaDC}</Text>
                                    <Text style={{fontSize: 10, color: '#49809a', marginBottom: 55,fontWeight:'bold'}}>Watt</Text>
                                </View>
                            <View style={{marginTop: 12}}>
                                <Text style={{fontWeight:'bold', color: '#49809a'}}>DAYA DC</Text>  
                            </View>  
                            </View>
                        </View>

                {/* DC */}
                 
                <View style={{flexDirection:'row', marginTop: 20, justifyContent: 'center'}}>
                <View style={{ width: 175, alignItems: 'center'}}>
                    <Pie
                    radius={80}
                    innerRadius={55}
                    sections={[
                        {
                        percentage: (currentDC/3.2)*100,
                        color: '#47d7fb',
                        },
                    ]}
                    strokeCap={'butt'}
                    />
                        <View style={styles.gauge}>
                            <Text style={styles.Text}>{currentDC}</Text>
                            <Text style={styles.gaugeText}>A</Text>
                        </View>
                    <View style={{marginTop: 15}}>
                    <Text style={{fontWeight:'bold', color: '#49809a'}}>CURRENT DC</Text>    
                    </View>
                </View>
                <View style={{ width: 175, alignItems: 'center'}}> 
                    <Pie
                    radius={80}
                    innerRadius={55}
                    sections={[
                        {
                        percentage: (voltageDC/26)*100,
                        color: '#47d7fb',
                        },
                    ]}
                    strokeCap={'butt'} 
                    />
                        <View
                        style={styles.gauge}
                    >
                    <Text style={styles.Text}>{voltageDC}</Text>
                    <Text style={styles.gaugeText}>V</Text>

                    </View> 
                    <View style={{marginTop: 15}}>
                    <Text  style={{fontWeight:'bold', color: '#49809a'}}>VOLTAGE DC</Text>  
                    </View>
                </View>       
                </View>
                </ScrollView>
                    </View>
            </SafeAreaView>

            
            </>
         );
    }

    const styles = StyleSheet.create({
        container: { 
            alignItems: 'center',
            justifyContent: 'center', 
            height: 1050 
        },
        gauge: {
          position: 'absolute',
          width: 100,
          height: 160,
          alignItems: 'center',
          justifyContent: 'center',
          color:'black',
        },
        gaugeText: {
          backgroundColor: 'transparent',
          color: '#49809a',
          fontSize: 13,
          fontWeight:'bold'
        },
        Text:{
            backgroundColor: 'transparent',
            color: '#49809a',
            fontSize: 35,
            fontWeight:'bold'
        }
      })
