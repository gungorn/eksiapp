import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { getStatusBarHeight as getSBH } from 'react-native-status-bar-height';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from './components';

let first = true;

const App = () => {
    const [activePage, setActivePage] = useState(0);
    const [test, setText] = useState(0);

    useEffect( //componentDidMount
        () => {
            console.log('test1');

            return () => { //componentWillUnmount
                console.log('test3');
            };
        },
        []
    );

    useEffect(() => { //componentDidUpdate
        if (first) { first = false; return; }

        console.log('test2');
    });

    const buttons = [
        {
            text: 'Button'
        },
        {
            text: 'Button'
        },
        {
            text: 'Button'
        },
        {
            text: 'Button'
        },
        {
            text: 'Button'
        },
        {
            text: 'Button'
        },
        {
            text: 'Button'
        },
    ];

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
                    <FlatList
                        data={buttons}
                        horizontal
                        renderItem={({item, index}) => (
                            <Button
                                text={item.text}
                                style={{}}
                                textStyle={{}}
                                isActive={activePage === index}
                                onPress={() => setActivePage(index)}
                            />
                        )}
                        keyExtractor={(d, i) => i.toString()}
                    />
                </View>

                <AntDesign name={'customerservice'} color={'red'} size={32} />
            </View>
        </>
    );
};

export { App };