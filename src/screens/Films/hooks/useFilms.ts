import { fetchFilms } from 'api/films';
import { useCallback, useEffect, useState } from 'react';
import { Films } from '../types';

interface UseFilms {
  films: Films[];
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const useFilms = (): UseFilms => {
  const [films, setFilms] = useState<Films[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await fetchFilms();
      const data = response.results.map((film: Films) => ({
        title: film.title,
        url: film.url,
      }));
      setIsLoading(false);
      setFilms(data);
    } catch (e) {
      setIsLoading(false);
      setError(new Error('An error has occured'));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    films,
    isLoading,
    error,
    fetchData,
  };
};

export default useFilms;
