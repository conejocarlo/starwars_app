import { fetchFilmDetails } from 'api/films';
import { useCallback, useEffect, useState } from 'react';
import { FilmDetails } from '../types';

interface UseFilmDetails {
  filmDetails: FilmDetails | undefined;
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const useFilmDetails = (url: string): UseFilmDetails => {
  const [filmDetails, setFilmDetails] = useState<FilmDetails | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await fetchFilmDetails(url);
      const data: FilmDetails = {
        title: response.title,
        episodeId: response.episode_id,
        director: response.director,
        releaseDate: response.release_date,
        openingCrawl: response.opening_crawl,
      };
      setIsLoading(false);
      setFilmDetails(data);
    } catch (e) {
      setIsLoading(false);
      setError(Error('An error has occured'));
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { filmDetails, isLoading, error, fetchData };
};

export default useFilmDetails;
