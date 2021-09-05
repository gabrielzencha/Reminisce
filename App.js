
import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import { ActivityIndicator, View , Text, StyleSheet, Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const  ProfileStack = createStackNavigator();
import Landing1Screen from './Components/Screens/Landing1';
import LoginScreen from './Components/Screens/Login';
import SignUpScreen from './Components/Screens/Signup';
import AboutMe from './Components/AppComponents/AboutMe';
import UserGuide from './Components/AppComponents/UserGuide';
import MessageScreen from './Components/AppComponents/MessageScreen.js';
import ChatScreen from './Components/Screens/ChatScreen';
import Memories from './Components/AppComponents/Memories';
import EditProfileScreen from './Components/AppComponents/EditProfileScreen';
import * as firebase from 'firebase'


const  firebaseConfig = {
  apiKey: "AIzaSyB_Uy-AxO10Kv2kwbUot5KmCNYHGotLIeE",
  authDomain: "reminisce-7b4e3.firebaseapp.com",
  projectId: "reminisce-7b4e3",
  storageBucket: "reminisce-7b4e3.appspot.com",
  messagingSenderId: "256052502175",
  appId: "1:256052502175:web:e09315ae4f8cc5600d4caa",
  measurementId: "G-76547HJD47"
};

if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      loaded:false
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }
      else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })

  }
  render() {
    const {loggedIn, loaded} = this.state;
    if(!loaded){
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }
    if(!loggedIn){
      return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing1Screen} options={{ headerShown: false }} />
        
          <Stack.Screen name="Login" component={LoginScreen} options={{header: () => null}} />
          <Stack.Screen
           name="Signup"
           component={SignUpScreen}
           options={({navigation}) => ({
             title: '',
             headerStyle: {
               backgroundColor: '#f9fafd',
               shadowColor: '#f9fafd',
               elevation: 0,
             },
             headerLeft: () => (
               <View style={{marginLeft: 10}}>
                 <FontAwesome.Button 
                   name="long-arrow-left"
                   size={25}
                   backgroundColor="#f9fafd"
                   color="#333"
                   onPress={() => navigation.navigate('Login')}
                 />
               </View>
             ),
           })}
          />
     
      </Stack.Navigator>
      </NavigationContainer>
    )
    }
    else {
      return (
        <NavigationContainer>
        <Tab.Navigator
       screenOptions = {{tabBarStyle:{
        showLabel:false,
            style: {
             position: 'absolute',
             bottom: 25,
             left: 20,
             eleavation: 0,
             backgroundColor: '#fff',
            borderRaduis: 15,
            height: 100,
            ...style.shadow
       }}}
          }
        >
          <Tab.Screen name="About Me" component={ProfileStackScreen} 
          options = {{
            tabBarIcon: ({focused}) => (
              <View>
                <Image 
                  source={require('./assets/icons/profile.png')}
                  resizeMode = 'contain'
                  style={{
                    width: 25,
                    height: 50,
                    tintColor: focused ? '#e32f45' : '#748c94'
                  }}
                />
              </View>
            )
          }}
            
            />
          <Tab.Screen name="User Guide" component={UserGuide} 
             options = {{
              tabBarIcon: ({focused}) => (
                <View>
                  <Image 
                    source={require('./assets/icons/guide.png')}
                    resizeMode = 'contain'
                    style={{
                      width: 25,
                      height: 50,
                      tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                  />
                </View>
              )
            }}
          />
          <Tab.Screen name="Messages" component={MessageStack}
             options = {{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <View>
                  <Image 
                    source={require('./assets/icons/chat.png')}
                    resizeMode = 'contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                  />
                </View>
              )
            }}
          />
          <Tab.Screen name="Memories" component={Memories} 
             options = {{
              tabBarIcon: ({focused}) => (
                <View>
                  <Image 
                    source={require('./assets/icons/memories.png')}
                    resizeMode = 'contain'
                    style={{
                      width: 25,
                      height: 50,
                      tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                  />
                </View>
              )
            }}
          />
          </Tab.Navigator>
      </NavigationContainer>
      )
    }
    
  }
};
const MessageStack = ({navigation})=> (
  <Stack.Navigator >

    <Stack.Screen name="Messages" component={MessageScreen}/>
    <Stack.Screen 
    name="Chat" 
    component={ChatScreen} 
    options={({route}) => ({
      title: route.params.userName,
      headerBackTitleVisible: false,
    })}/>
  </Stack.Navigator>
);
const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions = {{
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: "#fff",
        elevation: 0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  > 
  <ProfileStack.Screen
    name="profile"
    component={AboutMe}
    options ={{
      headerRight: () =>(
        <FontAwesome.Button
          name='edit'
          size={25}
          backgroundColor="#fff"
          color= "#000"
          onPress={()=> navigation.navigate('EditProfile')}
        />
      ),
    }}
  
  />
<ProfileStack.Screen
name="EditProfile"
options = {{
  title: 'Edit Profile'

}}
component={EditProfileScreen}

/>
  </ProfileStack.Navigator>
);
const style = StyleSheet.create({
    shadow: {
      shadowColor: "#7f5df0",
      shadowOffset: {
        width: 0,
        height: 10,
      }, 
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
    },

})
  
 


