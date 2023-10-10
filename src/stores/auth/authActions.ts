// auth/authActions.tsx
import {Dispatch} from 'redux';
import {
  AuthActionTypes,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './authReducer'; // Import action types
import {LoginResponse} from '@type/login';
import {User} from '@type/user';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user: User) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
export const logout = () => ({
  type: LOGOUT,
});

export const login = (credentials: {username: string; password: string}) => {
  return async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
      // Simulate an API call for login (replace with your actual API call)
      dispatch(loginRequest());

      const response = await fetch('https://www.snappstay.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const user: LoginResponse = await response.json();
        console.log(user);
        dispatch(loginSuccess(user.user));
      } else {
        const errorData = await response.json();
        console.log(errorData);
        dispatch(loginFailure(errorData.error));
      }
    } catch (error) {
      dispatch(loginFailure('An error occurred while logging in.'));
    }
  };
};
