import React from "react";
// import { Link } from "react-router-dom";
// import ListItem from "../dailies/ListItem"

export default function Quests(props) {

  console.log(props);
  return (
    <section className="container">
      <div className="row">
        <div className="col s12 m6">
          <div className="questsList">
            <div className="questsListHeader">
              <h1>
                <b>Quests</b>
              </h1>
            </div>
            <div className="questItems">
              {props.quests ? (
                <ul>
                  {props.quests.map((todo) => (
                    <li key={todo.name}>
                      {todo.name}
                      {todo.experience}
                      {/* {todo.date} */}
                      {/* LOOK AT ME! maybe add moment.js here instead of using "Date" */}
                      <button type="submit">Complete</button>
                      <button onClick={() => props.onClick(todo._id)} type="submit">Delete</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <h4>"Start your first quest, DUMMY!"</h4>
              )}
            </div>
            <form className="questForm">
              <input
                placeholder="enter quest"
                onChange={props.handleInputChange}
              ></input>
              <button type="submit" onClick={props.submitTodo}>
                Add Quest
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
