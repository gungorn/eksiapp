import React from 'react';
import { View, Text } from 'react-native';

const ProfileTab = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(40, 40, 40, 1)'
            }}
        >
            <Text>ProfileTab</Text>
        </View>
    );
};

export { ProfileTab };