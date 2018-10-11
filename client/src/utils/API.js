import axios from "axios";
 export default {

  getExam: function() {
    return axios.get("/api/exam")
  },

  getUser: function(emailAddress,password){
    return axios.get("/api/users/", {emailAddress,password})
  },

  createUser: function(emailAddress, password){
    return axios.post("/api/user/createUser",{emailAddress,password})
  },

  // postScore: function(id){
  //   return axios.post("/api/scores" + id)
  // },

  // getScore: function(id) {
  //   return axios.get("/api/scores" + id)
  // },

  // getAllUser: function() {
  //   return axios.get("/api/getAllUser")
  // }
};