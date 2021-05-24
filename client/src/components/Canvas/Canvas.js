import React from "react";
import P5Wrapper from 'react-p5-wrapper'
import sketch from "./sketch"
import "./style.css";
import { useAuth } from "../../utils/use-auth";


const Canvas = ({currentSong,changeSong}) => {
  
  const { signout } = useAuth();
  
  return (
  <div className="canvas">
    <P5Wrapper sketch ={sketch}
      currentSong={currentSong}
      changeSong={changeSong}
      signout={signout}
    />
  </div>
)};



export default Canvas;