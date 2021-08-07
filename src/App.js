import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { View, StatusBar } from 'react-native';
import { Redux } from '~/Redux';
import { sbhi } from '~/utils/dimensions';


const App = () => {
    return (
        <>
            <StatusBar
                backgroundColor={'rgba(40, 40, 40, 1)'}
                barStyle={'light-content'}
            />

            <View style={{ flex: 1 }}>
                <View
                    style={{
                        height: sbhi,
                        backgroundColor: 'rgba(40, 40, 40, 1)'
                    }}
                />

                <Redux />
            </View>
        </>
    );
};

export { App };