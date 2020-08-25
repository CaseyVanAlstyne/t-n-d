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
              <table>
                <thead>
                  <tr>
                    <th>Daily</th>
                    <th>Due in</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {props.dailies.map((daily) => (
                    <tr>
                      <td key={daily.name}>{daily.name}</td>
                      <td>{Math.floor((moment(daily.date) - moment(currentDate)) / 3600000)} hours</td>
                      <td>
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
                <h4>"Start your first daily task!"</h4>
              )}
          </div>

        </div>
      </div>
    </div>
  );
}
