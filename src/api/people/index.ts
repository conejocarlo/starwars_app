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
    throw new Error();
  }
};

export const fetchPersonDetails = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error();
  }
};
