import {useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthState} from '@stores/store';
import {getUserData} from '@stores/actions/userActions';

interface UsePostRequestProps {
  url: string;
}

const usePostRequest = <T>({url}: UsePostRequestProps) => {
  const {isAuthenticated, user, isLoggingIn} = useSelector(selectAuthState);
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
      } else {
        const data = await response.json();
        console.log(data);
        setLoading(false);
        setError(null);
      }

      if (user) dispatch(getUserData(user));
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  return {responseData, loading, error, makePostRequest};
};

export default usePostRequest;
