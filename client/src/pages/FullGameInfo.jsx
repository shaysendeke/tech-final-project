import {React, useState} from 'react';

export default function FullGameInfo({selectedGame}) {
    const [games, setGames] =useState([])
  
    return(
        <div key={selectedGame.id}>
            <p> {selectedGame.title}</p>
            <p>{selectedGame.datetime_local}</p>
            <p>{selectedGame.venue.name}</p>
            <p>{selectedGame.venue.display_location}</p>
            <p>{selectedGame.stats.highest_price}</p>
            <p>{selectedGame.stats.lowest_price}</p>
            <p>{selectedGame.stats.median_price}</p>

        </div>
        ) 
        
}
