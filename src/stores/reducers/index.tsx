import {combineReducers} from 'redux';
import authReducer, {AuthState} from './authReducer'; // Import the authReducer and its state type
import signupReducer, {SignupState} from '@stores/reducers/signupReducer';
import profileReducer, {ProfileState} from '@stores/reducers/profileReducer';
import userReducer, {UserState} from '@stores/reducers/userReducer';
import AddListing, {AddListingState} from './AddListingReducer';
import LoaderReducer, {LoaderState} from './LoaderReducers';
// Define the RootState type, which combines all the individual reducer states
export interface RootState {
  auth: AuthState;
  signup: SignupState;
  profile: ProfileState;
  userData: UserState;
  AddListing: AddListingState;
  loading: LoaderState;
  // Add more state types for other reducers if needed
}

const rootReducer = combineReducers<RootState>({
  auth: authReducer,
  signup: signupReducer,
  profile: profileReducer,
  AddListing: AddListing,
  userData: userReducer,
  loading: LoaderReducer,
  // Add more reducers and their state types if needed
});

export default rootReducer;
