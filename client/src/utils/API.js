import axios from "axios";

export default {
  // api call used in components to add a todo
  addTodo: function (id, questListData) {
    console.log(questListData);
    return axios.post(`/api/addquest/${id}`, {
      quest: questListData,
    });
  },

  addDaily: function (id, dailyListData) {
    console.log(dailyListData);
    return axios.post(`/api/adddaily/${id}`, {
      daily: dailyListData,
    });
  },

  completeDaily: function (id, dailiesList) {
    return axios.post(`/api/completedaily/${id}/`, {
      dailiesList: dailiesList,
    });
  }, 

  // api call used in dashboard component to return full user data
  getUser: function (id) {
    return axios.get(`/api/getuser/${id}`);
  },

  deleteQuest: function (id, questId) {
    return axios.put(`api/deletequest/${id}/${questId}`);
  },

  deleteDaily: function (id, dailyId) {
    return axios.put(`api/deletedaily/${id}/${dailyId}`);
  },

  updateEXP: function (id, experience) {
    return axios.put(`api/updateEXP/${id}/${experience}`);
  },

  updateQuests: function(id, questlist) {
    return axios.put(`api/updatequests/${id}`,{
      questList: questlist,
    })
  },

  updatePlayerHealth: function(id, playerHealth) {
    return axios.put(`api/updateplayerhealth/${id}`,{
      playerHealth: playerHealth,
    })
  },
};
