import {User} from '@type/user';

// auth/authReducer.tsx
export interface AuthState {
  isAuthenticated: boolean;
  user: null | User;
  token: null | string;
  error: null | string;
  isLoggingIn: boolean; // Add the isLoggingIn flag
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
  isLoggingIn: false, // Initialize isLoggingIn as false
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SET_USER = 'SET_USER';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User;
  token: string;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}
interface LogoutAction {
  type: typeof LOGOUT;
}
interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | SetUserAction
  | LogoutAction;

const authReducer = (
  state = initialState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true, // Set isLoggingIn to true during login request
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        token: action.token,
        error: null,
        isLoggingIn: false, // Set isLoggingIn to false on login success
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        error: action.payload,
        isLoggingIn: false, // Set isLoggingIn to false on login failure
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        error: null, // Reset error on logout
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
