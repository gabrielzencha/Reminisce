import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={require("../../assets/images/logo.png")}
            size={80}
          />

          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              John Doe
            </Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <FontAwesome name="map-marker" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            London, United Kingdom
          </Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {" "}
            +44 123 456 789
          </Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="envelope" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {" "}
            reminisce2021@hotmail.com
            </Text>
        </View>
        
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox], {
          borderRightColor: '#dddddd',
          borderRightWidth: 1, 
          flex: 1,
          alignItems: 'center', 
          justifyContent: 'center'
        }}>
          <Title>StoryOfMyLife</Title>
          <Caption>I was born in Manchester and grew up in a family of 4. At 17, I left school and worked as a typing assistant where I met Anthony. We married 3years after and moved to London where we had three sons. He worked in the navy and I became a housewife to look after the children and also did sewing. We had a happy life but sadly in 2016, Anthony died. </Caption>
          </View>
          <View style={[styles.infoBox], {
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
          <Title>MyLikesAndDislikes</Title>
          <Caption>I love being in the company of others and talking about my past experiences. I also enjoy walking and celebrated my 50th birthday walking in the Lake District. I hate being ordered around. </Caption>
          </View>
      </View>
      <View style={styles.menuWrapper}>
          <TouchableRipple onPress={()=> {}}>
            <View style={styles.menuItem}>
              <FontAwesome name="heart-o" color="#ff6347" size={25}/>
              <Text style={styles.menuItemText}>Your Favourites</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={()=> {}}>
            <View style={styles.menuItem}>
              <FontAwesome name="share" color="#ff6347" size={25}/>
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={()=> {}}>
            <View style={styles.menuItem}>
              <FontAwesome name="gears" color="#ff6347" size={25}/>
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={()=> {}}>
            <View style={styles.menuItem}>
              <FontAwesome name="support" color="#ff6347" size={25}/>
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
      </View>
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
    fontSize: 24,
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
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
