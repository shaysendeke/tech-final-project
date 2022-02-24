import React from 'react';
import * as NBAIcons from 'react-nba-logos';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';
import AllLogos from '../components/AllLogos';



export default function Tickets({selectedGame, setPrice}) {
  console.log(selectedGame)
  const [redirect, setRedirect] = useState(false)
  if (redirect) {
    return <Redirect to="/Purchase"/>
    

  }
function openForm(e){
  setRedirect(true)
setPrice(e.target.name)
}
  
  return (
  <div>
        <h4>{selectedGame.title}</h4>
        <h6>{selectedGame.datetime_local}</h6>
        <h6>{selectedGame.venue.name}</h6>
        <h6>{selectedGame.venue.display_location}</h6>
        <button name={selectedGame.stats.average_price} onClick={openForm}>AVARAGE :{selectedGame.stats.average_price} $</button><span> </span>
        <button name={selectedGame.stats.highest_price} onClick={openForm}>COURT SIDE:{selectedGame.stats.highest_price} $</button><span> </span>
        <button name={selectedGame.stats.lowest_price} onClick={openForm}>HIGER COURTS:{selectedGame.stats.lowest_price} $</button><span> </span>
        <button name={selectedGame.stats.median_price} onClick={openForm}>MAIN LEVEL:{selectedGame.stats.median_price} $</button><span> </span>
        <br />
        <AllLogos></AllLogos>




  </div>
  )
}
