import React, { useState, useEffect, useContext, createContext } from "react";
import API from "./API";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  //wrap API calls
  const signin = (userName, password) => {
    return API.login({
        username:userName,
        password:password
    })
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };
  const signup = (userName,email, password) => {
    return API.signup({
        username:userName,
        email:email,
        password:password
    })
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };
  const signout = () => {
    return API.logout({})
      .then(() => {
        setUser(false);
      });
  };

  // Subscribe to user on mount
  useEffect(() => {
    const unsubscribe = API.auth().then(res=>{
        if(res.data.user){
            setUser(res.data.user);
        }else{
            setUser(false);
        }
    })

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  
  return {
    user,
    signin,
    signup,
    signout,
  };
}