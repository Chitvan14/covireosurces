import React, { useState } from "react";
import JSONDATA from "./JSON/DONATE_DATA.json";
import './Donate.css';

function Donate() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="donate">
      <div className="donate__top">
        <h1>Donate</h1>
      </div>
      <div className="donate__mid">
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
        {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
          
        }).map((item, index) => {
          return (
            <li className={item.cName} key={index}>
            
             
            <a href={item.website} className="donate__anchor">
             <img src={item.image}></img>
             
             
              {/* <h4>{item.website}</h4> */}
              <p>{item.name}</p>
           </a>
             
              
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Donate;
