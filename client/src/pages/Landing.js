import React from "react";
import Jumbotron from "../components/Jumbotron";
import "../css/landing.css";


function Landing() {
  return (
    <div>
      <Jumbotron />
      <div className="crowd">
        <h1 className="blank">CROWD GOES WILD</h1>
      </div>
    </div>
  );
}

export default Landing;
