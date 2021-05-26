import axios from "axios";

export default {

  getStage: function () {
    return axios.get("/api/stage");
  },

  getStageById: function (id) {
    return axios.get("/api/stage/" + id);
  },

  login: function (userData) {
    return axios.post("/api/users/login", userData)
  },

  signup: function (userData) {
    return axios.post("/api/users/signup", userData)
  },

  logout: function () {
    return axios.post("/api/users/logout")
  },

  auth: function () {
    return axios.get("/api/users/session")
  },

  giphy404: function () {
    return axios.get("/api/giphy")
  }
};
