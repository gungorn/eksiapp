import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { Navigation } from '~/Navigation';

import { Splash } from '~screens';


const App = () => {
    return (
        <>
            <StatusBar backgroundColor={'rgba(40, 40, 40, 1)'} />

            <View style={{ flex: 1 }}>
                <Navigation />
            </View>
        </>
    );
};

export { App };