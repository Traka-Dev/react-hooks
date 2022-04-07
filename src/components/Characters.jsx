import React, { useState, useEffect, useReducer } from 'react'
import '../styles/Characters.css'

export const Characters = () => {

    const initialState = {
        favorites: []
    }

    const favReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_FAV':
                return {
                    ...state,
                    favorites: [
                        ...state.favorites, action.payload
                    ]
                }
            default:
                return state
        }
    }
    const [favorites, dispatch] = useReducer(favReducer, initialState)
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    const handleFavClick = fav => {
        dispatch(favorites, { type: 'ADD_TO_FAV', payload: fav })
    }

    return (
        <div className="characters">
            {favorites.favorites.map(fav => (
                <li key={fav.id}>{fav.name} test</li>
            ))}
            {characters.map(character => (
                <div className="charCard" key={`char-${character.id}`}>
                    <img className="charImg" src={character.image} alt={character.name} />
                    <h2 className="charName">{character.name}</h2>
                    <p>status: {character.status}</p>
                    <p>origin: {character.origin.name}</p>
                    <button type='button' onClick={() => handleFavClick(character)}>Agregar a Favoritos</button>
                </div>
            ))}
        </div>
    )
}