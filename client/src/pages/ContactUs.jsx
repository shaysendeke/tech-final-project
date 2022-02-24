import { useState } from "react/cjs/react.development";
import React from "react";
import AllLogos from "../components/AllLogos";
import axios from "axios";
import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'




export default function ContactUs() {
  const [firstName, setFirstName]=useState()
  const [lastName, setLastName]=useState()
  const [email, setEmail]=useState()
  const [message, setMessage]=useState()

  function sendContact(){
    axios.post("/users/contacts", {
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
    message: message
  }
function sweetalert(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'THANK YOU FOR REACHING US',
    showConfirmButton: false,
    timer: 3500
  })
}



  return( 
  <div>
      <h2> WE WOULD LIKE TO HEAR FROM YOU <br></br>
      PLEASE LEAVE YOUR MESSAGE HERE</h2>
      <form 
      onSubmit={(e) => {
        e.preventDefault();
        sendContact();
        sweetalert();
        ;
      }}
      >
          <input placeholder="First Name"onChange={(e) => setFirstName(e.target.value)} ></input><br />
          <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input><br />
          <input type="email" placeholder="email"onChange={(e) => setEmail(e.target.value)}></input><br /><br />
          <textarea rows="25" cols="50" placeholder="message" onChange={(e) => setMessage(e.target.value)}/><br />
          <input type="submit" disabled={!email || !firstName || !lastName || !message}/>

      </form>
      <AllLogos></AllLogos>

  </div>)
}
