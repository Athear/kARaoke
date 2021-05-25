import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SongSelection from "../components/SongSelection";
import Canvas from "../components/Canvas/Canvas"
import "../css/stage.css";
import StageHeader from "../components/StageHeader";
import Carousel from "react-bootstrap/Carousel"

function Stage() {
  // Setting our component's initial state
  const [buttons, setButtons] = useState([])//sets state of all buttons

  const [activeSong, setSong] = useState({})

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
      .then(res => setButtons(res.data))
      .catch(err => console.log(err));
  };

  function handleClick(event) {
    event.preventDefault();
    const songId = event.target.id
    const selectedSong = buttons.find(song => song._id === songId)

    setSong(selectedSong);
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
              {Object.keys(activeSong).length === 0?(
                <Carousel>
                  {buttons.map((songData) => (
                    <Carousel.Item key={songData._id}>
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
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <SongSelection 
                  currentSong={activeSong}
                />
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default Stage;
