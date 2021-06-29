import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab"
import Login from "../Screens/login";
import Visits from "../Screens/visits";
import visitDetail from "../Screens/visitDetail";

const Stack = createStackNavigator();

const StackNavigation = () =>{
    return(
        <Stack.Navigator>
           <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>

      </Stack.Navigator>
    )
}

export { StackNavigation };