import { fetchShips } from 'api/ships';
import { useCallback, useEffect, useState } from 'react';
import { Ships } from '../types';

interface UseShips {
  ships: Ships[];
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const useShips = (): UseShips => {
  const [ships, setShips] = useState<Ships[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await fetchShips();
      const data = response.results.map((ship: Ships) => ({
        name: ship.name,
        url: ship.url,
      }));
      setIsLoading(false);
      setShips(data);
    } catch (e) {
      setIsLoading(false);
      setError(Error('An error has occured'));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ships, isLoading, error, fetchData };
};

export default useShips;
