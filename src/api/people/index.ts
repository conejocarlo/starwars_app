import { PeopleResponse } from './types';
import { baseURL } from '../config';

export const fetchPeople = async (): Promise<PeopleResponse> => {
  const url = `${baseURL}/people`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    return await response.json();
  } catch (e) {
    console.log('e: ', e);
    return { results: [] };
  }
};
