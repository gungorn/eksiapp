import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';

const tabs = [
    { title: 'Bugün', name: 'Bugun' },
    { title: 'Bugün', name: '1' },
    { title: 'Bugün', name: '2' },
    { title: 'Bugün', name: '3' },
    { title: 'Bugün', name: '4' },
    { title: 'Bugün', name: '5' },
    { title: 'Bugün', name: '6' },
    { title: 'Bugün', name: '7' },
    { title: 'Bugün', name: '8' },
];

const TabBar = ({ state: { index }, navigation: { jumpTo } }) => {
    const item = ({ title, name, i }) => (
        <TouchableOpacity
            style={style.tabButton}
            onPress={() => jumpTo(name)}
            key={i}
        >
            <Text style={style.buttonTitle}>{title}</Text>

            <View
                style={{
                    height: 3,
                    width: '80%',
                    backgroundColor: 'rgba(120, 184, 76, 1)',
                    marginTop: 4,
                    borderRadius: 10,
                    alignSelf: 'center',
                    display: index === i ? 'flex' : 'none'
                }}
            />
        </TouchableOpacity>
    );

    return (
        <View
            style={style.container}
        >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {tabs.map((d, i) => item({ ...d, i }))}
            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'rgba(40, 40, 40, 1)'
    },
    tabButton: {
        paddingVertical: 10
    },
    tabButtonActive: {
    },
    buttonTitle: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 20
    }
});

export { TabBar };