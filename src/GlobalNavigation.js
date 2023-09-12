import React from 'react';
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import Photos from './screens/Photos/Photos'
import Videos from './screens/Video/Video'
import GoogleDrive from './screens/GoogleDrive/GoogleDrive'
import AnimatedLoad from './screens/AnimatedLoad'
import WebBrowser from './screens/WebBrowser/WebBrowser'
import DropBox from './screens/DropBox/DropBox'
const Stack = createStackNavigator();
const GlobalNavigation = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="SplashScreen"
                        options={{ headerShown: false }}
                        component={SplashScreen}
                    />
                     <Stack.Screen
                        name="AnimatedLoad"
                        options={{ headerShown: false }}
                        component={AnimatedLoad}
                     />
                      <Stack.Screen
                         name="DropBox"
                         options={{ headerShown: false }}
                         component={DropBox}
                      />
                     <Stack.Screen
                         name="WebBrowser"
                         options={{ headerShown: false }}
                         component={WebBrowser}
                      />
                    <Stack.Screen
                        name="GoogleDrive"
                        options={{ headerShown: false }}
                        component={GoogleDrive}
                    />
                    <Stack.Screen
                        name="Videos"
                        options={{ headerShown: false }}
                        component={Videos}
                    />
                    <Stack.Screen
                        name="Photos"
                        options={{ headerShown: false }}
                        component={Photos}
                    />
                     <Stack.Screen
                        name="HomeScreen"
                        options={{ headerShown: false }}
                        component={HomeScreen}
                      />
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
    )
}

export default GlobalNavigation