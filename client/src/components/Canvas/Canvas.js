import React from "react";
import P5Wrapper from 'react-p5-wrapper'
import sketch from "./sketch"
import "./style.css";
import { useAuth } from "../../utils/use-auth";


const Canvas = ({currentSong}) => {
  
  const { signout } = useAuth();
  
  return (
  <div className="canvas">
    <P5Wrapper sketch ={sketch}
      currentSong={currentSong}
      signout={signout}
    />
  </div>
)};



export default Canvas;