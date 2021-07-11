import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TabBar = ({ state: { index }, navigation: {jumpTo } }) => {
    return (
        <View
            style={style.container}
        >
            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('HomeTab')}>
                <Fontisto name={'blood-drop'} color={index === 0 ? '#49e61e' : '#444444'} size={32} />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('SearchTab')}>
                <Fontisto name={'search'} color={index === 1 ? '#49e61e' : '#444444'} size={32} />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton}onPress={() => jumpTo('MessageTab')}>
                <Entypo name={'message'} color={index === 2 ? '#49e61e' : '#444444'} size={32} />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('NotifyTab')}>
                <Ionicons name={'notifications'} color={index === 3 ? '#49e61e' : '#444444'} size={32} />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('ProfileTab')}>
                <AntDesign name={'user'} color={index === 4 ? '#49e61e' : '#444444'} size={32} />
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: '#111111'
            },
    tabButton: { paddingVertical: 10 }
})

export { TabBar };
