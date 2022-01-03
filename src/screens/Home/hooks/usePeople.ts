import { useEffect, useState } from 'react';

import { fetchPeople } from 'api/people';

import { People } from '../types';

interface UsePeople {
  people: People[];
  isLoading: boolean;
  isError: boolean;
}

const usePeople = (): UsePeople => {
  const [people, setPeople] = useState<People[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const response = await fetchPeople();
      const data = response.results.map((person: People) => ({
        name: person.name,
        url: person.url,
      }));

      setIsLoading(false);
      setPeople(data);
    };

    fetchData().catch(() => setIsError(true));
  }, []);

  return {
    people,
    isLoading,
    isError,
  };
};

export default usePeople;
