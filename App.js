import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './source/HomeScreen';
import TimeRL from './source/Lab1_2';
import {NavigationContainer} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size}) => {
            let myIcon;
            if (route.name == "Home") {
              myIcon = "home";
            }
            else if (route.name = "Lab1_2") {
              myIcon = "clockcircleo";
            }
            return <AntDesign name={myIcon} size={24} color="black" />
          }
        })}  
      >
      
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Lab1_2" component={TimeRL} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;