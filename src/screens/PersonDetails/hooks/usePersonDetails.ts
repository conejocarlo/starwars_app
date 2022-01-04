import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { PersonDetailsRouteProps } from 'navigation/HomeNavigator';
import { Person } from '../types';
import { fetchPersonDetails } from 'api/people';

export interface NavigationProps {
  url: string;
}

const usePersonDetails = () => {
  const { url } = useRoute<PersonDetailsRouteProps>().params;
  const [personDetails, setPersonDetails] = useState<Person>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const response = await fetchPersonDetails(url);
      const data = response.results.map((person: Person) => ({
        height: person.height,
        mass: person.mass,
        hair_color: person.hair_color,
        skin_color: person.skin_color,
        eye_color: person.eye_color,
        gender: person.gender,
      }));

      setIsLoading(false);
      setPersonDetails(data);
    };

    fetchData().catch(() => setIsError(true));
  }, [url]);

  return {
    personDetails,
    isLoading,
    isError,
  };
};

export default usePersonDetails;
