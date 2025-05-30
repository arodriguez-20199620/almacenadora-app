import { getProductsService } from "../services/product.services";
import { useQuery } from "@tanstack/react-query";

export const useProducts = ({ page = 1, limit = 15 } = {}) => {
  return useQuery({
    queryKey: ["products", { page, limit }],
    queryFn: () => getProductsService({ page, limit }),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5, 
    cacheTime: 10 * 60 * 1000, 
    refetchOnWindowFocus: false,
  });
};
