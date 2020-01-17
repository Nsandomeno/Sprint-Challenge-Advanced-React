import React from 'react';
import PlayerCard from './playerCard.js';
import { useDarkMode } from './useDarkMode.js';


 
function Display(props) {
    // console.log("These are props being received in display component:", props.playerData)
    const [darkMode, setDarkMode] = useDarkMode(false)

    const toggleTheme = (event) => {
        console.log("toggle!")
        event.preventDefault()
        setDarkMode(!darkMode)
        
    }

    return(
        <div>
            <button data-testid='test-btn'  onClick={toggleTheme}> Toggle: {darkMode === false ? 'dark' : 'light'} </button>
            <div>
            {
                    props.playerData.map((player) => {
                        return(
                            <PlayerCard  player={player} />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Display;