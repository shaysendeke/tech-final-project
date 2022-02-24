import React from 'react';
import{ useState } from "react";
import Logos from '../components/Logos'
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
 


export default function HomePage() {
  const {logos, setLogos} = useState()
    const teamLogos = [
    { img: "https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg" },
    { img: "https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg" },
    { img: "https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg" },
    { img: "https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg" },
    {img: "https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg"},
    {img: "https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg"}
  ]
  ;
  return(
      <div>
      <h1>WELCOME TO SENDEKTICKETS</h1> 
      <h2>WHERE YOU CAN GET THE BEST SEATS WITH THE BEST PRICES</h2>
      <iframe width="100%" height="506" src="https://www.youtube.com/embed/Hu146YAYAgo?autoplay=1&mute=1" title="video" frameBorder="0" allow=" encrypted-media;  " autoPlay allowFullScreen loop ></iframe>
          {/* <video src="" autoPlay loop width="100%"></video> */}
      <hr />
      <div className="about">
          Here at SENDEKTICKETS we are devoted to<br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br> 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br> 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      </div>
        <section>
            <Logos/>
        </section>      

      </div>
      )
    
}
