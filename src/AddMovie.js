import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomFormInput from './CustomFormInput';
import { MovieContext } from './MoviesContext';

export default function AddMovie() {
    const [movies, setMovies] = useContext(MovieContext);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const addMovieToList = () => {
        setMovies(previousMovies => [...previousMovies, {
            name: name, price: price,
        }]);
        setName("");
        setPrice("");
    }

    return (
        <View>
            <CustomFormInput
                placeholder="Enter movie name"
                value={name}
                onChangeText={(val) => {
                    setName(val);
                }}
            />

            <CustomFormInput
                placeholder="Enter movie price"
                value={price}
                keyboardType={'numeric'}
                onChangeText={(val) => {
                    setPrice(val);
                }}
            />

            <TouchableOpacity activeOpacity={0.8} style={{
                width: "100%", height: 50, backgroundColor: 'purple',
                justifyContent: 'center', alignItems: 'center',
                borderRadius: 6,
            }} onPress={addMovieToList}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
