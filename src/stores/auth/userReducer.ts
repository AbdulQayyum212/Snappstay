import {UserData} from '@type/userProfileResponse';

// auth/userReducer.ts
export interface UserState {
  isLoadingUser: boolean;
  userData: null | UserData;
  error: null | string;
}

const initialState: UserState = {
  isLoadingUser: false,
  userData: null,
  error: null,
};

// Define action types for user update
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const CLEAR_USER = 'CLEAR_USER';

interface UpdateUserRequestAction {
  type: typeof UPDATE_USER_REQUEST;
}

interface UpdateUserSuccessAction {
  type: typeof UPDATE_USER_SUCCESS;
  payload: UserData;
  message: string;
}

interface UpdateUserFailureAction {
  type: typeof UPDATE_USER_FAILURE;
  payload: string;
}
interface ClearUserAction {
  type: typeof CLEAR_USER;
}

export type UserActionTypes =
  | UpdateUserRequestAction
  | UpdateUserSuccessAction
  | UpdateUserFailureAction
  | ClearUserAction;

const userReducer = (
  state = initialState,
  action: UserActionTypes,
): UserState => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        isLoadingUser: true,
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoadingUser: false,
        userData: action.payload,
        error: null,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isLoadingUser: false,
        error: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        userData: null,
        error: null, // Reset error on logout
      };
    default:
      return state;
  }
};

export default userReducer;
