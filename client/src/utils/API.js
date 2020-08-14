import axios from "axios";


export default {
  // api call used in components to add a todo
  addTodo: function (id, questListData) {
    console.log(questListData);
    return axios.post(`/api/addquest/${id}`, {
      quest: questListData,
    });
  },

  // api call used in dashboard component to return full user data
  getUser: function(id){
    return axios.get(`/api/getuser/${id}`)
  },

  deleteQuest: function(id, questId) {
    return axios.delete(`api/deletequest/${id}/${questId}`)
  } 
};
