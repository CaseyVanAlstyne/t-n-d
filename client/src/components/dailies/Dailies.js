import React from "react";
import "./dailies.css";
import moment from "moment";
import "../../index.css";


export default function Dailies(props) {
  let currentDate = moment();

  return (
    <div className="card">
      <div className="card-content">
        <div className="dailiesList">
          <div className="dailiesListHeader">
            <h2 className="center-align">
              <b>Dailies</b>
            </h2>
          </div>
          <form className="dailiesForm">
            <div className="row">
              <input
                placeholder="enter daily task"
                onChange={props.handleInputChange}
                type="text"
                id="submitFormD"
              ></input>
            </div>
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
                    <span> || Due in {Math.floor((moment(daily.date) - moment(currentDate)) / 3600000)} hours</span>

                    {/* {dailies.date} */}
                    {/* LOOK AT ME! maybe add moment.js here instead of using "Date" */}

                    <button
                      // onClick={props.onClickDelete}
                      className="right btn-small size red waves-effect"
                    >
                      <i className="material-icons"
                        id={daily.id}
                        onClick={props.onClickDelete}
                      >clear</i>
                    </button>
                    <button
                      // onClick={props.onClickComplete}
                      className={daily.completable ? "right btn-small size blue waves-effect waves-light" : "right btn-small size blue waves-effect waves-light disabled"}
                      id={daily.id}
                    >
                      <i className="material-icons"
                        id={daily.experience}
                        onClick={props.onClickComplete}
                      >check</i>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
                <h4>"Start your first daily task!"</h4>
              )}
          </div>

        </div>
      </div>
    </div>
  );
}
