import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
import Donate from "./Donate";
import About from "./About";
import Bottom from "./Bottom";
import Oxygen from "./Oxygen__home";
import Plasma from "./Plasma";
import Remdesivir from "./Remdesivir";
import Beds from "./Beds";
import FoodService from "./Foodservice";
import Feedback from "./Feedback";
import Leads from "./Leads";
import OxygenBeds from "./insideCards/OxygenBeds";
import VentilatorBeds from "./insideCards/VentilatorBeds";
import AmbulanceBeds from "./insideCards/AmbulanceBeds";
import IcuBeds from "./insideCards/IcuBeds";
import OxygenCylinder from "./insideCards/OxygenCylinder";
import RefillCans from "./insideCards/RefillCans";
import OxygenConcentrator from "./insideCards/OxygenConcentrator";
import Disclaimer from "./Disclamer";

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
          <Route exact path="/disclaimer">
            <Disclaimer />
          </Route>
          <Route exact path="/oxygenbeds">
            <OxygenBeds />
            <Bottom />
          </Route>
          <Route exact path="/ventilatorbeds">
            <VentilatorBeds />
            <Bottom />
          </Route>
          <Route exact path="/ambulancebeds">
            <AmbulanceBeds />
            <Bottom />
          </Route>
          <Route exact path="/icubeds">
            <IcuBeds />
            <Bottom />
          </Route>

          <Route exact path="/oxygen">
            <Oxygen />
            <Bottom />
          </Route>
          <Route exact path="/concentrator">
            <OxygenConcentrator />
            <Bottom />
          </Route>
          <Route exact path="/refill">
            <RefillCans />
            <Bottom />
          </Route>
          <Route exact path="/cylinder">
            <OxygenCylinder />
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

          <Route exact path="/remdesivir">
            <Remdesivir />
            <Bottom />
          </Route>
          <Route exact path="/beds">
            <Beds />
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
