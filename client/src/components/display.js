import React from 'react';

function Display(props) {
    console.log("These are props being received in display component:", props.playerData)
    return(
        <div>
            <h1>Hello from Display Component</h1>
            <div>
            {
                    props.playerData.map((player) => {
                        return(
                            <h6> {player.name} </h6>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Display;