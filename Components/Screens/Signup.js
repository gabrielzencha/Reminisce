import React, { useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
  
} from 'react-native';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
import RNRestart from 'react-native-restart';
import FormInput from '../FormComponents/FormInput'
import FormButton from '../FormComponents/FormButton';
import SocialButton from '../FormComponents/SocialButton';
import { auth } from '../../firebase';
const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();  
    const onSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          var user = result.user;
          user.updateProfile({
            displayName: name,
            photoURL: imageURL ? imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png",

          }).then(function() {
            
          }).catch(function(error) {
            console.log(error)
          })
            RNRestart.Restart();

        })
        .catch((error)=>{
            alert(error);
        })
    }
  
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Create an account</Text>
  
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          multiline={true}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          labelValue={name}
          onChangeText={(userName) => setName(userName)}
          placeholderText="Name"
          multiline={true}
          iconType="user"
          autoCapitalize="none"
          autoCorrect={false}
        />
  
        <FormInput
          labelValue={password}
          multiline={true}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />
       
  
  
        <FormButton
          buttonTitle="Sign Up"
          onPress={()=>onSignUp()}
        />
  
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms')}>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Privacy Policy
          </Text>
        </View>
  
       
           
      
      
  
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  };
  
  export default SignupScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
   
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
     
      color: 'grey',
    },
  });