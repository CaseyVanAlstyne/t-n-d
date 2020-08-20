import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Quests from "../quests/Quests";
import Dailies from "../dailies/Dailies";
import Statblock from "../statblock/statblock.js";
import API from "../../utils/API.js";
import { v4 as uuidv4 } from "uuid";
// var moment = require('moment-timezone');
import moment from "moment";
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
    dailyName: "",
    todoName: "",
    todoDate: "",
    dailyErrors: "",
    errors: "",
  };

  // function to handle changes in the quests panel
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ todoName: value });
  };

  handleInputChangeD = (event) => {
    const value = event.target.value;
    this.setState({ dailyName: value });
  };

  // function to handle state change for todoDate
  handleDateChange = (date) => {
    this.setState({
      todoDate: date,
    });
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
      date: this.state.todoDate,
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

  submitDaily = (e) => {
    e.preventDefault();
    // let newQuestList = this.state.quests;
    if (this.state.dailyName === "") {
      this.setState({
       dailyErrors: "Please enter a daily!",
      });
      return;
    }
    this.setState({ errors: "" });

    const dailyListData = {
      name: this.state.dailyName,
      experience: 20,
      date: moment().add(24,'h'), 
      id: uuidv4(),
    };
    this.setState(
      {
        dailies: [...this.state.dailies, dailyListData],
        // quests: [questListData],
      },
      () => {
        API.addDaily(this.state.id, dailyListData);
        this.clearInputD();
      }
    );
  };

  updateExperience(id, experience) {
    let currentExp = Math.floor(this.state.experience) + Math.floor(experience);
    this.setState({ experience: currentExp }, () => {
      API.updateEXP(id, currentExp);
    });
  }

  // function to log user out
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  // functions needed on page load
  componentDidMount() {
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
        // loop through quests
        for(var i = 0; i < this.state.quests.length; i++){
          let questlist = this.state.quests
          let currentDate = moment().format('YYYY-MM-DD')
          let questDate = moment(this.state.quests[i].date).format('YYYY-MM-DD') 
          // console.log(questDate)
          if(moment(questDate).isBefore(currentDate)){
            let dateArray = questDate.toString().split("-")
            dateArray[1] = dateArray[1] - 1
            let datePlus = moment(dateArray).add(1,'d').format('YYYY-MM-DD')
            questlist[i].date = moment(datePlus)
            this.setState({quests: questlist})
            let playerhealth = this.state.currentHealth - 1
            this.setState({currentHealth: playerhealth})
          }
        }
        // if overdue - harm player - > push task due date 24 hours
        // else nothing
      }).then(() => {
        API.updateQuests(this.state.id, this.state.quests);
        API.updatePlayerHealth(this.state.id, this.state.currentHealth);
      }
      );
  }

  clearInput = () => {
    this.setState({ todoName: "" });
    document.getElementById("submitForm").value = "";
  };

  clearInputD = () => {
    this.setState({ dailyName: "" });
    document.getElementById("submitFormD").value = "";
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

  deleteDaily(id, e) {
    const dailyId = e.target.parentNode.id;
    console.log("Delete was clicked.", id, dailyId);
    API.deleteDaily(id, dailyId).then(() => {
      var filteredDailies = this.state.dailies.filter((daily) => {
        return daily.id !== dailyId;
      });
      console.log(filteredDailies);
      this.setState({ dailies: filteredDailies });
    });
  }

  completeQuest(id, e) {
    e.preventDefault();
    const questId = e.target.parentNode.id;
    const questExp = e.target.id;
    console.log(questId);
    console.log(questExp);
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

  completeDaily(id, e) {
    e.preventDefault();
    const dailyId = e.target.parentNode.id;
    const dailyExp = e.target.id;
    console.log(dailyId)
    console.log(dailyExp)
    console.log("Complete was clicked.", id, dailyId);
    this.updateExperience(id, dailyExp);
    API.deleteDaily(id, dailyId).then(() => {
      var filteredDailies = this.state.dailies.filter((daily) => {
        return daily.id !== dailyId;
      });
      console.log(filteredDailies);
      this.setState({ dailies: filteredDailies });
    });
  }

  healPlayer(e) {
    e.preventDefault();
    if(this.state.experience >= 100){
    let newEXP = this.state.experience - 100
    this.setState({experience: newEXP});
    this.setState({currentHealth: this.state.totalHealth});
    API.updateEXP(this.state.id, newEXP)
    API.updatePlayerHealth(this.state.id, this.state.totalHealth)
    }else{
      alert("not enough experiance to heal!")
    }
  };

  render() {
    // const { user } = this.props.auth;
    return (
      <>
        {/* component that renders user stat information */}
        <Statblock
          userid={this.state.id}
          currentHealth={this.state.currentHealth}
          totalHealth={this.state.totalHealth}
          name={this.state.name}
          experience={this.state.experience}
          healPlayer={(e) => this.healPlayer(e)}
        />
        {/* component that renders active quests/todos */}
        <Quests
          quests={this.state.quests}
          selectedDate={this.state.todoDate}
          handleInputChange={this.handleInputChange}
          handleDateChange={this.handleDateChange}
          submitTodo={this.submitTodo}
          onClickDelete={(e) => this.deleteQuest(this.state.id, e)}
          onClickComplete={(e) => this.completeQuest(this.state.id, e)}
          errors={this.state.errors}
          // submitDisabled={!this.state.todoName}
        />

        {/* component that reders daily tasks */}
        <Dailies
          dailies={this.state.dailies}
          handleInputChange={this.handleInputChangeD}
          submitDaily={this.submitDaily}
          onClickDelete={(e) => this.deleteDaily(this.state.id, e)}
          onClickComplete={(e) => this.completeDaily(this.state.id, e)}
          errors={this.state.dailyErrors}
        />

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
