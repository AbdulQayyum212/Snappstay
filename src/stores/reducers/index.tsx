import {combineReducers} from 'redux';
import authReducer, {AuthState} from '../auth/authReducer'; // Import the authReducer and its state type
import signupReducer, {SignupState} from '@stores/auth/signupReducer';
import profileReducer, {ProfileState} from '@stores/auth/profileReducer';
import AddListing, {AddListingState} from '../HomeAction/AddListingReducer';
// Define the RootState type, which combines all the individual reducer states
export interface RootState {
  auth: AuthState;
  signup: SignupState;
  profile: ProfileState;
  AddListing: AddListingState;
  // Add more state types for other reducers if needed
}

const rootReducer = combineReducers<RootState>({
  auth: authReducer,
  signup: signupReducer,
  profile: profileReducer,
  AddListing: AddListing,
  // Add more reducers and their state types if needed
});

export default rootReducer;
