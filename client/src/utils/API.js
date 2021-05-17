import axios from "axios";

export default {
  
  getStage: function() {
    return axios.get("/api/stage");
  },

  getStage: function(id) {
    return axios.get("/api/stage/" + id);
  },

  login: function (userData) {
    return axios.post("/api/users/login", userData)
  },

  signup: function (userData) {
    return axios.post("/api/users/signup",userData)
  },

  auth: function () {
    return axios.get("/api/users/session")
  }
};
