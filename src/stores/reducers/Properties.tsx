import {PropertiesType} from '@type/PropertiesType';

const initialState: PropertiesType = {
  properties: [],
};
export const SET_PROPERTIES = 'SET_PROPERTIES';
interface SetIdAction {
  type: 'SET_PROPERTIES';
  payload: PropertiesType[];
}
export type AddListingActionTypes = SetIdAction;
const SetProperties = (state = initialState, action: any): PropertiesType => {
  console.log('SET_PROPERTIES', action?.payload?.properties);
  switch (action?.type) {
    case SET_PROPERTIES:
      return {
        ...state,
        properties: action?.payload?.properties, // Set isLoggingIn to true during login request
      };

    default:
      return state;
  }
};
export default SetProperties;
