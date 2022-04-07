import React, { useState, useEffect, useReducer, useMemo } from 'react'
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
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    const handleFavClick = fav => {
        if (favorites.favorites.length === 0) {
            dispatch({ type: 'ADD_TO_FAV', payload: fav })
        } else {
            const found = favorites.favorites.find(item => item === fav)
            !found && dispatch({ type: 'ADD_TO_FAV', payload: fav })
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    // const filteredUsers = characters.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))

    const filteredUsers = useMemo(() => (
        characters.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()),
            [characters, search]
        )
    ))

    return (
        <>
            {favorites.favorites.map(fav => {
                return (<li key={fav.id}>{fav.name}</li>)
            })}
            <div className='Search'>
                <input type='text' value={search} onChange={(e) => handleSearch(e)} />
            </div>
            <div className="characters">
                {filteredUsers.map(character => (
                    <div className="charCard" key={`char-${character.id}`}>
                        <img className="charImg" src={character.image} alt={character.name} />
                        <h2 className="charName">{character.name}</h2>
                        <p>status: {character.status}</p>
                        <p>origin: {character.origin.name}</p>
                        <button type='button' onClick={() => handleFavClick(character)}>Agregar a Favoritos</button>
                    </div>
                ))}
            </div>
        </>
    )
}