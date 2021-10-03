import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet, Platform } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from "reanimated-bottom-sheet";
export default function EditProfileScreen() {

    const renderInner = () => (
        <Text>Hello</Text>
    );
    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader} >
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    );
    bs = React.createRef();
    fall = new Animated.Value(1);
    return (
        <ScrollView style={styles.container}>
            <BottomSheet
                ref={bs}
                snapPoints= {[730, 0]}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction = {true}
                renderContent={renderInner}
                renderHeader= {renderHeader}
            
            />
            <View style={{margin: 20}}>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=>bs.current.snapTo(0)}>
                        <View style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ImageBackground
                             source={require("../../assets/images/logo.png")}
                             style={{
                                 height: 100,
                                 width: 100,
                             }}
                             imageStyle={{borderRadius: 15}}
                            
                            >
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems:'center'
                                }}>
                                    <MaterialCommunityIcons name="camera" color="#fff" size={35} style={{
                                        opacity: 0.7,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: "#fff",
                                        borderRadius: 10
                                    }} />
                                </View>
                            </ImageBackground>

                        </View>

                    </TouchableOpacity>
                    <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                        John Doe
                    </Text>
                </View>
                <View style={styles.action}>
                    <FontAwesome name='user-o' size={20}/>
                    <TextInput
                    placeholder="First Name and Last Name"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
              
                <View style={styles.action}>
                    <FontAwesome name='phone' size={20}/>
                    <TextInput
                    placeholder="Telephone Number"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="thumbs-up" size={20}/>
                    <TextInput
                    placeholder="My Likes"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name='thumbs-down' size={20}/>
                    <TextInput
                    placeholder="My Dislikes"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="history" size={20}/>
                    <TextInput
                    placeholder="Story of my life"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="address-book" size={20}/>
                    <TextInput
                    placeholder="Emergency Contact Name"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name='link' size={20}/>
                    <TextInput
                    placeholder="Relationship"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="envelope" size={20}/>
                    <TextInput
                    placeholder="Emergency Contact Email"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="phone" size={20}/>
                    <TextInput
                    placeholder="Emergency Contact Telephone"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="address-book" size={20}/>
                    <TextInput
                    placeholder="Emergency Contact Name"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name='link' size={20}/>
                    <TextInput
                    placeholder="Relationship"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="envelope" size={20}/>
                    <TextInput
                    placeholder="Emergency Contact Email"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="phone" size={20}/>
                    <TextInput
                    placeholder="Emergency Contact Telephone"
                    placeholderTextColor = "#666666"
                    style ={styles.textInput}
                    autoCorrect ={false}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="question" size={20}/>
                    <TextInput
                    placeholder="Will you be using Reminisce yourself?"
                    placeholderTextColor = "#666666"
                    style ={[styles.textInput], {
                        flexWrap: 'wrap',
                        fontSize: 20,
                        paddingLeft: 10,
                    }}
                    autoCorrect ={false}
                    />
                </View>

                <View style={[styles.action], {
                    flexDirection: 'column'
                }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                    <FontAwesome name="question" size={20}/>
                    <Text style={ {color: "#00000f", fontSize: 20, paddingLeft: 10}}>Which of your emergency contacts will be using Reminisce on your behalf?
                     </Text>
                    </View>
                     <TextInput style={styles.textInput} placeholder="type your response here"/>
                </View>
            </View>
            <TouchableOpacity onPress= {() => {}} style={styles.commandButton}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#ff5b5b",
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: "#ffffff",
        paddingTop: 20,
    },
    header: {
        backgroundColor: "#fff",
        shadowColor: "#333333",
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius:20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center'
    },
    panelHandle: {
        width: 40, 
        height: 8, 
        borderRadius: 4,
        backgroundColor: "#000040",
        marginBottom: 10,
    },
    pandelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#00000f',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ff0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS ==='ios'? 0: -12,
        paddingLeft: 10,
        color: '#00000f',
        fontSize: 20,
    }
})