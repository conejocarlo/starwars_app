import { useCallback, useEffect, useState } from 'react';
import { fetchPersonDetails } from 'api/people';
import { PersonDetails } from '../types';

interface UsePersonDetails {
  personDetails: PersonDetails | undefined;
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const usePersonDetails = (url: string): UsePersonDetails => {
  const [personDetails, setPersonDetails] = useState<PersonDetails | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await fetchPersonDetails(url);
      const data: PersonDetails = {
        name: response.name,
        height: response.height,
        mass: response.mass,
        hairColor: response.hair_color,
        eyeColor: response.eye_color,
        birthYear: response.birth_year,
        gender: response.gender,
      };
      setIsLoading(false);
      setPersonDetails(data);
    } catch (e) {
      setIsLoading(false);
      setError(new Error('An error has occured'));
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    personDetails,
    isLoading,
    error,
    fetchData,
  };
};

export default usePersonDetails;
