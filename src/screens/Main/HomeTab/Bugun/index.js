import React from 'react';
import { View, Text, FlatList } from 'react-native';

const data = [
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
    { title: 'Lorem İpsum Dolar sit amet' },
];

const Bugun = () => {
    const item = ({ item: { title }, index }) => (
        <View
            style={{
                paddingLeft: '5%',
                paddingVertical: 16
            }}
        >
            <Text
                style={{ color: 'white', fontWeight: 'bold' }}
            >
                {title}
            </Text>
        </View>
    );

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'rgba(40, 40, 40, 1)'
            }}
        >
            <FlatList
                data={data}
                renderItem={item}
                ItemSeparatorComponent={() => (
                    <View
                        style={{
                            width: '90%',
                            height: 1,
                            backgroundColor: '#ffffff22',
                            alignSelf: 'center'
                        }}
                    />
                )}
            />
        </View>
    );
};

export { Bugun };