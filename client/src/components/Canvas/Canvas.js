import React from "react";
import P5Wrapper from 'react-p5-wrapper'
import sketch from "./sketch"
import "./style.css";


const Canvas = ({currentSong}) => (

  <div className="canvas">
    <P5Wrapper sketch ={sketch}
      currentSong={currentSong}
    />
  </div>
  
);



export default Canvas;