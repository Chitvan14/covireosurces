import React, { useState } from "react";
import "./Leads.css";
import SocialShare from "./SocialShare";
import { Link, NavLink } from "react-router-dom";

// firebase sdk
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

//initialize
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyA0A9r8jzOAxgW6nuxe38bGwf_rcxJzxAw",
    authDomain: "covidhelp-85c5e.firebaseapp.com",
    projectId: "covidhelp-85c5e",
    storageBucket: "covidhelp-85c5e.appspot.com",
    messagingSenderId: "762101340692",
    appId: "1:762101340692:web:e81e7e0f818c297ee3a501",
    measurementId: "G-Y0GNL4DCX6",
  });
}

//global variable
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function Feedback() {
  const [name, setName] = useState("");
  const [dov, setdov] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  
  

  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    firestore.collection("leads")
      .add({
        name: name,
        verified: dov,
        contact: contact,
        location:location,
        type:type,
        

      })
      .then(() => {
        // alert('Message has been submitted');
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setdov("");
    setContact("");
    setLocation("");
    setType("");
   
  };

  return (
    <div className="lead">
        <NavLink to="/chat" exact ClassName="sendleads">
          <h1>Go To Chat Section</h1>
        </NavLink>
      <form className="form" onSubmit={handleSubmit}>

      <label>Date Of Verification</label>
        <input
          placeholder="Date,Month"
          value={dov}
          onChange={(e) => setdov(e.target.value)}
        />
        <label>Name Of Company/Person</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Contact Number Of Company/Person</label>
        <input
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <label>Location</label>
        <input
          placeholder="City,State"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
<label>Type</label>
<input
          placeholder="Oxygen, Plasma, FoodService, ICUBeds, Medicine Or Other"
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <button
          type="submit"
          style={{ background: loader ? "ccc" : "#f37455;" }}
        >
          SUBMIT
        </button>
      </form>

      <div className="social__feedback">
        <SocialShare />
      </div>
    </div>
  );
}

export default Feedback;
