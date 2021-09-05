import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { windowHeight } from '../../assets/utils/Dimensions'

export default function FormButton({buttonTitle, ...rest}) {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>
                {buttonTitle}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff5b5b',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: '#ff5b5b',
        marginTop: 10,
        width: '100%',
        height: windowHeight/15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fffff',
        
    }
})