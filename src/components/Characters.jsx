import React, {useState, useEffect} from 'react'
import '../styles/Characters.css'

export const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    },[])

    return (
        <div className="characters">
            {characters.map(character => (
                <div className="charCard">
                    <img className="charImg" src={character.image}></img>
                    <h2 className="charName">{character.name}</h2>
                    <p>status: {character.status}</p>
                    <p>origin: {character.origin.name}</p>
                </div>
            ))}
        </div>
    )
}