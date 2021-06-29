import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./Navigation/BottomTab";

const App = () => {

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'red'
}
});

export default App;
