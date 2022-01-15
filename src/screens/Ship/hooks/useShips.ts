import { fetchShips } from 'api/ships';
import { useCallback, useEffect, useState } from 'react';
import { Ships } from '../types';

interface UseShips {
  ships: Ships[];
}

const useShips = (): UseShips => {
  const [ships, setShips] = useState<Ships[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetchShips();
      const data = response.results.map((ship: Ships) => ({
        name: ship.name,
        url: ship.url,
      }));
      setShips(data);
    } catch (e) {
      Error('An error has occured');
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ships };
};

export default useShips;
