import {combineReducers} from 'redux';
import authReducer, {AuthState} from '../auth/authReducer'; // Import the authReducer and its state type
import signupReducer, {SignupState} from '@stores/auth/signupReducer';
import profileReducer, {ProfileState} from '@stores/auth/profileReducer';
import userReducer, {UserState} from '@stores/auth/userReducer';

// Define the RootState type, which combines all the individual reducer states
export interface RootState {
  auth: AuthState;
  signup: SignupState;
  profile: ProfileState;
  userData: UserState;
  // Add more state types for other reducers if needed
}

const rootReducer = combineReducers<RootState>({
  auth: authReducer,
  signup: signupReducer,
  profile: profileReducer,
  userData: userReducer,
  // Add more reducers and their state types if needed
});

export default rootReducer;
