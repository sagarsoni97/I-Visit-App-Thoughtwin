
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
    ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const userInfo = { username: 'admin', password: 'sagar123' }

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [token, setToken] = useState(null)

    // console.log('token check kar rhe h',token)

    const loginCheck = async() => {
        fetch("https://reqres.in/api/login",
        {
            method:"POST",
            headers: {
             'Content-Type': 'application/json'
           },
           body:JSON.stringify({
             "email":username,
             "password":password
           })
            })
             .then(res=>res.json())
            .then(data=>{


    props.navigation.navigate("Home")
                
        }
        )
    }

    
    return (

        <View style={styles.container}>
            <TextInput placeholder='Email'
                style={styles.textInput}
                onChangeText={(username) => setUsername(username)}
                keyboardType='email-address'
                autoCapitalize='none'
                value={username}
            ></TextInput>

            <TextInput placeholder='Password'
                style={styles.textInput}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
                value={password}
            ></TextInput>

            <TouchableOpacity onPress={() => loginCheck()} style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },

    textInput: {
        borderBottomWidth: 2,
        height: 50,
        width: '90%',
        marginTop: '8%',
        borderColor: '#0AE1F6',
        marginLeft: '5%'
    },

    btn: {
        marginTop: '10%',
        backgroundColor: '#0AE1F6',
        height: 50,
        width: '90%',
        borderRadius: 30,
        marginLeft: '5%'
    },

    btnText: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10
    }
})

export default Login;