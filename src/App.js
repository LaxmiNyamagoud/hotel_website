import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Pages/Contact_Us/Contact";
import Facilities from "./Pages/Facilities/Facilities";
import Rooms from "./Pages/Rooms/Rooms";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/Facilities">
            <Facilities />
          </Route>
          <Route path="/Rooms">
            <Rooms />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
