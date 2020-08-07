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
      <section className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="dailiesList">
              <div className="dailiesListHeader">
                <h1>
                  <b>Dailies</b>
                </h1>
              </div>
              <div className="DailyItems">
                ul (list of daily items) li (each item contains
                checkbox/complete dailyName, points/experience, complete/delete
                button)
                <button type="submit">Complete</button>
                <button type="submit">Delete</button>
              </div>
              <form className="dailyForm">
                <input placeholder="enter daily"></input>
                <button type="submit">Add Daily</button>
              </form>
            </div>
          </div>
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
      </section>
    );

}
export default Dailies;
