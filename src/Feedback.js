import React, { useState } from "react";
import "./Feedback.css";
import SocialShare from "./SocialShare";
// import { db } from "./firebase";


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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    firestore.collection("feedback")
      .add({
        name: name,
        email: email,
        message: message,
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
    setEmail("");
    setMessage("");
  };

  return (
    <div className="feedback">
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          style={{ background: loader ? "ccc" : "#f37455;" }}
        >
          {!loader ? <p>SUBMIT</p> : <p >SUBMITTED</p>}
        </button>
      </form>

      <div className="social__feedback">
        <SocialShare />
      </div>
    </div>
  );
}

export default Feedback;
