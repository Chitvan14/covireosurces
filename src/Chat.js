import React, { useRef, useState } from "react";
import "./Chat.css";
import * as AiIcons from "react-icons/ai";

// firebase sdk
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link, NavLink } from "react-router-dom";
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

function Chat() {
  const [user] = useAuthState(auth);
  return (
    <div className="chat">
     
      
     
   
      <header>
        <SignOut />
       <Leads/>
        
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function Leads(){
  return (
    auth.currentUser && (
      <NavLink to="/leadsForm" exact ClassName="sendleads">
      <h1>Click Here To Send Verified Leads</h1>
    </NavLink>
    ));
}

function SignIn() {
  //open pop up
  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={SignInWithGoogle}>
        Sign in with Google
      </button>
      <p className="sign-in-p">
        Do not violate the community guidelines and help others by providing
        verified information!
      </p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );  
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    // helps in unrefreshing the page
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    //makenew document in firestore
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <form className="donate__form" onSubmit={sendMessage}>
        <textarea
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say Something"
        ></textarea>
        <button type="submit" disabled={!formValue}>
          <AiIcons.AiOutlineSend className="send__button" />
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || "/dp.png"} />
   
    
        <p>{text}</p>
   
       
       
        
      </div>
    </>
  );
}

export default Chat;
