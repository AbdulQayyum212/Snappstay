// Define the action types for authentication
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

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
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction;

export interface SignUpCredentials {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  conf_password: string;
}
