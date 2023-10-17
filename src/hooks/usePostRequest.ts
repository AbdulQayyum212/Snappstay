import {getUserData} from '@stores/actions/userActions';
import {selectAuthState} from '@stores/store';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {ToastError, ToastSuccess} from '../Config/Constants';
import FormData from 'form-data';

const usePostRequest = <T>(url: string) => {
  const {isAuthenticated, user, isLoggingIn, token} =
    useSelector(selectAuthState);
  const dispatch = useDispatch<any>();
  const [responseData, setResponseData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const makePostRequest = async (data: FormData) => {
    try {
      // data.append('id', user?.id);
      console.log(JSON.stringify(data));

      setLoading(true);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
      console.log(response);
      // const response: AxiosResponse<any> = await axios.post(url, data, {
      //   headers: {'Content-Type': 'multipart/form-data'},
      // });
      if (response.ok) {
        const data = await response.json();
        setResponseData(data);
        setLoading(false);
        setError(null);
        Toast.show(ToastSuccess(data.message));
      } else {
        const data = await response.json();

        console.log(data);
        if (data.error) {
          Toast.show(ToastError(data.error));
        }

        setLoading(false);
        setError(null);
      }

      if (user) dispatch(getUserData());
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
        Toast.show(ToastError(error.message));
        console.log(error);
      } else {
        Toast.show(ToastError('error post request'));
        console.log('error post request');
      }
      setLoading(false);
    }
  };

  return {responseData, loading, error, makePostRequest};
};

export default usePostRequest;
