
import React, { useState, useContext, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator,
    FlatList
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Card } from 'react-native-elements'
import { ListItem, SearchBar } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const visitDetail = (props) =>{
    
    const item = (props.route.params.item)

    const [ data1 , setData1] = useState([item])

    console.log('props: >>>>><<<<<<<', props)

    const saveValue = async () => {
        try {
          await AsyncStorage.setItem('key',JSON.stringify(data1))
          .then(()=>{
              console.log("data local storage", item)
          })
        } catch (error) {
          console.log(error)
        }
      };

    



    return (
           
        <View style={{flex:1}}>
            <Card containerStyle={{ alignItems: 'center', alignSelf: 'center', width: '87%' }}>

                <TouchableOpacity onPress={()=>saveValue()}>
            <FontAwesome5 style={{alignSelf:'flex-end'}} name="heart" color={'red'} size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>getValue()}>
            <FontAwesome5 style={{alignSelf:'flex-end'}} name="heart" color={'black'} size={30} />
            </TouchableOpacity>
                <View style={{ flexDirection: 'column' }}>
                    <Image style={{ height: 300, width: 250, alignSelf: 'center' }}
                        source={{ uri: item.picture }} />
                    <Text style={{ marginBottom: "1%" }}>Id : {item.id}</Text>
                    <Text style={{  marginBottom: "1%", fontSize:15 }}>First Name : {item.firstName}</Text>
                    <Text style={{  marginBottom: "1%" }}>Last Name : {item.lastName}</Text>
                    <Text style={{ marginBottom: "1%" }}>Email : {item.email}</Text>
                </View>
            </Card>
       
        </View>
    )
}

export default visitDetail;