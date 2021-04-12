const initialState = {
  login: false,
  user: null,
  error: {},
  transactions: {},
  total: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, login: true, user: action.payload };
    case "LOGGED_OUT":
      return { ...state, login: false, user: null };
    case "REGISTER_ERROR":
      return { ...state, error: { register: action.payload } };
    case "LOGIN_ERROR":
      return { ...state, error: { login: action.payload } };
    case "SEND_DATA":
      return { ...state, transactions: action.data };
    case "SEND_SUMMARY":
      return { ...state, total: action.info };

    default:
      return state;
  }
};
