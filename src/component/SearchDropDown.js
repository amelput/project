import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SearchDropDown(props)  {
    const{dataSource}= props
    return (
        <View style={{
            position: 'absolute', 
            top : '6%', 
            left: 0, 
            right: 0, 
            bottom: 0,
            // backgroundColor: 'gray',
            // opacity: 0.2,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            }}>
            <View style={{flexWrap: 'wrap', marginHorizontal: 20, backgroundColor: 'black'}}>

{
    dataSource.map(item=>{
        return(
            <View style={{marginHorizontal:'11%', backgroundColor: 'white', marginVertical: 10, height: 20}}>
                <Text style={{color:'black'}}>{item}</Text>
            </View>
     ) })
}
            </View>
        </View>
    )
}



const styles = StyleSheet.create({})
