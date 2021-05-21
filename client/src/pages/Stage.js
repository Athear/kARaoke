import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import SongSelection from "../components/SongSelection";
import Canvas from "../components/Canvas/Canvas"
import SongButton from "../components/SongButton/SongButton";
import "../css/stage.css";
import SongVideo from "../components/SongVideo";

function Stage() {
  // Setting our component's initial state
  const [buttons, setButtons] = useState([])//sets state of all buttons

  const [activeSong, setSong] = useState({})

  // Load and set stage with setStage
  useEffect(() => {
    loadStage()
  }, [])

  // Calls database and sets state of buttons
  function loadStage() {
    API.getStage()
      .then(res => 
        
        setButtons(res.data),
      )
      .catch(err => console.log(err));
  };

 // Handles updating component state when the user clicks button
  function handleClick(event) {
    event.preventDefault();
    const songId = event.target.id

    const selectedSong = buttons.find(song => song._id === songId)
    
    setSong(selectedSong);
    // <video style = {{visibility: 'show'}} />
   
  };

    return (
      <>
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
          <Canvas currentSong={activeSong}/>
          </Col>
          <Col size="md-6 sm-12">
            <Row>
          <SongSelection currentSong={activeSong}/>
          
               </Row>
               </Col>
               </Row>
      </Container>
      <div className = "buttonsDiv">
             {buttons.map((songData) =>(
               <SongButton
                 key={songData._id}
                 id={songData._id}
                 title={songData.name}
                 costume={songData.costume}
                 src={songData.song}
                 filter={songData.filter}
                 handleClick={handleClick}
               />
               
               ))}
          </div>
          </>
    );
  }


export default Stage;
