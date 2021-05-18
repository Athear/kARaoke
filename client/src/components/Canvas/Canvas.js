import React from "react";
import P5Wrapper from 'react-p5-wrapper'
import sketch from "./sketch"
import "./style.css";


const Canvas = (props) => (

  <div className="canvas">
    <P5Wrapper sketch ={sketch}
      currentSong={props}
    />
  </div>
  
);



export default Canvas;