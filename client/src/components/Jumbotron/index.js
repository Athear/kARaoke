import React from "react";
import "./style.css";

function Jumbotron() {
  return (
   <div>
   <div className="jumbotron row">
      <h1 className="title">kARaoke</h1>
    </div>
      <div className="text-center jumbotron row">
      <a className="btn btn-lg cta rounded-0" href="/stage" role="button">
      Just duet already!
      </a>
      </div>
      </div>
  );
}

export default Jumbotron;
