import React from "react";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
// import { Link } from "react-router-dom";
// import ListItem from "../dailies/ListItem"

export default function Quests(props) {
  // console.log(props);
  React.useEffect(() => {
    // const el = document.getElementsByClassName('datepicker-date-display')
    // console.log(el);
  })
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
                      <span> || Due </span>
                      {moment(todo.date).format('MM/DD/YYYY')}
                      {/* {todo.date.toString().slice(4,10)} */}
                      {/* LOOK AT ME! maybe add moment.js here instead of using "Date" */}
                      {/* <div className="row"></div>
                      <div className="row"> */}
                        {/* <button
                          onClick={props.onClickComplete}
                          class="btn-floating btn-small waves-effect waves-light green"
                          id={todo.experience}
                          >
                          <i class="material-icons">check</i>
                        </button>
                        <button
                          class="btn-floating btn-small waves-effect waves-light red"
                          onClick={props.onClickDelete}>
                          <i class="material-icons">close</i>
                        </button> */}



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
                  <h4>"Start your first quest, DUMMY!"</h4>
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
                minDate={new Date()}
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
