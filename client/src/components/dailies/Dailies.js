import React, { Component } from "react";
import { Link } from "react-router-dom";
class Dailies extends Component {
  render() {
    return (
      <div className="dailiesList">
        <div className="dailiesListHeader">
          <h1>
            <b>Dailies</b>
          </h1>
        </div>
        <div className="DailyItems">
          ul (list of daily items)
            li (each item contains checkbox/complete dailyName, points/experience, complete/delete button)
            <button type="submit">Complete</button>
            <button type="submit">Delete</button>
        </div>
        <form className="dailyForm">
          <input placeholder="enter daily"></input>
          <button type="submit">Add Daily</button>
        </form>
      </div>
    );
  }
}
export default Dailies;
