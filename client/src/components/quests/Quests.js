import React from "react";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import ListItem from "../dailies/ListItem"

export default function Quests(props) {
  // console.log(props);
  React.useEffect(() => {
  });
  return (
    <div className="card">
          <div className="card-content">
    <div className="questsList">
      <div className="questsListHeader">
        <h2 className="center-align">
          <b>Quests</b>
        </h2>
      </div>
      <form className="questForm">
        {/* todo name input */}
        <div className="row">
          <input
            className="col sm12 m6 l6 xl8"
            placeholder="Enter Quest Here"
            onChange={props.handleInputChange}
            type="text"
            id="submitForm"
          ></input>
          {/* React Date Picker */}
          <DatePicker
            placeholderText="Set Due Date"
            // className="teal lighten-2"
            selected={props.selectedDate}
            onChange={props.handleDateChange}
            minDate={new Date()}
            isClearable
            showYearDropdown
            scrollableYearDropdown
          />
        </div>
        <p className="errorMessage" style={{ color: "red" }}>
          {props.errors}
        </p>
        <button
          type="submit"
          onClick={props.submitTodo}
          className="btn"
        >
          Add Quest
        </button>
      </form>
      <div className="questItems">
        {props.quests ? (
          <ul className="collection">
            {props.quests.map((todo) => (
              <li
                
                className="collection-item row"
                key={todo.name}
                exp={todo.experience}
              >
                {todo.name}
                <span> || </span>
                {todo.experience}
                <span> Exp. </span>
                <span> || Due </span>
                {moment(todo.date).format("MM/DD/YYYY")}
                {/* LOOK AT ME! maybe add moment.js here instead of using "Date" */}
                
                <button
                  // onClick={props.onClickDelete}
                  className="btn-small right size red waves-effect"
                >
                  <i class="material-icons"
                  id={todo.id}
                  onClick={props.onClickDelete}
                  >clear</i>
                </button>
                <button
                  // onClick={props.onClickComplete}
                  className="btn-small right size blue waves-effect waves-light"
                  id={todo.id}
                >
                  <i class="material-icons"
                  id={todo.experience}
                  onClick={props.onClickComplete}
                  >check</i>
                </button>
                
                </li>
            ))}
          </ul>
        ) : (
            <h4>"start your first quest"</h4>
          )}
      </div>

    </div>
    </div>
    </div>
  );
}
