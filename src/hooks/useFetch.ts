import { useCallback, useEffect, useState } from 'react';
import { FetchType } from './types';
import { fetchPeople, fetchPersonDetails } from 'api/people';
import { fetchShipDetails, fetchShips } from 'api/ships';
import { fetchFilmDetails, fetchFilms } from 'api/films';

interface UseFetch {
  data?: any;
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const FetchMap = {
  [FetchType.People]: fetchPeople,
  [FetchType.PersonDetails]: fetchPersonDetails,
  [FetchType.Ships]: fetchShips,
  [FetchType.ShipDetails]: fetchShipDetails,
  [FetchType.Films]: fetchFilms,
  [FetchType.FilmDetails]: fetchFilmDetails,
};

const useFetch = (fetch: FetchType, url: string = ''): UseFetch => {
  const [data, setData] = useState<FetchType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const fetchFunction = FetchMap[fetch];
      const dataResponse = await fetchFunction(url);
      setIsLoading(false);
      setData(dataResponse);
    } catch (e) {
      setIsLoading(false);
      setError(new Error('An error has occured'));
    }
  }, [fetch, url]);

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
