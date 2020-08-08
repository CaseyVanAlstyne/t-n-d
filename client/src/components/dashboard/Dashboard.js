import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Quests from "../quests/Quests";
// import Dailies from "../dailies/Dailies";
import Statblock from "../statblock/statblock.js";
import API from "../../utils/API.js"

class Dashboard extends Component {
  state = {
    id: this.props.auth.user.id,
    currentHealth: this.props.auth.user.currentHealth,
    totalHealth: this.props.auth.user.totalHealth,
    name: this.props.auth.user.name,
    experience: this.props.auth.user.experience,
    quests: this.props.auth.user.quests,
    dailies: this.props.auth.user.dailies,
    todoName: ""
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({todoName: value});
  };

  submitTodo= (e) => {
    e.preventDefault()
    let newQuestList = this.state.quests
    newQuestList.push({
      name: this.state.todoName,
      experience: 20,
      date: Date.now,
    })
    this.setState({quests: newQuestList})
    API.addTodo(this.state.id, this.state.todoName)
  };

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    console.log(this.state)
    console.log(user);
    return (
      <>
        <Statblock
          userid={this.state.id}
          currentHealth={this.state.currentHealth}
          totalHealth={this.state.totalHealth}
          name={this.state.name}
          experience={this.state.experience}
        />
        <Quests
          quests={this.state.quests}
          handleInputChange={this.handleInputChange}
          submitTodo={this.submitTodo}
        />
        {/* <Dailies></Dailies> */}

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
