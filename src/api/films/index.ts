import { baseURL } from 'api/config';
import { FilmsRespose } from './types';

export const fetchFilms = async (): Promise<FilmsRespose> => {
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
