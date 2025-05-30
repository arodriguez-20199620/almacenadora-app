import { updateAccountService } from "../services/userSettings.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAccountService,
    onSuccess: () => {
      toast.success("Account updated successfully");
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Failed to update account";
      toast.error(errorMessage);
    },
  });
};
