// auth/authActions.tsx
import {Dispatch} from 'redux';
import {
  AuthActionTypes,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_USER,
} from '../reducers/authReducer'; // Import action types
import {LoginResponse} from '@type/login';
import {User} from '@type/user';
import {UserActionTypes} from '@stores/reducers/userReducer';
import {ProfileActionTypes} from '@stores/reducers/profileReducer';

export const loginRequest = (): AuthActionTypes => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user: User): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: string): AuthActionTypes => ({
  type: LOGIN_FAILURE,
  payload: error,
});
export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});

export const setUser = (user: User): AuthActionTypes => ({
  type: SET_USER,
  payload: user,
});

export const login = (fromData: FormData) => {
  return async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
      // Simulate an API call for login (replace with your actual API call)
      dispatch(loginRequest());

      console.log(fromData);
      const response = await fetch('https://www.snappstay.com/api/user/login', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: fromData,
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
