import React from 'react';
import { View, Text } from 'react-native';

export default function Movie({ id, name, price }) {
    return (
        <View key={id} style={{
            height: 60, backgroundColor: '#eee', width: '100%', flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center', marginTop: 8,
            paddingHorizontal: 20,
        }}>
            <Text style={{ fontSize: 15, color: '#000' }}>{name}</Text>
            <Text style={{ fontSize: 14, color: '#000' }}>${price}</Text>
        </View>
    )
}
