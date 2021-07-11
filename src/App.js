import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { Navigation } from '~/Navigation';

import { Splash } from '~screens';


const App = () => {
    return (
        <>
            <StatusBar backgroundColor={'#333333'} />

            <View style={{ flex: 1 }}>
                <Navigation />
            </View>
        </>
    );
};

export { App };