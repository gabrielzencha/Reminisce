import React, {Component} from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import LoginScreen from '../Screens/Login';
import DetailScreen from '../Screens/Details';



const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default class App extends Component {
  
  render() {
      return (
      <NavigationContainer>
          <Tab.Navigator>
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Details" component={DetailScreen} />
    </Tab.Navigator>
         {/* <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailScreen} />
    </Drawer.Navigator>*/}
        {/*<Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={DetailScreen}  />
         
         
      </Stack.Navigator>*/}

      </NavigationContainer>
      );
    }
   
}

