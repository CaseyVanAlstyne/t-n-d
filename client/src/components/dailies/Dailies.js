import React from "react";
import "./dailies.css";
import moment from "moment";
import "../../index.css";

export default function Dailies(props) {
  return (
    <div className="dailiesList">
      <div className="dailiesListHeader">
        <h1>
          <b>Dailies</b>
        </h1>
      </div>
      <div className="dailiesItems">
        {props.dailies ? (
          <ul className="collection">
            {props.dailies.map((daily) => (
              <li
                id={daily.id}
                className="collection-item"
                key={daily.name}
                exp={daily.experience}
              >
                {daily.name}
                <span> || </span>
                {daily.experience}
                <span> Exp. </span>
                {/* {dailies.date} */}
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
                  id={daily.experience}
                >
                  Complete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h4>"Start your first daily task!"</h4>
        )}
      </div>
      <form className="dailiesForm">
        <input
          placeholder="enter daily task"
          onChange={props.handleInputChange}
          type="text"
          id="submitFormD"
        ></input>
        <p className="errorMessage" style={{ color: "red" }}>
          {props.errors}
        </p>
        <button
          type="submit"
          onClick={props.submitDaily}
          className="btn"
          // disabled={props.submitDisabled}
        >
          Add Daily Task
        </button>
      </form>
    </div>
  );
}
