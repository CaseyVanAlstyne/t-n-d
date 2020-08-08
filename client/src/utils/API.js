import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  addTodo: function(id, name) {
    console.log(name)
    return axios.post(`/api/addquest/${id}`, {
      name: name
    })
  },
};