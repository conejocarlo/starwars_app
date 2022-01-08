import { useRoute } from '@react-navigation/native';
import { PersonDetailsRouteProps } from 'navigation/HomeNavigator';
import usePeople from 'screens/Home/hooks/usePeople';

export interface NavigationProps {
  url: string;
}

const usePersonDetails = () => {
  const { url } = useRoute<PersonDetailsRouteProps>().params;
  const { people } = usePeople();

  const personDet = people.filter(person => person.url === url);

  return personDet;
};

export default usePersonDetails;
