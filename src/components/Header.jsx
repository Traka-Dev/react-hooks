import React, {useState} from 'react'

export const Header = () => {

    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () =>{
        setDarkMode(!darkMode)
    }

    return(
    <div className="header">
        <h1>ReactHooks</h1>
        <button type="button" onClick={handleClick}>{darkMode ? "Dark" : "Light"}</button>
    </div>
    )
}