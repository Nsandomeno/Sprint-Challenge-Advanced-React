import React from 'react';

function PlayerCard(props) {
    console.log("These are the props being received in the PlayerCard comp.:", props)
    return(
        <div>
            <h5> {props.player.name} </h5>
            <h6> {props.player.country} </h6>
        </div>
    )

}
export default PlayerCard