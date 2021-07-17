import React, { useState, useEffect } from 'react';
import { View, Keyboard } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Main, Splash } from '~screens';

import store, { KEYBOARD_OPEN, KEYBOARD_CLOSE } from './store';


const STACK1 = createStackNavigator();
//const STACK2 = createStackNavigator();
//const STACK3 = createStackNavigator();

const Navigation = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(
        () => {
            //Keyboard.addListener('keyboardDidHide', () => store.dispatch(KEYBOARD_CLOSE()));
            //Keyboard.addListener('keyboardDidShow', d => store.dispatch(KEYBOARD_OPEN(d)));

            setTimeout(() => {
                setShowSplash(false);
            }, 2000);
        }, []);

    return (
        <NavigationContainer>
            <STACK1.Navigator
                headerMode={'none'}
            //screenOptions={}
            >
                <STACK1.Screen
                    name={showSplash ? 'Splash' : 'Main'}
                    component={showSplash ? Splash : Main}
                />
            </STACK1.Navigator>
        </NavigationContainer>
    );
};

export { Navigation };