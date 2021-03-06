import React from "react";
import logo_react from "./logo_react.svg";
import logo_redux from "./logo_redux.svg";
import plus_icon from "./plus_icon.svg";
import "./logo.css";
import { Link } from "react-router-dom";
import SignedInLinks from "./signedInLinks";
import SignedOutLinks from "./signedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <div className="logo-wrapper-div">
          <img src={plus_icon} className="App-icon-plus" alt="plus" />
          <Link to="/" className="brand-logo left">
            MarioPlan
          </Link>
          <img src={logo_react} className="App-logo-react" alt="react logo" />
          <img src={logo_redux} className="App-logo-redux" alt="redux logo" />
        </div>
        <div className="right">{links}</div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
