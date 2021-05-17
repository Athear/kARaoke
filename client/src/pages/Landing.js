import React from "react";
import "../css/landing.css";

function Landing() {
  return (
    <div className="jumbotron">
      <h1 className="title">kARaoke</h1>

      <div className="text-center">
      <a className="btn btn-lg cta mt-5" href="/login" role="button">
        Learn more
      </a>
      </div>
    </div>
  );
}

export default Landing;
