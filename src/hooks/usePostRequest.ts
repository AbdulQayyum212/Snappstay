import {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';

interface UsePostRequestProps<T> {
  url: string;
  data: T;
}

const usePostRequest = <T>({url, data}: UsePostRequestProps<T>) => {
  const [responseData, setResponseData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const postData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse<T> = await axios.post(url, data);
        setResponseData(response.data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    postData();
  }, [url, data]);

  return {responseData, loading, error};
};

export default usePostRequest;
