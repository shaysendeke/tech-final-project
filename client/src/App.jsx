import { useState, useEffect } from "react";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
  
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Logos from "./components/Logos";
import Recommendations from "./pages/recommends/Recommendations";
import ContactUs from "./pages/ContactUs";
import Search from "./pages/Search";
import axios from "axios";
import FullGameInfo from "./pages/FullGameInfo";
import FlightsColab from "./pages/FlightsColab";
import Tickets from "./pages/Tickets";
import Purchase from "./pages/Purchase";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Footer from "./components/Footer";
// import 'sweetalert2/src/sweetalert2.scss'


const apiKey =
  "3985477450bdec29762ee1b05f70d7ff8485aee50f4b5c5f55dd13e25224d95b";
const clientId = " MjU0MDg2NTN8MTY0MjU5MDE1NC4xNTEwNjk5";
const url2 = `https://api.seatgeek.com/2/events?taxonomies.name=sports&client_id=${clientId}`;
// const url = `https://api.seatgeek.com/2/events?client_id=${clientId}&client_secret=${apiKey}`
const url3 = `https://api.seatgeek.com/2/events?taxonomies.name=nba&client_id=${clientId}&per_page=100&page=3`;
const multiply = ` https://api.seatgeek.com/2/venues?per_page=25&page=3`;
// const api2 = /houston-rodeo-livestock-show-and-rodeo-zac-brown-band-performance-tickets/sports/2012-03-12/739515/
function App() {
  const [count, setCount] = useState(0);
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState();
  const [price, setPrice] = useState("")

 const onSetSelectedGame = (game) =>{
  setSelectedGame(game)
 
}
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home Page</Link>
        <span> | </span>
        <Link to="/Recommendations">Recommendations</Link>
        <span> | </span>
        <Link to="/ContactUS">Contact Us</Link>
        <span> | </span>
        <Link to="/Search">Search</Link>
        <span> | </span>
        <Link to="/FlightsColab">Flights & Cars</Link>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Recommendations" component={Recommendations} />
          <Route exact path="/ContactUs" render={() => <ContactUs />}></Route>
          <Route
            exact
            path="/Search"
            render={() => <Search games={games} setSelectedGame={onSetSelectedGame} />}></Route>
          <Route exact path="/FlightsColab" render={()=><FlightsColab />}></Route>
          <Route exact path="/FullGame" render={()=> <FullGameInfo games={games} setGames={setGames} selectedGame={selectedGame} setSelectedGame={setSelectedGame}/>}></Route>
          <Route exact path="/Tickets" render={()=> <Tickets  selectedGame={selectedGame} setSelectedGame={setSelectedGame} price={price} setPrice={setPrice}/>}></Route>
          <Route exact path="/Purchase" render={()=> <Purchase  selectedGame={selectedGame} setSelectedGame={setSelectedGame} price={price} setPrice={setPrice}/>}></Route>

        </Switch>
        
      <Footer />
      </div>

    </BrowserRouter>
    
  );
}

export default App;
