export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // perform async requests to the firestore.
    const firestore = getFirestore(),
      state = getState(),
      uid = state.firebase.auth.uid,
      profile = state.firebase.profile;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: uid,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(error => {
        dispatch({ type: "CREATE_PROJECT_ERROR", error });
      });
  };
};

export const deleteProject = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .doc(id)
      .delete()
      .then(function() {
        dispatch({ type: "DELETE_PROJECT" });
      })
      .catch(function(error) {
        dispatch({ type: "DELETE_PROJECT_ERROR" }, error);
      });
  };
};
