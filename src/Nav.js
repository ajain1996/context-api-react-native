import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { MovieContext } from './MoviesContext';

export default function Nav() {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <View style={{
            flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20,
            width: "100%", height: 60, backgroundColor: 'purple', alignItems: 'center',
        }}>
            <Text style={{ fontSize: 18, color: '#fff' }}>Movies App</Text>
            <Text style={{ fontSize: 16, color: '#fff' }}>Number of movies: {movies.length}</Text>
        </View>
    )
}
