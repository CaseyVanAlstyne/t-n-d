import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
class Navbar extends Component {
    // function to log user out
    onLogoutClick = (e) => {
      e.preventDefault();
      this.props.logoutUser();
    };
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-2">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">gamepad</i>
              T&D
            </Link>
            <ul className="right">
              <li>
              <a style={{fontSize: 20}} className="teal lighten-3 black-text" onClick={this.onLogoutClick} ><b>Logout</b></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
