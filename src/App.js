import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
import Donate from "./Donate";
import About from "./About";
import Bottom from "./Bottom";
import Oxygen from "./Oxygen";
import Plasma from "./Plasma";
import Doctor from "./Doctor";
import Ambulance from "./Ambulance";
import HomeNurse from "./HomeNurse";
import Fabiflue from "./Fabiflue";
import Remdesivir from "./Remdesivir";
import IcuBeds from "./IcuBeds";
import FoodService from "./Foodservice";
import Feedback from './Feedback';
import Leads from './Leads';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <Bottom />
          </Route>
          <Route exact path="/oxygen">
            <Oxygen />
            <Bottom />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>

          <Route exact path="/donate" component={Donate} />
          <Route exact path="/about" component={About} />
          <Route exact path="/feedback">
            <Feedback />
            
          </Route>
          <Route exact path="/plasma">
            <Plasma />
            <Bottom />
          </Route>
          {/* <Route exact path="/doctor">
            <Doctor />
            <Bottom />
          </Route> */}
          {/* <Route exact path="/ambulance">
            <Ambulance />
            <Bottom />
          </Route> */}
          {/* <Route exact path="/homenurse">
            <HomeNurse />
            <Bottom />
          </Route> */}
          {/* <Route exact path="/fabiflue">
            <Fabiflue />
            <Bottom />
          </Route> */}
          <Route exact path="/remdesivir">
            <Remdesivir />
            <Bottom />
          </Route>
          <Route exact path="/icubeds">
            <IcuBeds />
            <Bottom />
          </Route>
          <Route exact path="/foodService">
            <FoodService />
            <Bottom />
          </Route>
          <Route exact path="/leadsForm">
            <Leads />
           
          </Route>

          <Route>
            <Home />
            <Bottom />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
