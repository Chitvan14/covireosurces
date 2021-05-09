import React from 'react';
import './Beds.css';
import { Link, NavLink } from "react-router-dom";

function Beds() {
  return (
    <div className="beds">
       <div className="icubeds">
      <div className="icubeds__top">
      <img className="item__image" src="/9.png" alt="icubeds"/>
        <h1>BEDS</h1>
      </div>
      <div className="icubeds__mid">

      <NavLink to="/ventilatorbeds" exact activeClassName="main-nav-active" className="icubed__nav">
            <h1>Ventilator Bed</h1>
           </NavLink>
           <NavLink to="/ambulancebeds" exact activeClassName="main-nav-active" className="icubed__nav">
            <h1>Ambulance Bed</h1>
           </NavLink>
           <NavLink to="/icubeds" exact activeClassName="main-nav-active" className="icubed__nav">
            <h1>Icu Bed</h1>
           </NavLink>
           <NavLink to="/oxygenbeds" exact activeClassName="main-nav-active" className="icubed__nav">
            <h1>Oxygen Bed</h1>
           </NavLink>
      </div>
      </div>
    </div>
  )
}

export default Beds
