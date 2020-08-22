import React from "react";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
// import { Link } from "react-router-dom";
// import ListItem from "../dailies/ListItem"

export default function Quests(props) {
  // console.log(props);
  React.useEffect(() => {
    // const el = document.getElementsByClassName('datepicker-date-display')
    // console.log(el);
  });
  return (
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
                <span> || Due </span>
                {moment(todo.date).format("MM/DD/YYYY")}
                {/* LOOK AT ME! maybe add moment.js here instead of using "Date" */}
                <button
                  onClick={props.onClickComplete}
                  className="btn-small size blue waves-effect waves-light"
                  id={todo.experience}
                >
                  Complete
                </button>
                <button
                  onClick={props.onClickDelete}
                  className="btn-small size red waves-effect"
                >
                  Delete
                </button>
                {/* </div> */}
              </li>
            ))}
          </ul>
        ) : (
          <h4>"start your first quest"</h4>
        )}
      </div>
      <form className="questForm">
        {/* todo name input */}
        <input
          placeholder="enter quest"
          onChange={props.handleInputChange}
          type="text"
          id="submitForm"
        ></input>
        {/* React Date Picker */}
        <DatePicker
          selected={props.selectedDate}
          onChange={props.handleDateChange}
          // minDate={new Date()}
          isClearable
          showYearDropdown
          scrollableYearDropdown
        />
        {/* <input 
              type="text" 
              className="datepicker"
              onChange={props.handleDateChange}
              ></input> */}

        <p className="errorMessage" style={{ color: "red" }}>
          {props.errors}
        </p>
        <button
          type="submit"
          onClick={props.submitTodo}
          className="btn"
          // disabled={props.submitDisabled}
        >
          Add Quest
        </button>
      </form>
    </div>
  );
}
