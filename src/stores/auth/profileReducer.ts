import {User} from '@type/user';

// auth/profileReducer.ts
export interface ProfileState {
  isUpdatingProfile: boolean;
  user: null | User;
  error: null | string;
}

const initialState: ProfileState = {
  isUpdatingProfile: false,
  user: null,
  error: null,
};

// Define action types for profile update
export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

interface UpdateProfileRequestAction {
  type: typeof UPDATE_PROFILE_REQUEST;
}

interface UpdateProfileSuccessAction {
  type: typeof UPDATE_PROFILE_SUCCESS;
  payload: {id: number; username: string};
}

interface UpdateProfileFailureAction {
  type: typeof UPDATE_PROFILE_FAILURE;
  payload: string;
}

export type ProfileActionTypes =
  | UpdateProfileRequestAction
  | UpdateProfileSuccessAction
  | UpdateProfileFailureAction;

const profileReducer = (
  state = initialState,
  action: ProfileActionTypes,
): ProfileState => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        isUpdatingProfile: true,
        error: null,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isUpdatingProfile: false,
        user: action.payload,
        error: null,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        isUpdatingProfile: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
