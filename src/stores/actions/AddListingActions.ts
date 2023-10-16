import {LoaderActionType} from '@stores/reducers/LoaderReducers';
import FormData from 'form-data';
import {Dispatch} from 'redux';
import {RootState} from '../reducers';
import {
  AddListingActionTypes,
  SET_ID,
  SET_STEP,
} from '../reducers/AddListingReducer';
import {loaderFalse, loaderTrue} from './LoaderAction';
import {getUserData} from './userActions';
import {UserActionTypes} from '@stores/reducers/userReducer';
export const setId = (id: number | null): AddListingActionTypes => ({
  type: SET_ID,
  payload: id,
});
export const setStep = (step: number | null): AddListingActionTypes => ({
  type: SET_STEP,
  payload: step,
});
// const navigation = useNavigation()
export const Add_Listing = (formData: FormData) => {
  return async (
    dispatch: Dispatch<
      AddListingActionTypes | LoaderActionType | UserActionTypes
    >,
    getState: () => RootState,
  ) => {
    console.log('formData', JSON.stringify(formData));

    dispatch(loaderTrue());

    // Get the token from your Redux state
    const token = getState().auth.token; // Adjust this based on your actual state structure
    console.log('token', token);
    const response = await fetch(
      'https://www.snappstay.com/api/create/property',
      {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      },
    )
      .then(async response => {
        if (response.ok) {
          const res: {id: number; step: number} = await response.json();
          dispatch(setId(res.id));
          dispatch(setStep(res.step));
          console.log('res', res);
          dispatch(loaderFalse());
          if (res.step == 18) {
            dispatch(getUserData());
          }
          //   dispatch(loginSuccess(user.user));
        } else {
          const errorData = JSON.stringify(response);
          console.log(errorData);
          dispatch(loaderFalse());
          //   dispatch(loginFailure(errorData.error));
        }
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        dispatch(loaderFalse());
        console.error('Fetch error:', error);
        // Handle other types of errors, like network issues
      });
  };
};
