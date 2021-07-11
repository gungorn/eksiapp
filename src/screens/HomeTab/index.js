import React from 'react';
import { View, Text } from 'react-native';

const HomeTab = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'#333333'
            }}
        >
            <Text style={{ fontSize:20, color:'red'}}>HomeTab</Text>
        </View>
    );
};

export { HomeTab };