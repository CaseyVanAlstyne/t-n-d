import React, { Component } from "react";
import { Link } from "react-router-dom";
class Quests extends Component {
  render() {
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
                ul (list of quest items) li (each item contains
                checkbox/complete questName, points/experience, complete/delete
                button)
                <button type="submit">Complete</button>
                <button type="submit">Delete</button>
              </div>
              <form className="questForm">
                <input placeholder="enter quest"></input>
                <button type="submit">Add Quest</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Quests;
