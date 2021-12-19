import React, { useState, useEffect, useCallback,useLayoutEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { auth, db } from '../../firebase';


  

export default function MessageScreen()  {
    const [messages, setMessages] = useState([]);
    
  /*  useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ])
      }, [])*/
      useLayoutEffect(() => {
          const unsubscribe = db.collection('chats').orderBy('createdAt','desc').onSnapshot(snapshot=>setMessages(
              snapshot.docs.map(doc=> ({
                _id:doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user
              }))
          ))
          return unsubscribe;
      },)
      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        const {
            _id,
            createdAt,
            text,
            user
        } =messages[0]
        db.collection('chats').add({
            _id,
            createdAt,
            text,
            user
        })
      }, [])
      return (
        <GiftedChat
        textProps={{ style: { fontSize: 20 } }}
          messages={messages}
          showAvatarForEveryMessage = {true}
          onSend={messages => onSend(messages)}
          minComposerHeight={40}
          minInputToolbarHeight={60}
  
          user={{
            _id: auth?.currentUser?.email,
            name: auth?.currentUser?.displayName,
            avatar: auth?.currentUser?.photoURL
          }}
        />
      )
}

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        backgroundColor: '#fff',

    },
    composer:{
      borderRadius: 25, 
      borderWidth: 0.5,
      borderColor: '#dddddd',
      marginTop: 10,
      marginBottom: 10,
      paddingLeft: 10,
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 10,
      fontSize: 16
    },
    btnSend: {
      height: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      borderRadius: 50
    }
})