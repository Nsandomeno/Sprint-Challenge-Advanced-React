import React from 'react';
import PlayerCard from './playerCard.js';
 
function Display(props) {
    // console.log("These are props being received in display component:", props.playerData)
    return(
        <div>
            <h1>Hello from Display Component</h1>
            <div>
            {
                    props.playerData.map((player) => {
                        return(
                            <PlayerCard player={player} />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Display;