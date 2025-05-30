import { useQuery } from "@tanstack/react-query";
import { getSuppliersService } from "../services/supplier.services";

export const useSuppliers = (params = {}) => {
  return useQuery({
    queryKey: ["suppliers", params],
    queryFn: () => getSuppliersService(params),
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
