import { useCallback, useEffect, useState } from 'react';
import { fetchShipDetails } from 'api/ships';
import { ShipDetails } from '../types';

interface UseShipDetails {
  shipDetails: ShipDetails | undefined;
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const useShipDetails = (url: string): UseShipDetails => {
  const [shipDetails, setShipDetails] = useState<ShipDetails | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await fetchShipDetails(url);
      const data: ShipDetails = {
        name: response.name,
        model: response.model,
        manufacturer: response.manufacturer,
        cost: response.cost_in_credits,
        crew: response.crew,
        passengers: response.passengers,
      };
      setIsLoading(false);
      setShipDetails(data);
    } catch (e) {
      setIsLoading(false);
      setError(Error('An error has occured'));
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { shipDetails, isLoading, error, fetchData };
};

export default useShipDetails;
