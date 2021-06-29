
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

const Visits = (props) => {
    const [data, setData] = useState([])
    const [arr, setArr] = useState([])
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        await fetch("https://dummyapi.io/data/api/user?limit=100",
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'app-id': '600c4c7e43aa981852b532ef'
                },
            })
            .then(async res => {
                return await res.json()
            })

            .then((response) => {
                console.log('response >>>>>>>>>>>>>', response)
                setData(response.data)
                setArr(response.data)
                setLoading(false)
            }
            )

    }

    const searchFilterFunction = text => {

        setValue(text)

        const newData = arr.filter(item => {
            const itemData = `${item.firstName.toUpperCase()}, 
            ${item.title.toUpperCase()}, ${item.lastName.toUpperCase()}, ${item.email.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        setData(newData)
    };

    // useEffect(()=> {
    //     const d = arr.filter ((item,index) => item.firstName.toUpperCase().includes(value))
    //     setData(d)
    // },[value])

    const renderHeader = () => {
        return (
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                onChangeText={text => searchFilterFunction(text)}
                autoCorrect={false}
                value={value}
            />
        );
    };

    const renderItem = (item) => {
        return (

            <View style={{ flex: 1 }}>

                <TouchableOpacity onPress={() => props.navigation.navigate('visitDetail', {item})}>
                    <Card containerStyle={{ alignItems: 'center', alignSelf: 'center', width: '87%' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Image style={{ height: 150, width: 150, alignSelf: 'center' }}
                                source={{ uri: item.picture }} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15 }}>{item.title} </Text>
                                <Text style={{ marginBottom: "1%", fontSize: 15 }}>{item.firstName}</Text>
                            </View>
                            <Text style={{ marginTop: "1%" }}>{item.lastName}</Text>
                            <Text style={{ marginTop: "1%" }}>{item.email}</Text>
                        </View>
                    </Card>
                </TouchableOpacity>
            </View>
        )
    }

    return (

        <View style={{ flex: 1 }}>

            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color={'red'} size="large" />
                </View>
            ) : (
                <View style={{ flex: 1 }}>

                    <FlatList
                        data={data}
                        renderItem={({ item }) => renderItem(item)}
                        keyExtractor={item => item.id}
                        ListHeaderComponent={renderHeader()}
                        ListEmptyComponent={() =>
                            <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 20 }}>No Data Found</Text>
                        }
                        numColumns={2}
                    />

                </View>
            )}


        </View>


    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    textInput: {
        borderBottomWidth: 2,
        height: 50,
        width: '90%',
        marginTop: '8%',
        borderColor: '#0AE1F6',
        marginLeft: '5%'
    },

})

export default Visits;