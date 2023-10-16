import FormData from 'form-data';
// auth/profileActions.ts
import {AuthActionTypes} from '@stores/reducers/authReducer';
import {UpdateUserResponse} from '@type/updateUser';
import {User} from '@type/user';
import {Dispatch} from 'redux';
import {RootState} from '../reducers';
import {
  ProfileActionTypes,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from '../reducers/profileReducer'; // Import action types
import {setUser} from './authActions';

export const updateProfileRequest = (): ProfileActionTypes => ({
  type: UPDATE_PROFILE_REQUEST,
});

export const updateProfileSuccess = (
  user: User,
  message: string,
): ProfileActionTypes => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: user,
  message: message,
});

export const updateProfileFailure = (error: string): ProfileActionTypes => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: error,
});

export const updateProfile = (formData: FormData) => {
  return async (
    dispatch: Dispatch<ProfileActionTypes | AuthActionTypes>,
    getState: () => RootState,
  ) => {
    try {
      // Simulate an API call for updating the user's profile (replace with your actual API call)
      dispatch(updateProfileRequest());
      console.log(formData);

      // Get the token from your Redux state
      const token = getState().auth.token; // Adjust this based on your actual state structure
      const response = await fetch(
        'https://www.snappstay.com/api/user/update',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );
      if (response.ok) {
        const updatedUser: UpdateUserResponse = await response.json();
        console.log(updatedUser);
        dispatch(updateProfileSuccess(updatedUser.user, updatedUser.message));
        dispatch(setUser(updatedUser.user));
      } else {
        const errorData = await response.json();
        console.log(errorData);
        dispatch(updateProfileFailure(errorData.error));
      }
    } catch (error) {
      console.log('catch error:  ', error);
      dispatch(
        updateProfileFailure('An error occurred while updating the profile.'),
      );
    }
  };
};
