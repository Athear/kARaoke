import React from "react";
import { Col, Row, Container } from "../components/Grid";
import axios from 'axios';
 

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          
            <h1>404 Page Not Found-Try Tuning your Station</h1>
            <h1>
              {/* <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span> */}
            </h1>
          
        </Col>
      </Row>
    </Container>
  );
}

// function NoMatch() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   // Note: the empty deps array [] means
//   // this useEffect will run once
//   // similar to componentDidMount()
//   useEffect(() => {
//     axios.get("https://dad-jokes.p.rapidapi.com/random/joke")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//           console.log(result);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name} {item.price}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

export default NoMatch;
