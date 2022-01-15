import { baseURL } from 'api/config';
import { ShipsResponse } from './types';

export const fetchShips = async (): Promise<ShipsResponse> => {
  const url = `${baseURL}/starships`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    return await response.json();
  } catch (e) {
    throw new Error();
  }
};
