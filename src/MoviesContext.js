import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: "The Avenger",
            price: 10,
            id: 1,
        },
        {
            name: "Avenger age of Ultron",
            price: 6,
            id: 2,
        },
        {
            name: "Avenger - Infinity War",
            price: 14,
            id: 3,
        },
        {
            name: "Avenger - Endgame",
            price: 15,
            id: 4,
        },
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
