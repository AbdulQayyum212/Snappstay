// auth/profileActions.ts
import {Dispatch} from 'redux';
import {
  ProfileActionTypes,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from './profileReducer'; // Import action types
import {User} from '@type/user';
import {UpdateUserResponse} from '@type/updateUser';
import {setUser} from './authActions';

export const updateProfileRequest = () => ({
  type: UPDATE_PROFILE_REQUEST,
});

export const updateProfileSuccess = (user: User, message: string) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: user,
  message: message,
});

export const updateProfileFailure = (error: string) => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: error,
});

export const updateProfile = (updatedProfile: User) => {
  return async (dispatch: Dispatch<ProfileActionTypes>) => {
    try {
      // Simulate an API call for updating the user's profile (replace with your actual API call)
      dispatch(updateProfileRequest());

      //   Make the API call to update the user's profile
      //   Example:
      var formData = new FormData();

      Object.entries(updatedProfile).forEach(([key, value]) => {
        if (value != null) formData.append(key, value);
      });
      formData.append('user_id', updatedProfile.id);
      const response = await fetch(
        'https://www.snappstay.com/api/user/update',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: formData,
        },
      );
      console.log(updatedProfile);
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
