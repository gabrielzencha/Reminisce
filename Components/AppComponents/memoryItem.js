import React from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native'

export default function MemoryItem({item}) {
    const {width} = useWindowDimensions() ;
    const {height} = useWindowDimensions() ;
    return (
        <View style={styles.container, {width}}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <Image source={item.image} style={[styles.image, {width, resizeMode:'contain'}, {height, resizeMode:'contain'}]}/>
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

    title: {
        fontSize: 26,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
    },
    description: {
        fontSize: 20,
        fontWeight: '300',
        color: '#000',
        alignSelf: 'stretch',
        textAlign: 'center',
        
    }
});