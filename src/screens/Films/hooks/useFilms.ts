import { FetchType } from 'api/types';
import useFetch from 'api/hooks/useFetch';
import { Films } from '../types';

interface UseFilms {
  films: Films[];
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const useFilms = (): UseFilms => {
  const { data, isLoading, error, fetchData } = useFetch(FetchType.Films);

  const filmsResponse = data?.results;

  const films = filmsResponse?.map((film: Films) => ({
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
