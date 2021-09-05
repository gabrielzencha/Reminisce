import React,  {useState, useRef, useEffect} from 'react'
import { SafeAreaView, StyleSheet, FlatList,View, Text, Animated, ActivityIndicator} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import slides from './slides';
import Paginator from '../Navigation/Paginator';
import OnbordingItem from './OnbordingItem';
import NextButton from './NextButton';

import LoginScreen from './Login';
export default function Landing1({navigation}) {
    const [loading, setLoading] = useState(true);
  const [viewedOnboarding, SetViewedOnboarding] = useState(false);

  const FirstScreen = () => {
    if(viewedOnboarding){
        navigation.navigate('Login');
    }
  };
  const checkOnboarding = async () => {
      try {
          const value = await AsyncStorage.getItem('@viewedOnboarding');
          if(value!==null){
              SetViewedOnboarding(true);
          }
      } catch (err) {
          console.log('Error @checkOnboarding', err)
      }
      finally {
          setLoading(false);
      }
  }

  useEffect(() => {
      checkOnboarding();
      
  }, [])
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;
 
    const viewableItemsChanged = useRef (({viewableItems}) => {
        
        setCurrentIndex(viewableItems[0].index);
    } ).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
    const slidesRef = useRef(null);

    const scrollTo = async () => {
       
        if(currentIndex < slides.length - 1){
            slidesRef.current.scrollToIndex({index: currentIndex +1 });
        }
        else {
            try {
                await AsyncStorage.setItem('@viewedOnboarding', 'true');
                console.log(viewedOnboarding);

            } catch (error) {
                console.log('Error @setItem', error);
            }
        }
        
    }
    const exit = () => {
        navigation.navigate('Login');
    }
    if(!viewedOnboarding) {
        return (
            <SafeAreaView style={styles.container}>
               <View style={{flex:3}}>
               <FlatList 
                data={slides} renderItem = {({item})=> <OnbordingItem item={item} navigation={navigation}/>}
                horizontal
                pagingEnabled
                bounces={false}
                keyExtractor={(item)=>item.id}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
                    useNativeDriver: false,
    
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged = {viewableItemsChanged}
                viewabilityConfig = {viewConfig}
                ref={slidesRef}
                />
                
               </View>
        
              <Paginator style={{flex: 0.5}} data={slides} scrollX={scrollX}/>
            <NextButton style={{flex: 0.5}} scrollTo={scrollTo} exit ={exit} percentage={(currentIndex+1)* (100/slides.length)}/>
            </SafeAreaView>
        );
    }
    else{
        return (<LoginScreen navigation={navigation}/>);
    }
    
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff5b5b',
    },
    
});