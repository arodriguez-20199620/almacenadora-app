import { updateSupplierService } from "../services/supplier.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { use } from "react";
import toast from "react-hot-toast";

export const useUpdateSupplier = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }) => updateSupplierService(id, body),
    onSuccess: () => {
      toast.success("Supplier updated successfully");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Failed to update supplier";
      toast.error(errorMessage);
    },
  });
};
