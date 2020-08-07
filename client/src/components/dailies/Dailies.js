import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import ListItems from './ListItems';

const Dailies = () => {
  const [text, setText] = useState({});
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // axios.get('http://localhost:4000/todos/')
    //         .then(response => {
    //             setTodos({ todos: response.data });
    //         })
    //         .catch(function (error){
    //             console.log(error);
    //         })
  }, [])

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // axios.post('http://localhost:4000/todos/add', newTodo)
    //         .then(res => console.log(res.data));
  }

    return (
      <div className="dailiesList">
        <div className="dailiesListHeader">
          <h1>
            <b>Dailies</b>
          </h1>
        </div>
        <div className="DailyItems">
          <ListItems todos={todos} />
            <button type="submit">Complete</button>
            <button type="submit">Delete</button>
        </div>
        <form onSubmit={handleSubmit} className="dailyForm">
          <input placeholder="enter daily" onChange={handleChange}></input>
          <button type="submit">Add Daily</button>
        </form>
      </div>
    );

}
export default Dailies;
