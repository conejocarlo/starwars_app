import { FilmDetails } from '../types';
import useFetch from 'hooks/useFetch';
import { FetchType } from 'hooks/types';

interface UseFilmDetails {
  filmDetails: FilmDetails | undefined;
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const useFilmDetails = (url: string): UseFilmDetails => {
  const { data, isLoading, error, fetchData } = useFetch(
    FetchType.FilmDetails,
    url,
  );

  const filmDetails = {
    title: data?.title,
    episodeId: data?.episode_id,
    director: data?.director,
    releaseDate: data?.release_date,
    openingCrawl: data?.opening_crawl,
  };

  return {
    filmDetails,
    isLoading,
    error,
    fetchData,
  };
};

export default useFilmDetails;
