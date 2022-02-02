import { FetchType } from 'hooks/types';
import useFetch from 'hooks/useFetch';
import { Films } from '../types';

interface UseFilms {
  films: Films[];
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const useFilms = (): UseFilms => {
  const { data, isLoading, error, fetchData } = useFetch(FetchType.Films);

  const films = data?.map((film: Films) => ({
    title: film.title,
    url: film.url,
  }));

  return {
    films,
    isLoading,
    error,
    fetchData,
  };
};

export default useFilms;
