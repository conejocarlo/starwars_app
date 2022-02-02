import { FetchType } from 'hooks/types';
import useFetch from 'hooks/useFetch';
import { Ships } from '../types';

interface UseShips {
  ships: Ships[];
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const useShips = (): UseShips => {
  const { data, isLoading, error, fetchData } = useFetch(FetchType.Ships);

  const ships = data?.map((ship: Ships) => ({
    name: ship.name,
    url: ship.url,
  }));
  return {
    ships,
    isLoading,
    error,
    fetchData,
  };
};

export default useShips;
