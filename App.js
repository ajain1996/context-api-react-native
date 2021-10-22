import React from 'react';
import { View, Text } from 'react-native';
import AddMovie from './src/AddMovie';
import CustomFormInput from './src/CustomFormInput';
import { MovieProvider } from './src/MoviesContext';
import MoviesList from './src/MoviesList';
import Nav from './src/Nav';

export default function App() {
  return (
    <MovieProvider>
      <Nav />
      <View style={{ paddingHorizontal: 12, marginTop: 14 }}>
        <AddMovie />
        <MoviesList />
      </View>
    </MovieProvider>
  )
}
