import { useCallback, useEffect, useState } from 'react';
import { fetchApi } from 'api';
import { Data } from 'api/types';

interface UseFetch {
  data: Data[];
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const useFetch = (url: string): UseFetch => {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const responses = await fetchApi(url);
      const dataResponse = responses.results.map((point: Data) => ({
        name: point.name,
        url: point.url,
      }));
      setIsLoading(false);
      setData(dataResponse);
    } catch (e) {
      setIsLoading(false);
      setError(new Error('An error has occured'));
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading,
    error,
    fetchData,
  };
};

export default useFetch;
