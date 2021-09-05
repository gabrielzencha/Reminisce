import React,  {useState, useRef} from 'react'
import { View, Animated, useWindowDimensions, StyleSheet} from 'react-native'

export default function Paginator({data, scrollX}) {
   
    const {width} = useWindowDimensions();
    return (
        <View style={{flexDirection:'row', height: 64}}>
            {data.map((_, i) => {
                
                const inputRange = [(i-1)*width, i*width, (i+1)*width];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange:[10,20,10],
                    extrapolate:'clamp',
                  })
               
            
                return <Animated.View style={[styles.dot, {width: scale
                , }]} key={i.toString()}/>;
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginHorizontal: 8,
    },
})
