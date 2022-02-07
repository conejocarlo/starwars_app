import { PersonDetails } from '../types';
import useFetch from 'api/hooks/useFetch';
import { FetchType } from 'api/types';

interface UsePersonDetails {
  personDetails: PersonDetails | undefined;
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const usePersonDetails = (url: string): UsePersonDetails => {
  const { data, isLoading, error, fetchData } = useFetch(
    FetchType.PersonDetails,
    url,
  );

  const personDetails = {
    name: data?.name,
    height: data?.height,
    mass: data?.mass,
    hairColor: data?.hairColor,
    eyeColor: data?.eyeColor,
    birthYear: data?.birthYear,
    gender: data?.gender,
  };

  return {
    personDetails,
    isLoading,
    error,
    fetchData,
  };
};

export default usePersonDetails;
