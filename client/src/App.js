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
        <div>
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
            {/* <Route exact path="/stage/:id">
              <Detail />
            </Route> */}
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
