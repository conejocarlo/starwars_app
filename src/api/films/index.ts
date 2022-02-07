import { baseURL } from 'api/config';
import { FilmsResponse } from './types';

export const fetchFilms = async (): Promise<FilmsResponse> => {
  const url = `${baseURL}/films`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    return await response.json();
  } catch (e) {
    throw new Error();
  }
};

export const fetchFilmDetails = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    return await response.json();
  } catch (e) {
    throw new Error();
  }
};
