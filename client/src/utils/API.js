import axios from "axios";

export default {
  // Gets all books
  getTrips: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getTrip: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveTrip: function(tripData) {
    return axios.post("/api/trip", tripData);
  }
};
