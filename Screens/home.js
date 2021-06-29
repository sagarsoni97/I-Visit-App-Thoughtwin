
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

const Home = (props) => {

   
    return (

        <View style={styles.container}>
           <Text>This is Home Page</Text>
          
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    }
})

export default Home;