import axios from "axios";

export default {
  // Gets all books
  getStage: function() {
    return axios.get("/api/stage");
  },
  // Gets the book with the given id
  getStage: function(id) {
    return axios.get("/api/stage/" + id);
  },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
