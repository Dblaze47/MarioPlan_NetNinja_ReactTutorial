const initState = {
  projects: [
    { id: "1", title: "Help me find peach", content: "blah blah blah" },
    { id: "2", title: "Collect all the start", content: "blah blah blah" },
    { id: "3", title: "Egg hunt with Yoshi", content: "blah blah blah" }
  ],
  projectError: null
};

export default function projectReducer(state = initState, action) {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project:", action.project);
      return {
        ...state,
        projectError: null
      };
    case "CREATE_PROJECT_ERROR":
      console.log("Project Creation error: " + action.error);
      return {
        ...state,
        projectError: action.error.message
      };
    case "DELETE_PROJECT":
      console.log("Deleted project successfully.");
      return {
        ...state,
        projectError: null
      };
    case "DELETE_PROJECT_ERROR":
      console.log("Project deletion failed.");
      return {
        ...state,
        projectError: action.error
      };
    default:
      return state;
  }
}
