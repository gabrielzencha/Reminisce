import React, { useState, useEffect, useContext,useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { auth, db } from '../../firebase';

import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
const ProfileScreen = ({ navigation }) => {
  let textInput = null;
  let  myData = db.collection('userData').doc(auth.currentUser.uid).get().then(querySnapshot => {
     
    setNames(querySnapshot.data()["name"]);
    setPhone(querySnapshot.data()["phone"]);
    setLikes(querySnapshot.data()["likes"]);
    setDisLikes(querySnapshot.data()["dislikes"]);

})

useEffect(() => {
  const unsubscribe = navigation.addListener('focus', () => {
    // The screen is focused
    // Call any action
    myData = db.collection('userData').doc(auth.currentUser.uid).get().then(querySnapshot => {
      setNames(querySnapshot.data()["name"]);
      setPhone(querySnapshot.data()["phone"]);
      setLikes(querySnapshot.data()["likes"]);
      setDisLikes(querySnapshot.data()["dislikes"]);
      setStory(querySnapshot.data()["story"]);
      setE1email(querySnapshot.data()["e1email"]);
      setE1name(querySnapshot.data()["e1name"]);
      setE1relationship(querySnapshot.data()["e1relationship"]);
      setE1phone(querySnapshot.data()["e1phone"]);
      setE2email(querySnapshot.data()["e2email"]);
      setE2name(querySnapshot.data()["e2name"]);
      setE2relationship(querySnapshot.data()["e2relationship"]);
      setE2phone(querySnapshot.data()["e2phone"]);
  
  })
  });

  // Return the function to unsubscribe from the event so it gets removed on unmount
  return unsubscribe;
}, []);

const [phone, setPhone] = useState();
const [names, setNames] = useState();
const [likes, setLikes] = useState();
const [disLikes, setDisLikes] = useState();
const [story, setStory] = useState();   
const [e1name, setE1name] = useState();  
const [e1relationship, setE1relationship] = useState();  
const [e1email, setE1email] = useState();  
const [e1phone, setE1phone] = useState();
const [e2name, setE2name] = useState();  
const [e2relationship, setE2relationship] = useState();  
const [e2email, setE2email] = useState();  
const [e2phone, setE2phone] = useState(); 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={require("../../assets/images/logo.png")}
            
            size={80}
          />

          <View style={{ marginLeft: 17 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              {auth.currentUser.displayName }
            </Title>
            <Caption style={styles.caption}>{names ? names : "Name not entered"}</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
         
          <Text style={{ color: "#000", marginLeft: 5 }}>
          
          </Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="phone" color="#000" size={20} />
          <Text style={{ color: "#000", marginLeft: 17, fontSize: 17}}>
            {phone ? phone:  "no phone number"}
          </Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="envelope" color="#000" size={20} />
          <Text style={{ color: "#000", marginLeft: 17, fontSize: 17}}>
            {auth.currentUser.email}
            </Text>
        </View>
        <Text style={{ color: "#000", fontSize: 17, marginLeft: 3, marginBottom: 10, fontWeight: 'bold'}}>
            My Likes 
            </Text>
            <Text style={{ color: "#000", marginLeft: 10, fontSize: 17, marginLeft: 3, marginBottom: 10}}>
            {likes ? likes : "Likes not set"}
        </Text>
        <Text style={{ color: "#000", fontSize: 17, marginLeft: 3, marginBottom: 10, fontWeight: 'bold'}}>
            My Dislikes
            </Text>
            <Text style={{ color: "#000",  fontSize: 17, marginLeft: 3, marginBottom: 10}}>
            {disLikes ? disLikes : "Dislikes not set"}
        </Text>
        <Text style={{ color: "#000", fontSize: 17, marginLeft: 3, marginBottom: 10, fontWeight: 'bold'}}>
            Story of my life
            </Text>
            <Text style={{ color: "#000",fontSize: 17, marginLeft: 3, marginBottom: 10}}>
            {story ? story : "No story of my life"}
        </Text>
        <Text style={{ color: "#000", fontSize: 17, marginLeft: 3, marginBottom: 10, fontWeight: 'bold'}}>
            First Emergency Contact Name
            </Text>
            <Text style={{ color: "#000", marginLeft: 3, marginBottom: 10, fontSize: 17}}>
            {e1name ? e1name : "Name not set"}
        </Text>

        <Text style={{ color: "#000", fontSize: 17, marginLeft: 3, marginBottom: 10, fontWeight: 'bold'}}>
            First Emergency Contact phone
            </Text>
            <Text style={{ color: "#000", marginLeft: 3, marginBottom: 10, fontSize: 17}}>
            {e1phone ? e1phone : "Phone not set"}
        </Text>
        <Text style={{ color: "#000", fontSize: 17, marginLeft: 3, marginBottom: 10, fontWeight: 'bold'}}>
            First Emergency Contact Relationship
            </Text>
            <Text style={{ color: "#000", marginLeft: 3, marginBottom: 10, fontSize: 17}}>
            {e1relationship ? e1relationship : "Relationship not set"}
        </Text>
        <Text style={{ color: "#000", fontSize: 17, marginLeft: 3, marginBottom: 10, fontWeight: 'bold'}}>
            Second Emergency Contact name
            </Text>
            <Text style={{ color: "#000", marginLeft: 3, marginBottom: 10, fontSize: 17}}>
            {e2name ? e2name : "Name not set"}
        </Text>

        <Text style={{ color: "#000", fontSize: 17, marginLeft: 3, marginBottom: 10, fontWeight: 'bold'}}>
            Second Emergency Contact phone
            </Text>
            <Text style={{ color: "#000", marginLeft: 3, marginBottom: 10, fontSize: 17}}>
            {e2phone ? e2phone : "Phone not set"}
        </Text>
        <Text style={{ color: "#000", fontSize: 17, marginLeft: 3, marginBottom: 10, fontWeight: 'bold'}}>
            Second Emergency Contact Email
            </Text>
            <Text style={{ color: "#000", marginLeft: 3, marginBottom: 10, fontSize: 17}}>
            {e2email ? e2email : "Email not set"}
        </Text>
        <Text style={{ color: "#000", fontSize: 17, marginLeft: 3, marginBottom: 10, fontWeight: 'bold'}}>
            Second Emergency Contact Relationship
            </Text>
            <Text style={{ color: "#000", marginLeft: 3, marginBottom: 10, fontSize: 17}}>
            {e2relationship ? e2relationship : "Relationship not set"}
        </Text>
     </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {

    flexDirection: "row",
    marginBottom: 10,
  },

  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  menuWrapper: {
    marginTop: 10,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#000",
    marginLeft: 17,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
