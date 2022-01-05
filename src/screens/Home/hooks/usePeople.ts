import { useEffect, useState, useCallback } from 'react';

import { fetchPeople } from 'api/people';

import { People } from '../types';

interface UsePeople {
  people: People[];
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const usePeople = (): UsePeople => {
  const [people, setPeople] = useState<People[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetchPeople();
      const data = response.results.map((person: People) => ({
        name: person.name,
        url: person.url,
      }));
      setIsLoading(false);
      setPeople(data);
    } catch (e) {
      setError(new Error('An error has occured'));
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);

    fetchData();
  }, [fetchData]);

  return {
    people,
    isLoading,
    error,
    fetchData,
  };
};

export default usePeople;
