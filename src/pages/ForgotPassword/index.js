import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Pie from 'react-native-pie';


const Diagram = () => {
    return (
        <View style ={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <View style={{ width: 160, alignItems: 'center' }}>
            <Pie
              radius={80}
              innerRadius={75}
              sections={[
                {
                  percentage: 60,
                  color: 'green',
                },
              ]}
              backgroundColor="#ddd"
            />
            <View style={styles.gauge} >
              <Text style={styles.gaugeText}> 60% </Text>
            </View>
          </View>
        </View>
    )
}

export default Diagram

const styles = StyleSheet.create({})
 