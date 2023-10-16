
export interface AddListingState {
    id:null|number | string// Add the isLoggingIn flag
    step:null|number | string // Add the isLoggingIn flag
  }
  
  const initialState: AddListingState = {
    id:null,
    step:null // Initialize isLoggingIn as false
  };
  export const SET_ID = 'SET_Id';
  export const SET_STEP = 'SET_step';
  interface SetIdAction {
    type: typeof SET_ID;
    payload: number;
  } 
  interface SetStepAction {
    type: typeof SET_STEP;
    payload: number;
  } 
  export type AddListingActionTypes = SetIdAction | SetStepAction
  const AddListing = (
    state = initialState,
    action: AddListingActionTypes,
  ): AddListingState => {
      console.log('action.payload',action.payload)
    switch (action.type) {
      case SET_ID:
        return {
          ...state,
          id: action.payload, // Set isLoggingIn to true during login request
        };
      case SET_STEP :
        return {
          ...state,
          step: action.payload, // Set isLoggingIn to true during login request
        };

      default:
        
        return state;
    }
  };
  export default AddListing