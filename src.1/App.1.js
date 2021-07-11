import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { getStatusBarHeight as getSBH } from 'react-native-status-bar-height';
import { Button } from './components';

const buttons = [];

for (let x = 0; x < 10000; x++) {
    buttons.push({ text: 'Button' });
}

const App = () => {
    const [activePage, setActivePage] = useState(0);

    return (
        <>
            <StatusBar
                backgroundColor={'transparent'}
                translucent
            />

            <View
                style={{
                    flex: 1,
                    backgroundColor: '#222222',
                    borderWidth: 2,
                    borderColor: 'red',
                    //flexDirection:'row'
                }}
            >
                <View style={{ height: getSBH() }} />

                <View
                    style={{ borderWidth: 2, borderColor: 'blue', flex: 1 }}>
                    <ScrollView
                        style={{
                            borderWidth: 2,
                            borderColor: 'green'
                        }}
                        horizontal={true}
                    >
                        {
                            buttons.map((d, i) => (
                                <Button
                                    text={d.text}
                                    style={{}}
                                    textStyle={{}}
                                    isActive={activePage === i}
                                    onPress={() => setActivePage(i)}
                                />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </>
    );
};

export { App };