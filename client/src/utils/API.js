import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  addTodo: function (id, questListData) {
    console.log(questListData);
    return axios.post(`/api/addquest/${id}`, {
      quest: questListData,
    });
  },
};
