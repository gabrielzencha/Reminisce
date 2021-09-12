import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export default class UserGuide extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            padding: 30,
            alignItems: "center",
          }}
        >
          How To Use Reminisce
        </Text>

        <Text style={styles.textBody}>
          1) Tab the pencil in the About Me page and give some information about
          yourself.
        </Text>

        <Text style={styles.textBody}>
          2) To send a new text, go to Messages, tab the pencil, type and send
          the text.
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
