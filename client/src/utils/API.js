import axios from "axios";

  const Books = {
    // Gets all books
    getBooks: function () {
      return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function (id) {
      return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
      return axios.post("/api/books", bookData);
    }
  }

  const Users = {
    login: function (userData) {
      return axios.post("/api/users/login", userData)
    },

    signup: function (userData) {
      return axios.post("/api/users/signup",userData)
    }

  }


export {Users, Books}