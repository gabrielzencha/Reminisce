import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class UserGuide extends Component {
  render() {
    return (
      <ScrollView
      keyboardShouldPersistTaps={'handled'}
      >
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            padding: 10,
            alignItems: "center",
          }}
        >
          How To Use Reminisce
        </Text>

        <Text style={styles.textBody}>
          1) Tab the pencil in the "About Me" page and give some information about
          yourself and tab submit.
        </Text>

        <Text style={styles.textBody}>
          2) To send a text, go to "Messages", type your message and click send.

        </Text>

        <Text style={styles.textBody}>
          3) To respond to someone’s message, click on that person’s message,
          type your reply, and click send.
        </Text>

        <Text style={styles.textBody}>
          4) You will get notifications when someone living locally sends a new
          message or replies to your message.
        </Text>

        <Text style={styles.textBody}>
          5) Surprise!!! Tab the Memories tab and travel down the memory lane
        </Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  textBody: {
      padding: 5,
    fontSize: 22,
    fontWeight: '500',
  },
});