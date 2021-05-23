import React from "react";
import P5Wrapper from 'react-p5-wrapper'
import sketch from "./sketch"
import "./style.css";
import { useAuth } from "../../utils/use-auth";



const Canvas = ({currentSong}) => {
  
  const { signout } = useAuth();
  console.log(signout);
  
  return (

 
  <div className="canvas">
  <button onClick = {signout}className="btn"><i class="fas fa-sign-out-alt fa-3x"></i> </button>
    <P5Wrapper sketch ={sketch}
      currentSong={currentSong}
    />
  </div>

)};



export default Canvas;