import React from "react";
import { useHistory } from "react-router-dom";
import P5Wrapper from 'react-p5-wrapper'
import sketch from "./sketch"
import sweetAlert from 'sweetalert2'
import "./style.css";
import { useAuth } from "../../utils/use-auth";


const Canvas = ({currentSong,changeSong}) => {
  
  const { signout } = useAuth();
  const history = useHistory();
  
  const handleSignout = function(){
    sweetAlert.fire({
      title: 'Log out?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#09ec36',
      cancelButtonColor: '#eca409',
      confirmButtonText: 'See you later, Aligator!',
      cancelButtonText: "one more song..."
    }).then((result) => {
      if (result.isConfirmed) {
        signout()
          .then(() => history.push("/")) 
          .catch(err => {
            sweetAlert.fire({
              icon: 'warning',
              title: err.response.data.message,
              footer: 'Error: ' + err.response.status
            })
          });
      }
    })
  }

  return (
  <div className="canvas">
    <P5Wrapper sketch ={sketch}
      currentSong={currentSong}
      changeSong={changeSong}
      signout={handleSignout }
    />
  </div>
)};



export default Canvas;