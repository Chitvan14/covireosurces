import React, { useState } from "react";
import JSONDATA from "./JSON/REMDESIVIR_DATA.json";
import "./Remdesivir.css";
import * as FiIcon from "react-icons/fi";
import { IconContext } from "react-icons";
import SocialShare from './SocialShare';
function Remdesivir() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <IconContext.Provider value={{ color: "#1C212E" }}>
      <div className="remdesivir">
        <div className="remdesivir__top">
          <img className="item__image" src="/8.png" alt="doctor" />
          <h1>REMDESIVIR</h1>
        </div>
        <div className="remdesivir__mid">
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
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else if (val.name == "In Verification Coming Soon") {
              return val;
            }
          }).map((item, index) => {
            return (
              <li className={item.cName} key={index}>
                <h5>{item.verified}</h5>
                <h4>{item.name}</h4>

                {/* <a href={`tel:${item.number}`} className="number_icon">
                  <h2>{item.number}</h2>
                  <div></div>
                </a> */}
                <a href={item.website}>
                  <h6>{item.websiteName}</h6>
                </a>
                <h6>{item.availability}</h6>
                <p>{item.city}</p>
              </li>
            );
          })}
          {/* <SocialShare/> */}
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Remdesivir;
