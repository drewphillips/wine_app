import axios from "axios";
 export default {

  getExam: function() {
    return axios.get("/api/question")
  },

  getUser: function(id){
    return axios.get("/api/users/" + id)
  },

  createUser: function(id){
    return axios.post("/api/users" + id)
  },

  postScore: function(id){
    return axios.post("/api/scores" + id)
  },

  getScore: function(id) {
    return axios.get("/api/scores" + id)
  }
};