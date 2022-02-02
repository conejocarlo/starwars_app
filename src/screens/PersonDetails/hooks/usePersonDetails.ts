import { PersonDetails } from '../types';
import useFetch from 'hooks/useFetch';
import { FetchType } from 'hooks/types';

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

  const personDetails = data?.map((person: PersonDetails) => ({
    name: person.name,
    height: person.height,
    mass: person.mass,
    hairColor: person.hairColor,
    eyeColor: person.eyeColor,
    birthYear: person.birthYear,
    gender: person.gender,
  }));

  return {
    personDetails,
    isLoading,
    error,
    fetchData,
  };
};

export default usePersonDetails;
