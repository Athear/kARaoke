import React from "react";
import P5Wrapper from 'react-p5-wrapper'
import sketch from "./sketch"
import "./style.css";


const Canvas = () => (

  <div className="canvas">
    <P5Wrapper sketch ={sketch}/>
  </div>
  
);



export default Canvas;