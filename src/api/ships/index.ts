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

export const fetchShipDetails = async (url: string) => {
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
