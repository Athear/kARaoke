import React, { useState, useEffect } from "react";
import { Row, Container } from "../components/Grid";
import axios from "axios";
import "../css/nomatch.css";

function NoMatch() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/search?q=wrong&api_key=EDFnIGDFop0J3dJnQid2JTnCB0KZteY5&limit=1"
      )
      .then(
        (result) => {
          setItems(result.data.data);
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
          <Row>
            <div className="giphyContainer">
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <img src={item.images.original.url}></img>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default NoMatch;
