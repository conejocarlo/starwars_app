import { ShipDetails } from '../types';
import useFetch from 'hooks/useFetch';
import { FetchType } from 'hooks/types';

interface UseShipDetails {
  shipDetails: ShipDetails | undefined;
  isLoading: boolean;
  error: Error | undefined;
  fetchData: () => Promise<void>;
}

const useShipDetails = (url: string): UseShipDetails => {
  const { data, isLoading, error, fetchData } = useFetch(
    FetchType.ShipDetails,
    url,
  );

  const shipDetails = {
    name: data?.name,
    model: data?.model,
    manufacturer: data?.manufacturer,
    cost: data?.cost_in_credits,
    crew: data?.crew,
    passengers: data?.passengers,
  };

  return {
    shipDetails,
    isLoading,
    error,
    fetchData,
  };
};

export default useShipDetails;
