import {SET_ID, SET_STEP} from '../reducers/AddListingReducer';
export const setId = (id: number) => {
  console.log('setId', id);
  return {
    type: SET_ID,
    payload: id,
  };
};
export const setStep = (step: number) => {
  console.log('step', step);
  return {
    type: SET_STEP,
    payload: step,
  };
};
// const navigation = useNavigation()
export const Add_Listing = (formData: any) => {
  return async (dispatch: any) => {
    try {
      console.log('formData', formData);
      const response = await fetch(
        'https://www.snappstay.com/api/create/property',
        {
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        },
      );

      if (response.ok) {
        const res = await response.json();
        // if(res?.step === "18"){
        //   Toast.show(ToastSuccess("Property Create Successfully"));
        //   // navigation.goBack();
        // } else{
        dispatch(setId(res?.id));
        dispatch(setStep(res?.step));
        console.log('res', res);
        //   dispatch(loginSuccess(user.user));
      } else {
        const errorData = await response.json();
        console.log(errorData);
        //   dispatch(loginFailure(errorData.error));
      }
    } catch (error) {
      console.log('catch', error);
      // dispatch(loginFailure('An error occurred while logging in.'));
    }
  };
};
