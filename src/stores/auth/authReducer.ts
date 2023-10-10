import {User} from '@type/user';

// auth/authReducer.tsx
export interface AuthState {
  isAuthenticated: boolean;
  user: null | User;
  error: null | string;
  isLoggingIn: boolean; // Add the isLoggingIn flag
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
  isLoggingIn: false, // Initialize isLoggingIn as false
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {id: number; username: string};
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}
interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
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
        error: null,
        isLoggingIn: false, // Set isLoggingIn to false on login success
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
        isLoggingIn: false, // Set isLoggingIn to false on login failure
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null, // Reset error on logout
      };
    default:
      return state;
  }
};

export default authReducer;
