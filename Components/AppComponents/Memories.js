import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, StatusBar, SafeAreaView, Image, Dimensions } from 'react-native'

import memdata from './memdata'


const Item = ({ title, image, questions}) => (
    
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.image}/>
      <Text style={styles.questions}>{questions}</Text>
    </View>
  );

export default function Memories() {
    
    const renderItem = ({ item }) => (
        <Item title={item.title} image={item.image} questions={item.questions} />
      );
    
           
            return (
                <SafeAreaView style={styles.container}>
                  <FlatList
                    data={memdata}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                  />
                </SafeAreaView>
           
        );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
     justifyContent: 'center',
     alignContent: 'center',
     
      marginVertical: 5,
      marginHorizontal: 0,
    },
    title: {
        justifyContent: 'center',
      fontSize: 28,
      alignContent: 'center',
      alignSelf:'center'

    },
    questions: {
        justifyContent: 'center',
      fontSize: 28,
      marginHorizontal: 5,
      alignSelf:'flex-start',
    },
    image: {
        height: 300,
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
    }
  });