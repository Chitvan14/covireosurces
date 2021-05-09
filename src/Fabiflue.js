import React, { useState } from "react";
import JSONDATA from "./JSON/FABIFLUE_DATA.json";
import './Fabiflue.css';
import * as FiIcon from "react-icons/fi";
import {IconContext} from 'react-icons';

function Fabiflue() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <IconContext.Provider value={{ color: "#1C212E" }}>
    <div className="fabiflue">
      <div className="fabiflue__top">
      <img className="item__image" src="/7.png" alt="fabiflue"/>
        <h1>FABIFLUE</h1>
      </div>
      <div className="fabiflue__mid">
        <input
          type="text"
          placeholder="Search City"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
        {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.city.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
          else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else if (
            val.name=="In Verification Coming Soon"
          ) {
            return val;
          }
        }).map((item, index) => {
          return (
            <li className={item.cName} key={index}>
             
             

              <h5>{item.verified}</h5>
              <h4>{item.name}</h4>
              <a href={`tel:${item.number}`} className="number_icon">
                  <h2>{item.number}</h2>
                  <div>
                    <FiIcon.FiPhoneCall />
                  </div>
                </a>
              <h6>{item.availability}</h6>
              <p>{item.city}</p>
            </li>
          );
        })}
      </div>
    </div>
    </IconContext.Provider>
  );
}

export default Fabiflue;
