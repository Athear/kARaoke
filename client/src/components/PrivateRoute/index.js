import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../utils/use-auth"

export default function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
      auth.user == null ? ( //auth not loaded yet
        "LOADING...."
      ) : (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
    );
  }