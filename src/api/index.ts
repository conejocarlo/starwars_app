import { DataResponse } from './types';

export const fetchApi = async (url: string): Promise<DataResponse> => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    return await response.json();
  } catch (e) {
    throw new Error();
  }
};
