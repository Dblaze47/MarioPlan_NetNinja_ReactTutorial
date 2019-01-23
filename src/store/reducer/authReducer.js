const initState = {
  authError: null
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed."
      };
    case "LOGIN_SUCCESS":
      console.log("Login successful.");
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
}
