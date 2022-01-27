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
    setIsLoading(true);
    setError(undefined);

    try {
      // porque hay otro await aqui si ya fetchPeople tiene awaits dentro de su definicion?
      const response = await fetchPeople();
      // esto se hace para extraer de la data solo lo que es necesario correcto? para tener un array de solo name y url
      const data = response.results.map((person: People) => ({
        name: person.name,
        url: person.url,
      }));
      setIsLoading(false);
      setPeople(data);
    } catch (e) {
      setIsLoading(false);
      setError(new Error('An error has occured'));
    }
  }, []);

  // que pasa si este useEffect no se usa? Me gustaria entender eso un poco mas
  useEffect(() => {
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
