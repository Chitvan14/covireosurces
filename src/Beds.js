import React from 'react';
import './Beds.css';
import { Link, NavLink } from "react-router-dom";

function Beds() {
  return (
    <div className="beds">
       <div className="icubeds">
      <div className="icubeds__top">
      <img className="item__image" src="/9.png" alt="icubeds"/>
        <h2>BEDS</h2>
      </div>
      <div className="icubeds__mid">

      <NavLink to="/ventilatorbeds" exact activeClassName="main-nav-active" className="icubed__nav">
            <h3>Ventilator Bed</h3>
           </NavLink>
          
           <NavLink to="/icubeds" exact activeClassName="main-nav-active" className="icubed__nav">
            <h3>Icu Bed</h3>
           </NavLink>
           <NavLink to="/oxygenbeds" exact activeClassName="main-nav-active" className="icubed__nav">
            <h3>Oxygen Bed</h3>
           </NavLink>
           <NavLink to="/ambulancebeds" exact activeClassName="main-nav-active" className="icubed__nav">
            <h3>Ambulance</h3>
           </NavLink>
      </div>
      </div>
    </div>
  )
}

export default Beds
