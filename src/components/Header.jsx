import React, {useState, useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import '../styles/Header.css'

export const Header = () => {

    const [darkMode, setDarkMode] = useState(false)
    const color = useContext(ThemeContext)

    const handleClick = () =>{
        setDarkMode(!darkMode)
    }

    return(
    <div className="header">
        <h1 style={{color}}>ReactHooks</h1>
        <button type="button" onClick={handleClick}>{darkMode ? "Dark" : "Light"}</button>
    </div>
    )
}