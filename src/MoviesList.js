import React, { useContext } from 'react';
import { View } from 'react-native';
import Movie from './Movie';
import { MovieContext } from './MoviesContext';

export default function MoviesList() {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <View>
            {
                movies.map((movie) => {
                    return (
                        <Movie name={movie.name} price={movie.price} id={movie.id} />
                    );
                })
            }
        </View>
    )
}
