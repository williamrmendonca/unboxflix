import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import { MaterialCommunityIcons } from '@expo/vector-icons'
import FabButton from './src/componets/FabButton';

//Screens
import Home from './src/screens/home'
import showDetail from './src/screens/showDetail'

import Recents from './src/screens/recents'

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer style={{zIndex: 0, elevation: 5}} >
        <FabButton
          style={{ bottom: 80, right: 0 }}
          bgColor={{ backgroundColor: '#464646'}}
          iconColor='#ffffff'
        />

        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
        >
          
          <Stack.Screen name="Home"component={Home} />
          <Stack.Screen name="showDetail"component={showDetail} />
          <Stack.Screen name="Recents"component={Recents} />
        </Stack.Navigator>
        
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
});

