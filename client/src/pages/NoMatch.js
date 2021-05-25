import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "../components/Grid";
import axios from "axios";
import API from "../utils/API";
import "../css/nomatch.css";
import {Link} from "react-router-dom";


function NoMatch() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.giphy404()
    .then(
      (result) => {
        setItems([result.data]);
        console.log(result.data);
      },
      (error) => {
        setError(error);
      }
    );

    
  }, []);
  console.log(items);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="backstage">
      <Container>
        <Row>
          <Col size="md-12">
          <div className="text">
          <h1>404-Hey!  You're backstage!</h1>
          <p>There's not much going on here right now; Go back to the stage to join the party!</p>
          <Link to="/stage">
          <button className="stage-btn">Back to Stage</button>
          </Link>
          </div>
            <div className="giphyContainer">
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <img src={item.images.original.url}></img>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default NoMatch;
