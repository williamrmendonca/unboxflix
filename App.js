// expo init appVipFa
// cd appVipFa
// expo install @react-navigation/native
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// expo install @react-navigation/material-bottom-tabs react-native-paper
// expo install react-native-anchor-carousel


// yarn add @react-navigation/native
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// yarn add @react-navigation/material-bottom-tabs react-native-paper
// yarn add react-native-anchor-carousel


// code . 


import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons'

//Screens
import Home from './screens/home'
import showDetail from './screens/showDetail'

import Profile from './screens/profile'
import Recents from './screens/recents'
import Teste from './screens/teste'

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

// const FeedStack = createStackNavigator({
//   Feed: {
//     screen: Teste1,
//     navigationOptions: {
//       headerTitle: 'Feed',
//     },
//   },
//   Details: {
//     screen: Teste2,
//     navigationOptions: {
//       headerTitle: 'Details',
//     },
//   },
// });


export default function App() {
  return (
      <NavigationContainer>
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

    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName="Home"
    //     activeColor="#5C9BF9"
    //     inactiveColor="#dedede"
    //     style={{backgroundColor: '#000'}}
    //     barStyle={{backgroundColor: '#0f0f0f', padding: 4}}
    //   >
    //     <Tab.Screen 
    //       name="Home" 
    //       component={Home} 
    //       options={{
    //         tabBarLabel: 'Início',
    //         tabBarIcon: ({color}) => (
    //           <MaterialCommunityIcons name='home' color={color} size={28} />
    //         )
    //       }}
    //     />
    //     <Tab.Screen 
    //       name="Profile" 
    //       component={Profile} 
    //       options={{
    //         tabBarLabel: 'Favoritos',
    //         tabBarIcon: ({color}) => (
    //           <MaterialCommunityIcons name='camera-front-variant' color={color} size={28} />
    //         )
    //       }}
    //     />

    //     <Tab.Screen 
    //       name="Recents" 
    //       component={Recents} 
          
    //       options={{
    //         tabBarLabel: 'Lives',
    //         tabBarIcon: ({color}) => (
    //           <MaterialCommunityIcons name='account' color={color} size={28} />
    //         )
    //       }}
    //     />



    //   </Tab.Navigator>
    // </NavigationContainer>
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

