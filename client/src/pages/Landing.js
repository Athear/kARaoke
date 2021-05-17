import React from "react";
import "../css/landing.css";
import { Container } from "../components/Grid"

function Landing() {
  return (
    <Container>
    <div className="jumbotron row">
      <h1 className="title">kARaoke</h1>

      
      <a className="btn btn-lg cta mt-5" href="/login" role="button">
      Just duet already!
      </a>
      
    </div>
    <div className="row crowd">
    <h1 className = "blank">CROWD GOES WILD</h1>
      </div>
      <div className="row">
        <br></br>
      </div>
    </Container>
  );
}

export default Landing;
