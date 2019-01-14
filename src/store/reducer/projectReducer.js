const initState = {
  projects: [
    { id: "1", title: "Help me find peach", content: "blah blah blah" },
    { id: "2", title: "Collect all the start", content: "blah blah blah" },
    { id: "3", title: "Egg hunt with Yoshi", content: "blah blah blah" }
  ]
};

export default function projectReducer(state = initState, action) {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project:", action.project);
  }
  return state;
}
