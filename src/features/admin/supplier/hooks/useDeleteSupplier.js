import { deleteSupplierService } from "../services/supplier.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteSupplier = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteSupplierService(id),
    onSuccess: () => {
      toast.success("Supplier deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Failed to delete supplier";
      toast.error(errorMessage);
    },
  });
};
