import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
 
    const Drawer = createDrawerNavigator();
    
    return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen}/>
    <Drawer.Screen name="Details" component={DetailScreen}/>
    </Drawer.Navigator>
    </NavigationContainer>
    
    )}
    const HomeScreen = () => {
      return (
      <View style={{flex: 1, alignItems: 'center'
      , justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      </View>
      )
      }
      const DetailScreen = () => {
        return (
        <View style={{flex: 1, alignItems: 'center'
        , justifyContent: 'center'}}>
        <Text>detail Screen</Text>
        </View>
        )
        }
    
    
  
  
;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
