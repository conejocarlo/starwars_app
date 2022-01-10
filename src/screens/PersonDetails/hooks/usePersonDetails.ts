import { useCallback, useEffect, useState } from 'react';
import { fetchPersonDetails } from 'api/people';
import { PersonDetails } from '../types';

interface UsePersonDetails {
  personDetails: PersonDetails | undefined;
}

const usePersonDetails = (url: string): UsePersonDetails => {
  const [personDetails, setPersonDetails] = useState<PersonDetails | undefined>(
    undefined,
  );

  const fetchData = useCallback(async () => {
    try {
      const response = await fetchPersonDetails(url);
      const data: PersonDetails = {
        name: response.name,
        height: response.height,
        gender: response.gender,
      };
      setPersonDetails(data);
    } catch (e) {
      console.log(e);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    personDetails,
  };
};

export default usePersonDetails;
