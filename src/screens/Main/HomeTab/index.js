import React from 'react';
import { View, Text } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Bugun } from '~/screens/Main/HomeTab/Bugun';
import { TabBar } from '~/screens/Main/HomeTab/TabBar';
const Tab = createMaterialTopTabNavigator();

const HomeTab = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#333333'
            }}
        >
            <Tab.Navigator
                tabBar={TabBar}
            >
                <Tab.Screen name={'Bugun'} component={Bugun} />
                <Tab.Screen name={'1'} component={Bugun} />
                <Tab.Screen name={'2'} component={Bugun} />
                <Tab.Screen name={'3'} component={Bugun} />
                <Tab.Screen name={'4'} component={Bugun} />
                <Tab.Screen name={'5'} component={Bugun} />
                <Tab.Screen name={'6'} component={Bugun} />
                <Tab.Screen name={'7'} component={Bugun} />
                <Tab.Screen name={'8'} component={Bugun} />
            </Tab.Navigator>
        </View>
    );
};

export { HomeTab };