import { createSupplierService } from "../services/supplier.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useCreateSupplier = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSupplierService,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      toast.success("Supplier created successfully");
      return data;
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Failed to create supplier"
      );
    },
  });
};
