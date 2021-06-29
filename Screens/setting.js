
import React, { useState, useContext } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Setting = (props) => {

    
    return (

        <View style={styles.container}>
            <View style={{marginTop:'5%'}}>
            <TouchableOpacity
             style={{flexDirection:'row', justifyContent:'space-around', width:400, backgroundColor:'yellow'}}>
               <Text>Logout</Text>
               <FontAwesome5 name="arrow-right" color={'black'} size={20} />
           </TouchableOpacity>
           
           </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default Setting;