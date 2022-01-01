import { useEffect, useState } from 'react';

import { fetchPeople } from 'api/people';

import { People } from '../types';

interface UsePeople {
  people: People[];
}

const usePeople = (): UsePeople => {
  const [people, setPeople] = useState<People[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPeople();
      const data = response.results.map((person: People) => ({
        name: person.name,
        url: person.url,
      }));

      setPeople(data);
    };

    fetchData();
  }, []);

  return {
    people,
  };
};

export default usePeople;
