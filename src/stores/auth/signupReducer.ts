// auth/signupReducer.ts
export interface SignupState {
  isSigningUp: boolean;
  user: null | {message: string};
  error: null | string;
}

const initialState: SignupState = {
  isSigningUp: false,
  user: null,
  error: null,
};

// Define action types for signup
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

interface SignupRequestAction {
  type: typeof SIGNUP_REQUEST;
}

interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
  payload: {message: string};
}

interface SignupFailureAction {
  type: typeof SIGNUP_FAILURE;
  payload: string;
}

export type SignupActionTypes =
  | SignupRequestAction
  | SignupSuccessAction
  | SignupFailureAction;

const signupReducer = (
  state = initialState,
  action: SignupActionTypes,
): SignupState => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        user: action.payload,
        error: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
