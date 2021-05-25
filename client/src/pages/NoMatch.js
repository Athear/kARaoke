import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "../components/Grid";
import axios from "axios";
import "../css/nomatch.css";

function NoMatch() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const API_URL="https://api.giphy.com/v1/gifs/random?api_key=EDFnIGDFop0J3dJnQid2JTnCB0KZteY5&tag=cat&rating=pg"

  useEffect(() => {
    axios
      .get("https://api.giphy.com/v1/gifs/random?api_key=EDFnIGDFop0J3dJnQid2JTnCB0KZteY5&tag=cats&rating=pg-13")
      .then(
        (result) => {
          setItems([result.data.data]);
          console.log(result);
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
      <Container>
        <Row>
          <Col size="md-12">
          <h1>404-this page exists</h1>
          <p>...but it's for back-stage kitties. Hang out if you want, or head back to the...</p>
          <div className="container">
          <div className="vertical-center">
          <button>STAGE</button>
          </div>
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
    );
  }
}

export default NoMatch;
