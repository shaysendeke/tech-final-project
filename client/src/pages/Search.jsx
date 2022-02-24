import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { Redirect } from "react-router-dom";
import "./search.css";
import {
  useHistory
} from "react-router-dom";
export default function Search({ setSelectedGame}) {
  // const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);
  const [isRedirect, setIsRedirect] = useState(false)
  
  const clientId = " MjU0MDg2NTN8MTY0MjU5MDE1NC4xNTEwNjk5";
  const url3 = `https://api.seatgeek.com/2/events?taxonomies.name=nba&client_id=${clientId}&per_page=15&page=1`;
  const history = useHistory();


  useEffect(getGames, []);
  function getGames() {
    LoadGames(url3);
  }

  function LoadGames(url, useFilter){
    axios
    .get(url)
    .then(function (response) {
      // axios.defaults.headers.common['header1'] = 'value' // for all requests
      //console.log(response.data.events[0].title);
      let data = response.data.events;
      if(useFilter){
        data = data.filter((game) =>
                    game.title.toLowerCase().includes(search.toLowerCase())
              )
      }
      setGames(data);
    })
    .catch(function (error) {
      console.error(error);
    });
  }
  
  function onGameClick(game) {
    setSelectedGame(game)
    history.push('/Tickets')
   //setIsRedirect(true);

  }
  const filteredGames =
    search.length === 0
      ? games
      : games.filter((game) =>
          game.title.toLowerCase().includes(search.toLowerCase())
        );
        // setGames(filteredGames)
        // setSearch(filteredGames)
  console.log(filteredGames);

  function onSearach(search){
    setSearch(search);
    let filterSearch = url3;
    if( search.length>0){
     filterSearch = filterSearch+'&q=' + search;
      LoadGames(filterSearch, true);
    }
    else{
      LoadGames(filterSearch, false);
    }
    
   // console.log(search);

  }

  const nbaLogo =
    "https://yt3.ggpht.com/rFBD18lZT2qeXNBkVMrqgCtRPX9ctXFRXVtrekvuPWMg2iiUzZrYmyR8PkuDgrDrbL9Vz8F8ABY=s900-c-k-c0x00ffffff-no-rj";
  const showGames = games.map((game) => {
    return (
      <div key={game.id}>
        <h4>{game.title}</h4>
        <h6>{game.datetime_local}</h6>
        <h6>{game.venue.name}</h6>
        <h6>{game.venue.display_location}</h6>
        <img
          title="click here for more information"
          className="nbaLogo"
          src={nbaLogo}
          onClick={(e) => onGameClick(game)}
        ></img>
        <hr />
      </div>
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search team: lakers"
        value={search}
        onChange={(e) => onSearach(e.target.value)}
      />
      {/* {filteredGames ? filteredGames : showGames } */}
      {/* filtering games work but dont show on screen */}
      {showGames}
       {/*isRedirect ? <Redirect to="/Tickets" game={selectedGame}></Redirect> : ""*/}
    </div>
  );
}
