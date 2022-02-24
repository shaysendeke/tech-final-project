
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./flights.css";

export default function Flights() {
    const [hotels, setHotels]= useState([])
    const apiUrl = "./data/Hotels.json"
    const getData =()=> { 
    axios.get(apiUrl)
    .then(function (response) {
        let data = response.data
        // console.log(data);
        setHotels(data)
    }).catch(function (error) {
        console.error(error);
    });
}
useEffect(getData,[])
    const elements =  hotels.map((hotel, id)=> 
    <div className='flightDiv'   key={id}>
    <p >{hotel.name} </p>
    <p>{hotel.title}</p>
    <p><img src={hotel.logo}></img></p>
    <p><a href={hotel.link}>click to site</a></p>
    </div>)
  return(
   <div className="flights">
       {elements}
   </div>
  )
}

    