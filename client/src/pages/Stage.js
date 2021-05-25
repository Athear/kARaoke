import React, { useState, useEffect, useRef } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SongSelection from "../components/SongSelection";
import Canvas from "../components/Canvas/Canvas"
import "../css/stage.css";
import StageHeader from "../components/StageHeader";
import Carousel from "react-bootstrap/Carousel"
// import SongButton from "../components/SongButton/SongButton"

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

    setSong(selectedSong);
   
    videoref.current.style.display = "block";
    buttonref.current.style.display = "none";
  };

  return (
    <>
      <StageHeader/>
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Canvas currentSong={activeSong} changeSong={setSong} />
          </Col>
          <Col size="md-6 sm-12">
            <Row>

              {Object.keys(activeSong).length !== 0?(
                <SongSelection currentSong={activeSong}
                  videoref={videoref}
                />
              ):<></>
              }
              <div ref={buttonref}>
              {buttons?(
                <Carousel>
                  {buttons.map((songData) => (
                    <Carousel.Item
                    key={songData._id}>
                      <img
                        className="d-block w-50 zoom"
                        src={songData.cover}
                        alt={""+songData.name}
                        id={songData._id}
                        title={songData.name}
                        costume={songData.costume}
                        filter={songData.filter}
                        onClick={handleClick}
                      ></img>
                      {/* <SongButton
                        key={songData._id}
                        handleClick={handleClick}
                      /> */}
                    </Carousel.Item>
                  ))}
                  ;
                </Carousel>) : (<></>) }
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default Stage;
