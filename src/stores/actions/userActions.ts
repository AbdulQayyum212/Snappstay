// auth/userActions.ts
import {Dispatch} from 'redux';
import {RootState} from '../reducers';
import {
  UserActionTypes,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  CLEAR_USER,
} from '../reducers/userReducer'; // Import action types
import {User} from '@type/user';
import {setUser} from './authActions';
import {UserData, UserProfileResponse} from '@type/userProfileResponse';
import {AuthActionTypes} from '@stores/reducers/authReducer';

export const updateUserRequest = (): UserActionTypes => ({
  type: UPDATE_USER_REQUEST,
});

export const updateUserSuccess = (
  user: UserData,
  message: string,
): UserActionTypes => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
  message: message,
});

export const updateUserFailure = (error: string): UserActionTypes => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});
export const ClearUser = (): UserActionTypes => ({
  type: CLEAR_USER,
});

export const getUserData = () => {
  return async (
    dispatch: Dispatch<UserActionTypes | AuthActionTypes>,
    getState: () => RootState,
  ) => {
    try {
      // Simulate an API call for updating the user's user (replace with your actual API call)
      dispatch(updateUserRequest());

      const token = getState().auth.token; // Adjust this based on your actual state structure

      const response = await fetch(
        'https://www.snappstay.com/api/user/profile',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
          // body: formData,
        },
      );
      // console.log(updatedUser);
      if (response.ok) {
        const updatedUser: UserProfileResponse = await response.json();
        // console.log(updatedUser.userData.users);
        dispatch(updateUserSuccess(updatedUser.userData, 'Data is here'));
        dispatch(setUser(updatedUser.userData.users));
      } else {
        const errorData = await response.json();
        console.log(errorData);
        dispatch(updateUserFailure(errorData.error));
      }
    } catch (error) {
      console.log('catch error:  ', error);
      dispatch(updateUserFailure('An error occurred while updating the user.'));
    }
  };
};
