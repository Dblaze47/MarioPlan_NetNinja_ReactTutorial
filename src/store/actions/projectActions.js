export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // perform async requests to the firestore.
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Manosh",
        authorLastName: "Talukder",
        authorId: 12345,
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
