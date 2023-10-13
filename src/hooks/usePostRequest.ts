import {useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthState} from '@stores/store';
import {getUserData} from '@stores/auth/userActions';

interface UsePostRequestProps {
  url: string;
}

const usePostRequest = <T>({url}: UsePostRequestProps) => {
  const {isAuthenticated, user, isLoggingIn} = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const [responseData, setResponseData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const makePostRequest = async (data: FormData) => {
    try {
      setLoading(true);
      const response: AxiosResponse<any> = await axios.post(url, data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      setResponseData(response.data);
      setLoading(false);
      setError(null);
      if (user) dispatch(getUserData(user));
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {responseData, loading, error, makePostRequest};
};

export default usePostRequest;
