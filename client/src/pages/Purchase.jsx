import {React, useState} from "react";
import * as NBAIcons from "react-nba-logos";
import AllLogos from "../components/AllLogos";
import axios from "axios";
import Swal from 'sweetalert2'

// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
// const MySwal = withReactContent(Swal)




export default function Purchase({ selectedGame, price }) {
    const [firstName, setFirstName]=useState()
    const [lastName, setLastName]=useState()
    const [email, setEmail]=useState()
    const [disabled, setDisabled] = useState(true)

    function sendPurchase(){
      axios.post("/users/purchases", {
        obj:obj
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error){
        console.log(error);
      })
    }

    const obj ={
        email: email,
        fisrtName: firstName,
        lastName :lastName,
        price: price
      }
    function isDisabled(){
        if(email > 0 && 
        firstName > 0 
        && lastName > 0)
        {setDisabled(!disabled)}
    }

    function sweetalert(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'THANK YOU FOR YOUR PURCHASE. WE WOULD LOVE TO SEE YOU SOON',
        showConfirmButton: false,
        timer: 3500
      })
    }
  
  return (
    <div>
        Please Fill Your Details To Complete Your Purchase
      <form
            onSubmit={(e) => {
                e.preventDefault();
                sendPurchase();
                console.log( obj);
                sweetalert();
                            }}
        
      >
        <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input><br />
        <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input><br />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input><br />
        <h6>Price Is {price}$</h6>
        <input disabled={!email || !firstName || !lastName}  type="submit"/>

      </form>
      <AllLogos></AllLogos>
    </div>
  );
}
