import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { Redux } from '~/Redux';


const App = () => {
    return (
        <>
            <StatusBar backgroundColor={'rgba(40, 40, 40, 1)'} />

            <View style={{ flex: 1 }}>
                <Redux />
            </View>
        </>
    );
};

export { App };