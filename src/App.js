import React, { useState, useEffect } from 'react';
import { View, StatusBar, Keyboard } from 'react-native';
import { observer } from 'mobx-react';

import { Navigation } from '~/Navigation';
import { Splash } from '~screens';

import { keyboard } from './mobx/keyboard';


const App = observer(() => {
    useEffect(() => {
        Keyboard.addListener('keyboardDidHide', keyboard.close);
        Keyboard.addListener('keyboardDidShow', keyboard.open);
    }, []);

    return (
        <>
            <StatusBar backgroundColor={'rgba(40, 40, 40, 1)'} />

            <View style={{ flex: 1 }}>
                <Navigation />
            </View>
        </>
    );
});

export { App };