import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Quests from "../quests/Quests";
// import Dailies from "../dailies/Dailies";
import Statblock from "../statblock/statblock.js";
import API from "../../utils/API.js";
import { v4 as uuidv4 } from "uuid";
import "materialize-css"
import M from "materialize-css"
// import { compareSync } from "bcryptjs";

// state of the application
class Dashboard extends Component {
  state = {
    id: this.props.auth.user.id,
    currentHealth: this.props.auth.user.currentHealth,
    totalHealth: this.props.auth.user.totalHealth,
    name: this.props.auth.user.name,
    experience: this.props.auth.user.experience,
    quests: this.props.auth.user.quests,
    dailies: this.props.auth.user.dailies,
    todoName: "",
    todoDate: "",
    errors: "",
  };
  

  // function to handle changes in the quests panel
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ todoName: value });
  };

  handleDateChange = (event) => {
    this.setState({ todoDate: event.target.date });
  };

  // function to add a todo to the state and then send that information to the database
  submitTodo = (e) => {
    e.preventDefault();
    // let newQuestList = this.state.quests;
    if (this.state.todoName === "") {
      this.setState({
        errors: "Please enter a quest before embarking on your adventure!",
      });
      return;
    }
    this.setState({ errors: "" });
    console.log(e.target.parentNode);
    const questListData = {
      name: this.state.todoName,
      experience: 20,
      date: Date.now,
      id: uuidv4(),
    };
    this.setState(
      {
        quests: [...this.state.quests, questListData],
        // quests: [questListData],
      },
      () => {
        API.addTodo(this.state.id, questListData);
        this.clearInput();
      }
    );
  };

  updateExperience(id, experience) {
    let currentExp = Math.floor(this.state.experience) + Math.floor(experience)
    this.setState(
      { experience: currentExp },
      () => {
        API.updateEXP(id, currentExp)
      }
    );
  };

  // function to log user out
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  // functions needed on page load
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems, {});
    });
    let user = "";
    // api call to get user data
    API.getUser(this.state.id)
      .then(function ({ data }) {
        // sets user data to be used outside of api call
        user = data;
      })
      .then(() => {
        // sets user data based on database information to allow for persistance through page reloads without logging in and out
        this.setState({
          quests: user.quests,
          currentHealth: user.currentHealth,
          totalHealth: user.totalHealth,
          dailies: user.dailies,
          experience: user.experience,
        });
      });
  }

  clearInput = () => {
    this.setState({ todoName: "" });
    document.getElementById("submitForm").value = "";
  };

  deleteQuest(id, e) {
    const questId = e.target.parentNode.id;
    console.log("Delete was clicked.", id, questId);
    API.deleteQuest(id, questId).then(() => {
      var filteredQuests = this.state.quests.filter((quest) => {
        return quest.id !== questId;
      });
      console.log(filteredQuests);
      this.setState({ quests: filteredQuests });
    });
  }

  completeQuest(id, e) {
    e.preventDefault();
    const questId = e.target.parentNode.id;
    const questExp = e.target.id;
    console.log(questId)
    console.log(questExp)
    console.log("Complete was clicked.", id, questId);
    this.updateExperience(id, questExp);
    API.deleteQuest(id, questId).then(() => {
      var filteredQuests = this.state.quests.filter((quest) => {
        return quest.id !== questId;
      });
      console.log(filteredQuests);
      this.setState({ quests: filteredQuests });
    });
  }

  render() {
    // const { user } = this.props.auth;
    // console.log(this.state);
    // console.log(user);
    return (
      <>
        {/* component that renders user stat information */}
        <Statblock
          userid={this.state.id}
          currentHealth={this.state.currentHealth}
          totalHealth={this.state.totalHealth}
          name={this.state.name}
          experience={this.state.experience}
        />
        {/* component that renders active quests/todos */}
        <Quests
          quests={this.state.quests}
          handleInputChange={this.handleInputChange}
          handleDateChange={this.handleDateChange}
          submitTodo={this.submitTodo}
          onClickDelete={(e) => this.deleteQuest(this.state.id, e)}
          onClickComplete={(e) => this.completeQuest(this.state.id, e)}
          errors={this.state.errors}
        // submitDisabled={!this.state.todoName}
        />

        {/* component that reders daily tasks */}
        {/* <Dailies
          dailies={this.state.dailies}
          handleInputChange={this.handleInputChange}
          submitTodo={this.submitTodo}
        /> */}

        {/* logout button */}
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button>
      </>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
