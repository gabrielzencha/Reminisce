import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

export default class UserGuide extends Component {
    render() {
        return (
                <View style={styles.container}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        padding: 30,
                    }}>
                        How To Use Reminisce
                    </Text>
                    <FlatList data ={[
                        {
                            id: 1,
                            text: "Tab the pencil in the About Me page and give some information about yourself."
                        }, 
                        {
                            id: 2,
                            text: "To send a new text, go to Messages, tab the pencil, type and send the text."
                        }, 
                        {
                            id: 3,
                            text: "To respond to someone’s message, click on that person’s message, type your reply, and click send."
                        }, 
                        {
                            id: 4,
                            text: "You will get notifications when someone living locally sends a new message or replies to your message."
                        }, 
                        {
                            id: 5,
                            text: "Surprise!!! Tab the Memories tab and travel down the memory lane"
                        }, 
                       
                    ]}

                   

                    />
                </View>
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
})