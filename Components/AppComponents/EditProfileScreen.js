import React, { useState, useContext, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { auth, db, storage } from "../../firebase";
import * as firebase from 'firebase'
export default function EditProfileScreen(props) {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
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

  function removeEmpty(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v != null)
    );
  }
  const updateProfile = async () => {
   
    const updates = removeEmpty({
      phone: phone,
      name: names,
      likes: likes,
      dislikes: disLikes,
      story: story,
      e1name: e1name,
      e1relationship: e1relationship,
      e1phone: e1phone,
      e2name: e2name,
      e1email: e1email,
      e2phone: e2phone,
      e2email: e2email,
      e2relationship: e2relationship,
      
    });
  //console.log(updates)
    db.collection("userData")
      .doc(auth.currentUser.uid)
      .update(updates)
      .then(() => {
        console.log("User Updated!");
        alert(
          "Profile Updated!"+
          "Your profile has been updated successfully."
        );
        props.route.params.navigation.navigate('profile');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const choosePhotoFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf("/") + 1);

    // Add timestamp to File Name
    const extension = filename.split(".").pop();
    const name = filename.split(".").slice(0, -1).join(".");
    filename = name + Date.now() + "." + extension;

    setUploading(true);
    setTransferred(0);
    
    const storageRef = firebase.storage().ref().child('dfdf');
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on("state_changed", (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      // Alert.alert(
      //   'Image uploaded!',
      //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      // );
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <ScrollView 
    keyboardShouldPersistTaps={'handled'}
    style={styles.container}>
      <View style={{ margin: 20 }}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={choosePhotoFromLibrary}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={require("../../assets/images/logo.png")}
                style={{
                  height: 100,
                  width: 100,
                }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="camera"
                    color="#fff"
                    size={35}
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#000",
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
            {auth.currentUser.displayName}
          </Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            labelvalue={names}
            onChangeText={(names) => setNames(names)}
            multiline={true}
            placeholder={"enter first name and last name"}
            placeholderTextColor="#000"
            style={styles.textInput}
            autoCorrect={false}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="phone" size={20} />
          <TextInput
            labelvalue={phone}
            onChangeText={(phone) => setPhone(phone)}
            multiline={true}
            placeholder={"enter phone number"}
            placeholderTextColor="#000"
            style={styles.textInput}
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="thumbs-up" size={20} />
          <TextInput
            labelvalue={likes}
            onChangeText={(likes) => setLikes(likes)}
            multiline={true}
            placeholder={"Enter your likes"}
            placeholderTextColor="#000"
            style={styles.textInput}
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="thumbs-down" size={20} />
          <TextInput
            labelvalue={disLikes}
            onChangeText={(disLikes) => setDisLikes(disLikes)}
            multiline={true}
            placeholder={"Enter dislikes"}
            placeholderTextColor="#000"
            style={styles.textInput}
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="history" size={20} />
          <TextInput
            multiline={true}
            placeholderTextColor="#000"
            style={styles.textInput}
            onChangeText={(story) => setStory(story)}
            autoCorrect={true}
            placeholder={"Enter story of your life"}
            labelvalue={story}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="address-book" size={20} />
          <TextInput
            multiline={true}
            placeholder={"First Emergency Contact Name"}
            placeholderTextColor="#000"
            style={styles.textInput}
            autoCorrect={false}
            labelvalue={e1name}
            onChangeText={(e1name) => setE1name(e1name)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="link" size={20} />
          <TextInput
            multiline={true}
            placeholder={"First Emergency Contact Relationship"}
            placeholderTextColor="#000"
            style={styles.textInput}
            autoCorrect={false}
            labelvalue={e1relationship}
            onChangeText={(e1relationship) => setE1relationship(e1relationship)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope" size={20} />
          <TextInput
            multiline={true}
            placeholder={"First Emergency Contact Email"}
            placeholderTextColor="#000"
            style={styles.textInput}
            autoCorrect={false}
            labelvalue={e1email}
            onChangeText={(e1email) => setE1email(e1email)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="phone" size={20} />
          <TextInput
            multiline={true}
            placeholder={"First Emergency Contact Telephone"}
            placeholderTextColor="#000"
            style={styles.textInput}
            labelvalue={e1phone}
            onChangeText={(e1phone) => setE1phone(e1phone)}
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="address-book" size={20} />
          <TextInput
            multiline={true}
            placeholder={"Second Emergency Contact Name"}
            placeholderTextColor="#000"
            style={styles.textInput}
            autoCorrect={false}
            labelvalue={e2name}
            onChangeText={(e2name) => setE2name(e2name)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="link" size={20} />
          <TextInput
            multiline={true}
            placeholder={"Second Emergency Relationship"}
            placeholderTextColor="#000"
            style={styles.textInput}
            labelvalue={e2relationship}
            onChangeText={(e2relationship) => setE2relationship(e2relationship)}
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope" size={20} />
          <TextInput
            multiline={true}
            placeholder={"Second Emergency Contact Email"}
            placeholderTextColor="#000"
            style={styles.textInput}
            autoCorrect={false}
            labelvalue={e2email}
            onChangeText={(e2email) => setE2email(e2email)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="phone" size={20} />
          <TextInput
            multiline={true}
            placeholderTextColor="#000"
            style={styles.textInput}
            autoCorrect={false}
            labelvalue={e2phone}
            onChangeText={(e2phone) => setE2phone(e2phone)}
            placeholder={"Second Emergency Contact Telephone"}
          />
        </View>
      </View>
      <TouchableOpacity onPress={updateProfile} style={styles.commandButton}>
        <Text style={styles.panelButtonTitle}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    width: "100%",
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#2e64e5",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    fontSize: 19,
    paddingLeft: 10,
    color: "#333333",
  },
});
