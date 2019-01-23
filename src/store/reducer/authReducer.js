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
    case "SIGNOUT_SUCCESS":
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Signup successful.");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("Signup failed.");
      return {
        ...state,
        authError: action.error.message
      };
    default:
      return state;
  }
}
