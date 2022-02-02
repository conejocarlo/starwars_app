import { FetchType } from 'hooks/types';
import useFetch from 'hooks/useFetch';
import { People } from '../types';

interface UsePeople {
  people: People[];
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const usePeople = (): UsePeople => {
  const { data, isLoading, error, fetchData } = useFetch(FetchType.People);

  const people = data?.map((person: People) => ({
    name: person.name,
    url: person.url,
  }));

  return {
    people,
    isLoading,
    error,
    fetchData,
  };
};

export default usePeople;
