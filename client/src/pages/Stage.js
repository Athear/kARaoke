import React, { useState, useEffect, useRef } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SongSelection from "../components/SongSelection";
import Canvas from "../components/Canvas/Canvas"
import SongButton from "../components/SongButton/SongButton";
import "../css/stage.css";
import StageHeader from "../components/StageHeader";

function Stage() {
  // Setting our component's initial state
  const [buttons, setButtons] = useState([])//sets state of all buttons

  const [activeSong, setSong] = useState({})

  const videoref = useRef();
  const buttonref = useRef();
  // Load and set stage with setStage
  useEffect(() => {
    if(Object.keys(activeSong).length === 0){
      loadStage()
    }
    else{
      setButtons([])
    }
  }, [activeSong])

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


    // const lyricvideo = document.getElementsByClassName("test");
    // lyricvideo.style.visbility = "show";

    setSong(selectedSong);
    // <video style = {{visibility: 'show'}} />
    // videoref.current.style.display = "block";
    // buttonref.current.style.display = "none";
  };

  return (
    <>
      <StageHeader></StageHeader>
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Canvas currentSong={activeSong} changeSong={setSong} />
          </Col>
          <Col size="md-6 sm-12">
            <Row>
              <SongSelection currentSong={activeSong}
                videoref={videoref}
              />

            </Row>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col size="md-6 sm-12">
        </Col>
        
        <Col size="md-6 sm-12">
          {buttons?
            (
            <div className="buttonsDiv" ref={buttonref}>
              {buttons.map((songData) => (
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
            ): <></>
          }
                </Col>
               </Row>
    </>
  );
}


export default Stage;
