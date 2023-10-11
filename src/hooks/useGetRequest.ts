import {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';

interface UseGetRequestProps<T> {
  url: string;
}

const useGetRequest = <T>({url}: UseGetRequestProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setData(response.data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, loading, error};
};

export default useGetRequest;
