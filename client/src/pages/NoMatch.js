import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import axios from "axios";

// function NoMatch() {
//   return (
//     <Container fluid>
//       <Row>
//         <Col size="md-12">

//             <h1>404 Page Not Found-Try Tuning your Station</h1>
//             <h1>
//               {/* <span role="img" aria-label="Face With Rolling Eyes Emoji">
//                 🙄
//               </span> */}
//             </h1>

//         </Col>
//       </Row>
//     </Container>
//   );
// }

function NoMatch() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    axios
      .fetch(
        "https://api.giphy.com/v1/gifs/random?api_key=EDFnIGDFop0J3dJnQid2JTnCB0KZteY5&tag=shocking&rating=pg-13"
      ) // asynchronously load contents of the url
      // return a Promise that resolves when res is loaded
      .then((res) => res.json()) // call this function when res is loaded
      // return a Promise with result of above function
      .then((res) => {
        // call this function when the above chained Promise resolves
        this.setItems({
          data: res,
          setError: res.error || null,
          loading: false,
        });

        return (
          <Container>
            <Row>
              <Col size="md-6 sm-12">
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      {item.name} {item.price}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        );
      });
  });
}
export default NoMatch;
