import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create-project">New Project</NavLink>
      </li>
      <li>
        <a href="/" onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        {props.profile.initials ? (
          <NavLink to="/" className="btn btn-floating red lighten-1">
            {props.profile.initials}
          </NavLink>
        ) : null}
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
