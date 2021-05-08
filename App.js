import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from './navigation/tabs'
import LoginScreen from './screens/Login'
import  RegisterScreen from './screens/Register'




const Stack = createStackNavigator();



//const [fontsLoaded, setFontsLoaded] = useState(false)

const App = () => {

    return (
        

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={Tabs} />
                
                
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

export default App;