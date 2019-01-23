import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { deleteProject } from "../../store/actions/projectActions";
import moment from "moment";

class ProjectDetails extends Component {
  handleDelete = history => {
    const id = history.location.pathname.split("/")[2];
    this.props.deleteProject(id);
    history.push("/");
  };
  render() {
    const { project, auth, history } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action gray lighten-4">
              <div>
                Posted by {project.authorFirstName} {project.authorLastName}
                <button
                  className="btn waves-effect red darken-1 right"
                  onClick={() => this.handleDelete(history)}
                >
                  Delete Project{" "}
                  <i className="material-icons right">
                    indeterminate_check_box
                  </i>
                </button>
              </div>

              <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p id="msg">Loading project data...</p>
          {project
            ? setTimeout(function() {
                document.getElementById("msg").innerHTML =
                  "Project not found. Redirecting to homepage...";
                setTimeout(function() {
                  history.push("/");
                }, 2000);
              }, 3000)
            : null}
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProject: id => {
      dispatch(deleteProject(id));
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
