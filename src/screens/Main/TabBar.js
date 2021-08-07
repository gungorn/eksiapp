import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import {
    DROP0SVG,
    DROPSVG,
    MESSAGE0SVG,
    MESSAGESVG,
    NOTIFICATION0SVG,
    NOTIFICATIONSVG,
    SEARCH0SVG,
    SEARCHSVG,
    USER0SVG,
    USERSVG
} from '~/assets';

import { W, w, H, h, sbh, sbhi } from '~utils/dimensions';

const TabBar = ({ state: { index }, navigation: {jumpTo } }) => {
    return (
        <View
            style={style.container}
        >
            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('HomeTab')}>
                {index === 0 ? <DROPSVG width={W(7)} height={W(7)} /> : <DROP0SVG width={W(7)} height={W(7)} />}
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('SearchTab')}>
                {index === 1 ? <SEARCHSVG width={W(7)} height={W(7)} /> : <SEARCH0SVG width={W(7)} height={W(7)} />}
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('MessageTab')}>
                {index === 2 ? <MESSAGESVG width={W(7)} height={W(7)} /> : <MESSAGE0SVG width={W(7)} height={W(7)} />}
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('NotifyTab')}>
                {index === 3 ? <NOTIFICATIONSVG width={W(7)} height={W(7)} /> : <NOTIFICATION0SVG width={W(7)} height={W(7)} />}
            </TouchableOpacity>

            <TouchableOpacity style={style.tabButton} onPress={() => jumpTo('ProfileTab')}>
                {index === 4 ? <USERSVG width={W(7)} height={W(7)} /> : <USER0SVG width={W(7)} height={W(7)} />}
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#111111',
        paddingTop: 8,
        paddingBottom: 14
    },
    tabButton: { paddingVertical: 10 }
})

export { TabBar };
