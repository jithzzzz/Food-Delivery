import React, {useState, useEffect} from 'react';
import {StyleSheet, ImageBackground, View, TouchableOpacity, Text} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { Fumi } from 'react-native-textinput-effects';
import { Roboto_100Thin_Italic } from '@expo-google-fonts/roboto';
// import { white } from 'react-native-paper/lib/typescript/styles/colors';

import * as Font from 'expo-font';



const RegisterScreen = ({navigation}) =>{
    
    useEffect(() => {
        Font.loadAsync({
            'Anton-Regular': require('../assets/fonts/Anton-Regular.ttf'),
            'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
            'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
            'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf'),
            'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),

          });
    });

    return(
        <ImageBackground source={require("../assets/images/pexels-photo-326268.jpeg")} style={styles.image}>
            <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontSize:30, fontWeight:'bold', padding:10, fontFamily:'Anton-Regular'}}>Register</Text>
                <Text style={{color:'white', fontSize:19, padding:10, fontFamily:'Anton-Regular'}}>Rain or shine, it's time to dine.</Text>
            </View>
            <View style={{width:'100%'}}>
                <Fumi
                    label={'Your Name'}
                    iconClass={FontAwesome}
                    iconName={'space-shuttle'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}  
                    style={{margin:10}}         
                />
                <Fumi
                    label={'Mobile Number'}
                    iconClass={FontAwesome}
                    iconName={'mobile-phone'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}  
                    style={{margin:10}}
                    keyboardType={'phone-pad'}             
                />
                <Fumi
                    label={'Email Id'}
                    iconClass={FontAwesome}
                    iconName={'space-shuttle'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}  
                    style={{margin:10}}         
                />
                <Fumi
                    label={'Password'}
                    iconClass={FontAwesome}
                    iconName={'space-shuttle'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}  
                    style={{margin:10}}         
                />
                <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                    <View
                    style={{backgroundColor:'#f58a42', padding:16, margin:20, borderRadius:27, justifyContent:"center", alignItems:"center"}}>
                        
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>Lets's Go</Text>
                            
                            <FontAwesome name="arrow-circle-o-right" 
                            style={{color:'white', fontWeight:'bold', fontSize:25, marginLeft:10, marginTop:2}}></FontAwesome>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row', justifyContent:"center", alignItems:"center"}}>
                    <TouchableOpacity>
                        <Text style={{color:"white", margin:10, fontSize:18, fontFamily:'Anton-Regular', fontWeight:'bold'}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color:"white", margin:10, fontSize:18, fontFamily:'Anton-Regular', fontWeight:'bold'}}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        resizeMode:"cover",
        justifyContent:"center",
        alignItems:"center"
    }
});


export default RegisterScreen