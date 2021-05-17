import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stage from "./pages/Stage";
import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
  



function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path={["/"]}>
            <Landing />
          </Route>
          <Route exact path={["/login"]}>
          <Login className="background"/>
          </Route>
          <Route exact path={["/stage"]}>
            <Stage />
          </Route>
          {/* <Route exact path="/stage/:id">
            <Detail />
          </Route> */}
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
