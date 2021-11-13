import React from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native'

export default function OnbordingItem({item}) {
    const {width} = useWindowDimensions() ;
    return (
        <View style={styles.container, {width}}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <Image source={item.image} style={[styles.image, {width, resizeMode:'contain'}]}/>
            <View style={{}}>
               
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        marginTop: 3,
        flex: 0.9,
        justifyContent: 'center',
    },
    title: {
       
        marginTop: 20,
        fontSize: 32,
        fontWeight: '800',
       
        color: '#fff',
        textAlign: 'center',
    },
    description: {
        fontSize: 20,
        fontWeight: '300',
        color: '#fff',
        alignSelf: 'stretch',
        textAlign: 'center',
        paddingHorizontal: 10,
    }
});