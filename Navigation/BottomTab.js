
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from '../Screens/favorites';
import Setting from '../Screens/setting';
import Visits from '../Screens/visits';
import visitDetail from '../Screens/visitDetail'
import favoritesDetail from '../Screens/favoritesDetail'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();
const Vstack = createStackNavigator();
const Fstack = createStackNavigator();

export const VisitStack = () => {
  return (

    <Vstack.Navigator>
      <Vstack.Screen name="Visits" component={Visits}  options={{ headerShown: false }}/>
      <Vstack.Screen name="visitDetail" component={visitDetail} options={{ title:'Visit Detail'}}/>
    </Vstack.Navigator>
  )
}

export const FavoritesStack = () => {
  return (

    <Fstack.Navigator>
      <Fstack.Screen name="Favorites" component={Favorites}  options={{ headerShown: false }} />
      <Fstack.Screen name="favoritesDetail" component={favoritesDetail} options={{ title:'Favorites Persons Detail'}} />
    </Fstack.Navigator>
  )
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: 'red',
    }}>

      <Tab.Screen name="VisitStack" component={VisitStack} options={{
        tabBarLabel: 'Visits',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="th" color={color} size={size} />
        ),
      }} />

      <Tab.Screen name="FavoritesStack" component={FavoritesStack} options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="heart" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Setting" component={Setting} options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="cog" color={color} size={size} />
        ),
      }} />


    </Tab.Navigator>
  );
};

export default BottomTabNavigator;