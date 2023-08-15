const initAuth = {
  userToken: false,
  loading: false,
};
function AuthReducers(state = initAuth, action) {
  switch (action.type) {
    case 'user_token':
      return {
        ...state,
        userToken: action.data,
      };
    default:
      return state;
  }
}
export default AuthReducers;
