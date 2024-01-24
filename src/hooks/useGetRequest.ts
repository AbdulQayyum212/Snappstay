import {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';
import {loaderFalse, loaderTrue} from '@stores/actions/LoaderAction';
import {useDispatch} from 'react-redux';

interface UseGetRequestProps<T> {
  url: string;
}

const useGetRequest = <T>({url}: UseGetRequestProps<T>) => {
  // const dispatch = useDispatch();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // dispatch(loaderTrue());
        const response: AxiosResponse<T> = await axios.get(url, {
          headers: {
            // Accept: 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json; charset=utf-8',
          },
        });
        // dispatch(loaderFalse());
        setData(response.data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        // dispatch(loaderFalse());
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, loading, error};
};

export default useGetRequest;
