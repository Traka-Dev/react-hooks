import { useState, useEffect } from 'react'


export const UseCharacters = url => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setCharacters(data.results))
    }, [url])
    return characters
}