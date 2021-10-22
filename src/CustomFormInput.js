import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function CustomFormInput({ value, placeholder, keyboardType, ...rest }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={value}
                defaultValue={value}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeholder}
                keyboardType={keyboardType}
                placeholderTextColor="#8e9aa0"
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: 46,
        borderColor: "eee",
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 15,
        color: '#d9d9d9',
        justifyContent: 'center',
        alignItems: 'center',
        color: "black",
    },
});
