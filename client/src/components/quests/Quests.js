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
              <table>
                <thead>
                  <tr>
                    <th>Quest</th>
                    <th>Due Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {props.quests.map((todo) => (
                    <tr key={todo.name}>
                      <td>{todo.name}</td>
                      <td>{moment(todo.date).format("MM/DD/YYYY")}</td>
                      <td>
                        <button
                          // onClick={props.onClickDelete}
                          className="btn-small right size red waves-effect"
                        >
                          <i className="material-icons"
                            id={todo.id}
                            onClick={props.onClickDelete}
                          >clear</i>
                        </button>
                      
                        <button
                          // onClick={props.onClickComplete}
                          className="btn-small right size blue waves-effect waves-light"
                          id={todo.id}
                        >
                          <i className="material-icons"
                            id={todo.experience}
                            onClick={props.onClickComplete}
                          >check</i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
                <h4>"start your first quest"</h4>
              )}
          </div>

        </div>
      </div>
    </div>
  );
}
