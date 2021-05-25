import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProvideAuth } from "./utils/use-auth"
import Stage from "./pages/Stage";
import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute"


function App() {
  return (
    <ProvideAuth>
      <Router>
          <Switch>
            <Route exact path={["/"]}>
              <Landing />
            </Route>
            <Route exact path={["/login"]}>
              <Login className="background" />
            </Route>
            <PrivateRoute exact path={["/stage"]}>
              <Stage />
            </PrivateRoute>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
