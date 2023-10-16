// auth/signupActions.ts
import {Dispatch} from 'redux';
import {
  SignupActionTypes,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../reducers/signupReducer'; // Import action types
import {SignUpCredentials} from '@type/auth';

export const signupRequest = (): SignupActionTypes => ({
  type: SIGNUP_REQUEST,
});

export const signupSuccess = (user: {message: string}): SignupActionTypes => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error: string): SignupActionTypes => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signup = (credentials: SignUpCredentials) => {
  return async (dispatch: Dispatch<SignupActionTypes>) => {
    try {
      // Simulate an API call for signup (replace with your actual API call)
      dispatch(signupRequest());
      var formData = new FormData();
      Object.entries(credentials).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch(
        'https://www.snappstay.com/api/user/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        },
      );
      if (response.ok) {
        const user: {message: string} = await response.json();
        console.log('response', user);

        dispatch(signupSuccess(user));
      } else {
        const errorData: {errors: {email: string[]}} = await response.json();

        console.log('response', Object.values(errorData.errors).toString());

        dispatch(signupFailure(Object.values(errorData.errors).toString()));
      }
    } catch (error) {
      dispatch(signupFailure(error));
    }
  };
};
