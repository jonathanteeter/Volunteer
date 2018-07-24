import axios from "axios";

export default {
  // Gets all Opportunities
  getOpps: function() {
    return axios.get("/api/router");
  },
  // Gets the Opportunity with the given id
  getOpp: function(id) {
    return axios.get("/api/router/" + id);
  },
  // Deletes the Opportunity with the given id
  deleteOpp: function(id) {
    return axios.delete("/api/router/" + id);
  },
  // Saves an Opportunity to the database
  saveOpp: function(oppData) {
    return axios.post("/api/router", oppData);
  }
};
