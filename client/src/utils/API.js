import axios from "axios";

export default {
  // Gets all books
  getTrips: function() {
    return axios.get("/api/trips");
  },
  // Gets the book with the given id
  getTrip: function(id) {
    return axios.get("/api/trips/" + id);
  },
  // Saves a book to the database
  saveTrip: function(tripData) {
    return axios.post("/api/search", tripData);
  }
};
