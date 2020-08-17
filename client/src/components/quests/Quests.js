import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";
// import ListItem from "../dailies/ListItem"

export default function Quests(props) {
  // console.log(props);
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
                <ul className="collection">
                  {props.quests.map((todo) => (
                    <li
                      id={todo.id}
                      className="collection-item"
                      key={todo.name}
                      exp={todo.experience}
                    >
                      {todo.name}
                      <span> || </span>
                      {todo.experience}
                      <span> Exp. </span>
                      {/* {todo.date} */}
                      {/* LOOK AT ME! maybe add moment.js here instead of using "Date" */}

                      <button
                        onClick={props.onClickDelete}
                        className="right btn-small size red waves-effect"
                      >
                        Delete
                      </button>
                      <button
                        onClick={props.onClickComplete}
                        className="right btn-small size blue waves-effect waves-light"
                        id={todo.experience}
                      >
                        Complete
                      </button>
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
                type="text"
                id="submitForm"
              ></input>

              <input 
              type="text" 
              className="datepicker"
              onChange={props.handleDateChange}
              ></input>
              
              <p className="errorMessage" style={{ color: "red" }}>
                {props.errors}
              </p>
              <button
                type="submit"
                onClick={props.submitTodo}
                // disabled={props.submitDisabled}
              >
                Add Quest
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
